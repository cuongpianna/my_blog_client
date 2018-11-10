import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../features/home/home'
import AdminMain from '../layouts/admin/Main'
import PostAdmin from '../features/admin/PostAdmin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminMain,
      children: [
        {
          path: 'posts', name: 'Posts', component: PostAdmin
        }
      ]
    }
  ]
})
