import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入mint-ui第三方库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
