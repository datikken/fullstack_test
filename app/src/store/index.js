import Vue from 'vue'
import Vuex from 'vuex'

import data from '../data/data.json';
import names from '../data/names.json';

Vue.use(Vuex)

let allProducts = data.Value.Goods.reduce(function (r, a) {
    r[a.G] = r[a.G] || [];
    r[a.G].push(a);
    return r;
}, Object.create(null));

export const store = new Vuex.Store({
    state: {
        groups: allProducts,
        names,
        currencies: {
            usd: 76
        }
    },

    mutations: {},

    actions: {},

    getters: {
        get_group_name_by_id: state => id => {
            return state.names[id].G
        },
        get_product_namings_by_group_and_id: state => (group, id) => {
            return state.names[group].B[id];
        },
        usd_to_rub: state => price => {
            return price * state.currencies.usd;
        }
    }
})
