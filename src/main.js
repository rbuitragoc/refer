// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Web3 from 'web3'

Vue.config.productionTip = false
let web3 = {}
window.addEventListener('load', () => {
  if (typeof web3 !== 'undefined') {
    console.log('Metamask Injected')
    web3 = new Web3(web3.currentProvider)
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
    if (web3 !== 'undefined') {
      console.log('Local RPC service loaded')
    } else {
      console.error('Provider not found')
    }
  }
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
})
