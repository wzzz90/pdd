<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
        <div class="nav-content-inner">
          <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon02.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon03.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon04.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon05.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon06.gif" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon07.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon08.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon09.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon10.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon11.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon12.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon13.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon14.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon15.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="inner-item">
            <img src="./../../imgs/nav/nav_icon16.png" alt="">
            <span>限时秒杀</span>
          </a>
        </div>
      </div>

      <!-- 滚动条 -->
      <div class="hot-nav-bottom">
        <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 屏幕宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 滚动内容宽度
      scrollContentW: 720,
      // 滚动条背景长度
      bgBarW: 100,
      //滚动条长度
      barXWidth: 0,
      //起点
      startX: 0,
      //终点
      endFlag: 0,
      //移动距离
      barMoveWidth: 0
    }; 
  },

  components: {},

  computed: {
    innerBarStyle() {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    }
  },

  mounted() {
    this.getBottomBarWidth();
    this.bindEvent();
  },

  methods: {
    getBottomBarWidth() {
      const { screenW, scrollContentW, bgBarW} = this;
      this.barXWidth = screenW * bgBarW / scrollContentW;
    },
    bindEvent() {
      this.$el.addEventListener('touchstart',this.handleTouchStart ,false);
      this.$el.addEventListener('touchmove',this.handleTouchMove ,false);
      this.$el.addEventListener('touchend',this.handleTouchEnd ,false);
    },
    handleTouchStart(event) {
      let touch = event.touches[0];
      this.startX = touch.pageX;
    },
    handleTouchMove(event) {
      let touch = event.touches[0];
      let moveWidth = Number(touch.pageX) - this.startX;
      this.barMoveWidth = -(moveWidth * this.bgBarW / this.scrollContentW);
      
      if(this.barMoveWidth <= 0) {
        this.barMoveWidth = 0
      }else if (this.barMoveWidth >= this.bgBarW - this.barXWidth ){ //右边
        this.barMoveWidth = this.bgBarW - this.barXWidth;
      }
      
    },
    handleTouchEnd() {
      this.endFlag = this.barMoveWidth;
    }
  }
}

</script>
<style lang='scss' scoped>
  .hot-nav {
    width: 100%;
    height: 180px;
    position: relative;
    background-color: #fff;
    padding-bottom: 10px;
    .hot-nav-content {
      width: 100%;
      overflow-x: scroll;
      .nav-content-inner {
        width: 720px;
        height: 180px;
        display: flex;
        flex-wrap: wrap;
        .inner-item {
          width: 90px;
          height: 90px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #666;
          img {
            width: 40%;
            margin-bottom: 5px;
          }
        }
        
      }
    }
    .hot-nav-content::-webkit-scrollbar {
      display: none;
    }
    .hot-nav-bottom {
      width: 100px;
      height: 2px;
      background-color: #ccc;
      left: 50%;
      margin-left: -50px;
      bottom: 8px;
      position: absolute;
      .hot-nav-bottom-inner {
        height: 100%;
        width: 0;
        background: orangered;
        position: absolute;
        left: 0;
      }
    }
  }
</style>