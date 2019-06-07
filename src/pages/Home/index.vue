<template>
  <div class="home">
    <ly-tab 
    :options="options" 
    v-model="selectedId" 
    :items="items"
    @change="handleClick"
    class="fix">
    </ly-tab>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedId: 0,
      items: [
        {label : "热门"},
        {label : "服饰"},
        {label : "鞋包"},
        {label : "母婴"},
        {label : "百货"},
        {label : "食品"},
        {label : "内衣"},
        {label : "男装"},
        {label : "电器"}
      ],
      options: {
        activeColor: '#e9232c'//设置选中颜色
      },
      subRouter: ['/home/hot', '/home/dress', '/home/box', '/home/mother', '/home/store', '/home/food', '/home/underwear', '/home/men', '/home/electric']
    };
  },

  methods: {
    handleClick(item, index) {
      console.log(item, index)
      this.$router.replace(this.subRouter[index])
    }
  }
}

</script>
<style lang='scss' scoped>
.fix {
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 998;
}
</style>