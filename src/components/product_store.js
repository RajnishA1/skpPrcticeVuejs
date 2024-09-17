import { createStore } from 'vuex';

export default createStore({
    state: {
    clothStok:2,
      Count:10
    },
    mutations:{
      bjp(state){
        state.BJP+=1;
      }
    },
    actions:{
       updateBJP({commit}){
        commit('bjp')
       }
    }
});