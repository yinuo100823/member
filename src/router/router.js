import Vue from 'vue';
import VueRouter from 'vue-router';
// @/views/login默认导入@/views/login下的index.vue组建
import Login from '../views/login'
import Layout from '../components/Layout';
import Member from '../views/member'
import Supplier from '../views/supplier'
import Staff from '../views/staff'
import Goods from '../views/goods'
import Home from '../views/home'

Vue.use(VueRouter);

const routes = [
  {
    path:'/login/',
    name:'Login',
    component:Login

  },
  {
    path:'/',
    name:'Layout',
    component: Layout,
    redirect:"/home",
    children:[
      {path:"/home/",component:Home,meta:{title:"首页"}},
      {path:"/member/",component:Member,meta:{title:"会员管理"}},
      {path:"/staff/",component:Staff,meta:{title:"员工管理"}},
      {path:"/supplier/",component:Supplier,meta:{title:"供应商管理"}},
      {path:"/goods/",component:Goods,meta:{title:"商品管理"}}
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
