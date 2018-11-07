<template>
  <div class="header">
      <nav class="navbar">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </nav>
      <div class="logo">sss</div>
  </div>
</template>

<script>
    export default {
        name: "app-header"
    }
</script>

<style scoped>
.header{
  height: 56px;
  background-color: #f7f7f7;
  padding: 0 21px;
  display: flex;
  position: relative;
  overflow: hidden;
}
  .logo{
    position: absolute;
    height: 56px;
    left: 50%;
  }
  .navbar{
    margin-left: 0px;
  }

  .navbar ul{
    display: flex;
  }
  .header li{
    list-style: none;
  }
  .header a{
    text-decoration: none;
    color: black;
  }
</style>
