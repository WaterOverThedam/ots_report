<template>
 <div class="ui  thin sidebar left inverted vertical menu">
    <div class="header item">
        <img class="logo" src="~/assets/logo.jpg" />
    </div>
    <a href="http://ots.thelittlegym.com.cn:81/plugin/" class="item"><i class="reply icon"></i>返回主页</a>
    <a href="#" class="item" @click="menuChange('进度统计')" >进度统计<i v-if="menu=='进度统计'" class="browser icon"></i></a>
  </div>
</template>

<script>
import PageA from '~/components/PageA'
import Menu from '~/components/Menu'
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
    }
  },
  data () {
    return {
  
    }
  },
  components: {
    PageA,
	Menu
  },
  methods: {
    ...mapMutations([
      "menuChange"
      ])
  },
  mounted(){
 
  } 
 
}
</script>