/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'

Vue.component('app-server-status', Home)

new Vue({
  render: h => h(App),
  el: '#app'
})
