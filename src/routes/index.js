import Cart from '@pages/Cart/Cart';
import CateList from '@pages/CateList/CateList';
import Home from '@pages/Home/Home';
import Login from '@pages/Login/Login';
import Topic from '@pages/Topic/Topic';
import User from '@pages/User/User';
import categoryGood from '@pages/category-goods/categoryGood.vue';

export default [
    {
        path: '/Cart',
        component: Cart
    },
    {
        path: "/CateList",
        component: CateList,
        props: true,
        children: [
            {
                path: 'categoryGood/:id',
                component: categoryGood,
                props: true,
            },
            {
                path: '/',
                redirect: 'categoryGood/0'
            }
        ]
    },
    {
        path: '/Home',
        component: Home,
        meta: {
            showNav: true
        }
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

