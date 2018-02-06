<template>
 <main>
    <Menu></Menu>
    <div class="pusher" id="box">
        <div class="ui masthead  segment">
            <div class="ui container">
                <div class="ui breadcrumb">
                    <a class="section" id="menu">报表</a>
                    <i class="right chevron icon divider"></i>
                    <div class="active section" v-text="menu"></div>
                </div>
            </div>
        </div>
        <div class="ui container">
            <div class="ui segments">
                <div class="ui segment">
                    <div class="ui one column stackable grid">
                        <div class="column">
                            <div class="ui tabular menu">
                                <a class="item" data-id="home" @click="submenu='home'" :class="{'active':submenu=='home'}">
                                    未开业中心培训作业进度
                                </a>
                                <a class="item" data-id="other" @click="submenu='other'" :class="{'active':submenu=='other'}">
                                    其它统计
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <PageA></PageA>
            </div>
        </div>
    </div>
    
 </main>
 
</template>

<script>

 
import PageA from '~/components/PageA'
import Menu from '~/components/Menu'
import Form from '~/components/Form'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  head:{
    title:"OTS报表",
	script: [
        {src: 'js/gym.js'}
        
    ]
  },
  computed:{
    menu(){
      return this.$store.state.menu;
    },
    loginInf(){
      return this.$store.state.login;
    }
  },
  data () {
    return {
     submenu:"home"
    }
  },
  components: {
    PageA,
    Menu,
    Form
  },
  
  methods: {
    ...mapMutations([
      "tester"
      ]),
    ...mapActions([
      "incrementAsync"
      ])
  },
  mounted(){
    if(!this.loginInf.auth){
        this.$alert('<strong style="padding-left:20px;font-size:25px">请先登陆系统！</strong>',"警告", {
            title:"警告",
            dangerouslyUseHTMLString: true,
            center:true,
            type:'error',
            confirmButtonText:"确定",
            roundButton:true
        })
        this.$router.push('/')
    }
    $("#menu").on('click', function () {
        $(".ui.sidebar").sidebar('toggle');
    });
  } 
 
}
</script>

<style scoped>
    .ui.container{
       width:90%!important;
   }
  
  @media screen and (max-width:767px){
    main {
      margin-top: 8%;
    }
  }
 
</style>