import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    routes: [
        {
            path: '/', name: 'box', component: resolve => require(['@/pages/box'], resolve), redirect: "/index",
            children: [
                { path: '/index', name: 'index', component: resolve => require(['@/pages/index/index'], resolve), },
                { path: '/games', name: 'games', component: resolve => require(['@/pages/games/index'], resolve), },
                { path: '/about', name: 'about', component: resolve => require(['@/pages/about/index'], resolve), },
                { path: '/variable-naming', name: 'variable-naming', component: resolve => require(['@/pages/variable-naming'], resolve), },
                { path: '/random_password', name: 'random_password', component: resolve => require(['@/pages/random_password'], resolve), },
            ]
        }

    ]
})
