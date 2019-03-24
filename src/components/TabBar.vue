<template>
  <div class="tab-bar">
    <li class="tab-item" v-for="(item, index) in tabbarArr" :key="item.name" @click="switchTo(index)">
      <img :src="$route.path.includes(item.path) ? item.selected : item.normal" :alt="item.name">
      <span :class="{'on': $route.path.includes(item.path)}">{{item.name}}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      tabbarArr: [{
        normal: require('../../static/img/icon_home.png'),
        selected: require('../../static/img/icon_home_selected.png'),
        name: '首页',
        path: '/home'
      },{
        normal: require('../../static/img/icon_intro.png'),
        selected: require('../../static/img/icon_intro_selected.png'),
        name: '推荐',
        path: '/recommand'
      },{
        normal: require('../../static/img/icon_search.png'),
        selected: require('../../static/img/icon_search_selected.png'),
        name: '搜索',
        path: '/search'
      },{
        normal: require('../../static/img/icon_chat.png'),
        selected: require('../../static/img/icon_chat_selected.png'),
        name: '聊天',
        path: '/chat'
      },{
        normal: require('../../static/img/icon_mine.png'),
        selected: require('../../static/img/icon_mine_selected.png'),
        name: '我的',
        path: '/mine'
      },]
    };
  },

  // components: {},

  // computed: {},

  // mounted: {},

  methods: {
    switchTo(index) {
      let path = this.tabbarArr[index].path;

      this.$router.replace(path)
      
    }
  }
}

</script>
<style lang='scss' scoped>
.tab-bar {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
  .tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
    img {
      width: 28%;
      margin-bottom: 1px;
    }
    .on {
      color: rgb(225,42,31)
    }
  }
}
</style>