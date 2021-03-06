import Vue from 'vue'
import Router from 'vue-router'
import Home from '../features/home/Home'
import AdminMain from '../layouts/admin/Main'
import PostAdmin from '../features/admin/PostAdmin';
import CreatePost from '../features/admin/CreatePost';
import AddCategory from '../features/admin/AddCategory.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: 'Trang chủ'}
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminMain,
      meta: {title: 'Admin'},
      children: [
        {
          path: 'posts', name: 'Posts', component: PostAdmin, meta: {title: 'router'}
        },
        {
          path: 'categories', name: 'AddCategory', component: AddCategory
        },
        {
          path: 'posts/create', name:'CretePost', component: CreatePost
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
