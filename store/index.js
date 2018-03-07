import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        bgColor:['#33CCCC','#5160AC'],
        cur_menu:{id:"home",name:"培训进度统计",submenus:[{name:"未开业中心培训作业进度",id:"ReptWKY",active:true},{name:"其它统计",id:"ReptWKY",active:false}]},
        menu:[
          {id:"home",name:"培训进度统计",submenus:[{name:"未开业中心培训作业进度",id:"ReptWKY",active:true},{name:"其它统计",id:"ReptWKY",active:false}]},
          {id:"sales",name:"销售培训统计",submenus:[{name:"销售专项培训报名统计",id:"ReptXSBM",active:true},{name:"其它统计",id:"ReptXSBM",active:false}]}
        ],
        counter: parseInt(Math.random()*10000),
        cur_user:{},
        login:[{user:"training",pwd:"Tlgc@1103",auth:false},{user:"sales",pwd:"Tlgc@1103",auth:false}]
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
        state.cur_menu = m;
        //console.log(m);
      },
      auth(state){
         state.login.forEach((login) =>{
          //console.log(login.auth)
          if(login.auth) {
            state.cur_user = login;
          }
        })
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