// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Login'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  template: '<App/>',
  components: { App },
  })
  // Vue.component('todo-item', {
  //   template: '\
  //     <li>\
  //       {{ title }}\
  //       <button v-on:click="$emit(\'remove\')">Remove</button>\
  //     </li>\
  //   ',
  //   props: ['title']
  // })


