import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat/index.vue'
import Home from '@/pages/Home/index.vue'
import Recommand from '@/pages/Recommand/index.vue'
import Search from '@/pages/Search/index.vue'
import Mine from '@/pages/Mine/index.vue'
import Hot from '@/pages/Home/children/hot.vue'
import Box from '@/pages/Home/children/box.vue'
import Dress from '@/pages/Home/children/dress.vue'
import Electric from '@/pages/Home/children/electric.vue'
import Food from '@/pages/Home/children/food.vue'
import Men from '@/pages/Home/children/men.vue'
import Mother from '@/pages/Home/children/mother.vue'
import Store from '@/pages/Home/children/store.vue'
import Underwear from '@/pages/Home/children/underwear.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: 'hot', component: Hot},
        {path: 'box', component: Box},
        {path: 'dress', component: Dress},
        {path: 'electric', component: Electric},
        {path: 'food', component: Food},
        {path: 'men', component: Men},
        {path: 'mother', component: Mother},
        {path: 'store', component: Store},
        {path: 'underwear', component: Underwear},
        {path: '/home', redirect: '/home/hot'},
      ]
    },{
      path: '/chat',
      name: 'Chat',
      component: Chat
    },{
      path: '/recommand',
      name: 'Recommand',
      component: Recommand
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    },{
      path: '/',
      redirect: '/home'
    },
  ]
})
