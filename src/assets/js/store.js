import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        position:{},
        loading:{
            isShow:false,
            content:''
        }
    },
    mutations: {
        changeMaskState(state,val){
            state.loading.isShow = val;
        }
    },
    getters: {

    }
});

export default store;