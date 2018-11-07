<template>
  <div>
    <h3 class="title"><a href="#">{{title}}</a></h3>
    <p class="content">{{sub_body}}</p>
    <h6 class="time">{{time_stamp}}</h6>
  </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['title', 'sub_body', 'time_stamp']
    }
</script>

<style scoped>
  .title a{
    color: black;
    text-decoration: none;
    font-size: 1.6rem;
  }
  .content{
    margin: 20px 0;
  }
  .time{
    color: #c6c6c6;
    font-size: 13px;
    font-weight: unset;
  }
</style>
