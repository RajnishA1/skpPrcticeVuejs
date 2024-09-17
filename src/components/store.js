import { createStore } from 'vuex';

export default createStore({
    state: {
      BJP:0,
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