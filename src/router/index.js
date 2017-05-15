import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
	  path: '/demo1',
	  name: 'demo1',
	  component: resolve => require(['../components/content/demo1.vue'], resolve)
	},
	{
	  path: '/demo1',
	  name: 'demo1',
	  component: resolve => require(['../components/content/demo1.vue'], resolve)
	},
  ]
})
