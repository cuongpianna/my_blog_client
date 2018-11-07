import Vue from 'vue'
import Vuex from 'vuex'
import service from '../api'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    title: 'My custom title',
    test: service.getPost()
  }

})
