import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//vant UI 库
import Vant from 'vant';
import 'vant/lib/index.css';
//axios
import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
