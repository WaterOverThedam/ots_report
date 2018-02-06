import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        bgColor:['#33CCCC','#5160AC'],
        menu:"进度统计",
        counter: parseInt(Math.random()*10000),
        login:{user:"training",pwd:"Tlgc@1103",auth:false}
    },
    getters:{
      

    },
    mutations: {
      increment (state) {
        if(state.counter++>10000){
            state.counter=0;
            console.log(state.counter);
        }
      },
      menuChange(state,m){
        state.menu = m;
        //console.log(m);
      },
      auth(state){
        state.login.auth=true;
      }
    },
    actions: {
  		incrementAsync ({ commit }) {
  		 setInterval(() => {
  		  commit('increment')
  		 }, 3000)
  		}

    }
  })
}

export default createStore