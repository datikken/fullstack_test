import Vue from 'vue'
import Vuex from 'vuex'

import data from '../data/data.json';
import names from '../data/names.json';

Vue.use(Vuex)

/**
 * На мой взгляд, непосредственно для клиента, не обязательный этап.
 *
 * Гораздо лучшим решением было бы отображение подготовленных данных
 * следующих ProductInterface ...
 *
 * @param data
 * @returns {*}
 */

// TODO change left amount

function group_products(data) {
    return data.Value.Goods.reduce(function (r, a) {

        let group = names[a.G].G;
        let product = {};

        product.pr_id = a.T;
        product.pr_name = names[a.G].B[a.T].N;
        product.pr_price = a.C
        product.pr_group = group;
        product.pr_amount = a.P;

        r[group] = r[group] || [];
        r[group].push(product);

        return r;
    }, Object.create(null));
}

let prepared_products = group_products(data);

export const store = new Vuex.Store({
    state: {
        products: prepared_products,
        usd: 76,
        cart: []
    },

    mutations: {
        set_usd_price(state, newPrice) {
            return state.usd = newPrice;
        },
        add_product_to_cart(state, product) {
            var found = false;

            console.warn(product)

            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].pr_id === product.pr_id) {
                    console.log(state.cart[i], 'found product')
                    state.cart[i].pr_amount++;
                    found = true;
                }
            }

            if(!found) {
                state.cart.push(product);
            }

            state.cartTotal = state.cartSubTotal + (state.tax * state.cartSubTotal);
        },
        remove_product_from_cart(state, pid) {
            console.log('remove_product', pid)
        }
    },

    actions: {
        ADD_PRODUCT_TO_CART: ({commit}, product) => {
            commit('add_product_to_cart', product);
        },
        REMOVE_PRODUCT_FROM_CART: ({commit}, pid) => {
            commit('remove_product_from_cart', pid);
        },
        SET_USD_PRICE: ({commit}, newPrice) => {
            commit('set_usd_price', newPrice);
        }
    },

    getters: {
        curr_price_usd: state => state.usd,
        usd_to_rub: state => price => {
            return price * state.usd;
        }
    }
})
