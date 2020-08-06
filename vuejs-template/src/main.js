import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'


Vue.use(Router)
Vue.config.productionTip = false

const router = new Router(
	{
		routes: [
			{
				path: '/',
				name: 'home',
				component: App,
			},
		]
	}
)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
