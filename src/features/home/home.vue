<template>
  <div class="home">
    <Post v-for="post in posts"
    :title="post.title" :sub_body="post.sub_body" :time_stamp="post.time_stamp">
    </Post>
  </div>
</template>

<script>
  import Post from './components/Post';
  import {mapState} from 'vuex'
  import PostService from '../../api/PostService'
    export default {
        name: "home",
        data(){
          return {
            posts: []
          }
        },
      computed: {
        ...mapState(['title', 'test'])
      }
      ,
      created(){
        PostService.getPost()
          .then(response =>{
            this.posts = response.data.data
          })
      },
      methods:{
           getPost(){
            PostService.getPost()
              .then(response =>{
                this.posts = response.data.data
              });
          }
      },
      components: {
          Post
      }
    }
</script>

<style scoped>
.home{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
