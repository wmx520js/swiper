<template>
  <div class="main-box">
      <div class="p">
        <!-- input框 -->
        <input type="text" placeholder="热门搜索">
        分类
      </div>
      <div class="swiper">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="/img/1.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="/img/2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="/img/3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="/img/4.jpg" alt=""></van-swipe-item>
</van-swipe>
      </div>
      <div class="list">
        <!-- 列表渲染 -->
        <dl v-for="(item,index) in list " :key="index" class="dl">
          <dt>
           <van-icon name="smile" />
          </dt>
          <dd>{{item.title}}</dd>
        </dl>
      </div>
      <div class="jin">
        <!-- 金牌商家 -->
         <span>fd</span>
         <span>fd</span>
         <span>fd</span>
      </div>
  </div>
</template>

<script>
export default {
 data(){
   return {
     list:[]
   }
 },
 created() {
   this.getlist()//数据
 },
 methods: {
   getlist(){
      this.$axios.get('/data').then(res=>{
        this.list=res.data
      })
   }
 },
}
</script>

<style lang="scss">
   .main-box{
     width: 100%;
     height: 100%;
     .list{
       width: 100%;
       height: 150px;
       display: flex;
       flex-wrap: wrap;
       text-align: center;
       .dl{
         width: 25%;
         i{
           font-size: 30px;
           color: orangered;
         }
       }
     }
     .jin{
       width: 100%;
       display: flex;
     
       span{  overflow-x: auto;
         width: 150%;
         height: 100px;;
         background: gold;
         margin-left:15px;
         display: inline-block;
       }
     }
     .p{
       width: 100%;
       height: 45px
       ;
       background: rgb(13, 104, 13);
       line-height: 45px;
       text-align: center;  
       input{
         width: 280px;
         height: 30px;
         margin-right: 10px;
       }
     }
     .swiper{
       width: 90%;
       height: 220px;
       margin-left:5%;
       margin-top:10px;
       img{ 
          width: 100%;
         height: 200px;
       }
      
     }
   }
</style>