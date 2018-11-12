<template>
  <div class="home">
    <app-header></app-header>
    <Post v-for="(post, index) in posts" :title="post.title" v-bind:key="post.id"
    :sub_body="post.sub_body" :time_stamp="post.time_stamp" class="post-container">
    </Post>
  </div>
</template>

<script>
  import Post from './components/Post';
  import AppHeader from '@/components/app-header';
  import {mapState} from 'vuex'
    export default {
      name: "home",
      computed: mapState({
        posts: state => state.posts
      }),
      beforeMount() {
        this.$store.dispatch('loadPosts')
      },
      components: {
          Post, AppHeader
      }
    }
</script>

<style scoped>
.post-container{
  width: 55%;
  margin-left: auto;
  margin-right: auto;
}
</style>
