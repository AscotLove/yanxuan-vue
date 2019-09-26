import Cart from '@pages/Cart/Cart';
import CateList from '@pages/CateList/CateList';
import Home from '@pages/Home/Home';
import Login from '@pages/Login/Login';
import Topic from '@pages/Topic/Topic';
import User from '@pages/User/User';

export default [
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/CateList',
    component: CateList
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Topic',
    component: Topic
  },
  {
    path: '/User',
    component: User
  },
  {
    path: '/',
    redirect: '/Home'
  }
]

