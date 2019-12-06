<template>
  <div id="app">
    <div class="header">
      <h3>多加网</h3>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
        <router-link to="/">首页</router-link> 
      <router-link to="/about">我的</router-link>
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  list-style: none;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
  background: #2c3e50
}
#app { 
  
   width: 100%; background: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #fff;
  .header{
    width: 100%;line-height: 50px;
    text-align: center;
    height: 50px;
    border-bottom: #eee 1px solid ;
  }
  .main{
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100%;
    height: 50px;
   border-top: #eee 1px solid ;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
     a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  }
}


</style>
