import Vue from 'vue'
import Vuex from 'vuex'

import {getPosts, createCategory, getCategories, deleteCategory, createPost} from '@/api'

Vue.use(Vuex);

const state = {
  posts : [],
  categories: []
}

const actions = {
  loadPosts(context){
    return getPosts().then((response) =>{
      context.commit('setPosts', {posts: response.data})
    })
  },
  createPost(context, post){
    console.log(post);
    return createPost(post)
  },
  createCategory(context, category){
    return createCategory(category)
  },
  getCategories(context){
    return getCategories().then((response) =>{
      context.commit('setCategories', {categories: response.data.items})
    })
  },
  deleteCategory(context, id){
    console.log(id);
    return deleteCategory(id)
  }
}

const getters = {  
  // reusable data accessors
}

const mutations = {
  setPosts(state, payload){
    state.posts = payload.posts
  },
  setCategories(state, payload){
    state.categories = payload.categories
  }
}

const store = new Vuex.Store({  
  state,
  actions,
  mutations,
  getters
})

export default store 
