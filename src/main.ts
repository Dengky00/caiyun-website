import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavBottom from '@/components/NavBottom.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'

Vue.config.productionTip = false

//引入全局组件
Vue.component('NavBottom',NavBottom)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
