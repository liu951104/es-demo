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
	  path: '/前言',
	  name: '前言',
	  component: resolve => require(['../components/content/前言.vue'], resolve)
	},
	{
	  path: '/块级作用域',
	  name: '块级作用域',
	  component: resolve => require(['../components/content/块级作用域.vue'], resolve)
	},
	{
	  path: '/字符串和正则表达式',
	  name: '字符串和正则表达式',
	  component: resolve => require(['../components/content/字符串和正则表达式.vue'], resolve)
	},
	{
	  path: '/函数1',
	  name: '函数1',
	  component: resolve => require(['../components/content/函数1.vue'], resolve)
	}
  ]
})
