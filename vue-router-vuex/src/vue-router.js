let Vue


class Router {
    constructor({routes}) {
        // reduce(callback, [initialValue])
        // callback参数
        // - previousValue (上一次调用回调返回的值，或者是提供的初始值(initialValue))
        // - currentValue (数组中当前被处理的元素)
        // - index (当前元素在数组中的索引)
        // - array (调用 reduce 的数组)
        // initialValue 作为第一次调用 callback 的第一个参数
        this.routeMap = routes.reduce((memo, current) => {
            memo[current.path] = current.component
            return memo
        }, {})
        this.route = {current: '/'}
        //定义响应式数据  刷新视图数据 文档里没有
        Vue.util.defineReactive(this, 'route', {current: '/'})
        // 路由有两种模式  # -> hash     / -> h5 api
        window.addEventListener('load', () => {
            location.hash ? '' : location.hash = '/' // 默认跳转首页
        })
        window.addEventListener('hashchange', () => {
            this.route.current = location.hash.slice(1)
        })
    }
}

Router.install = (_Vue) => {
    Vue = _Vue
    // 扩展属性，组件，指令
    // [mixin属性，后组件属性] 组件混合是有有优先级的 
    Vue.mixin({
        // 内部会把这个对象给每个组件的属性混合在一起
        beforeCreate() {
            // 判断组件是不是根组件
            if(this.$options && this.$options.router) {
                this._router = this.$options.router
            }else{
                // 让所有子组件 都有_router属性指向当前router
                this._router = this.$parent && this.$parent._router
            }
            Object.defineProperty(this, '$route', {
                value: {}
            })
            Object.defineProperty(this, '$router', {
                value: {}
            })
        }
    })
    Vue.component('router-link', {
        props: {
            to:{
                type: String
            }
        },
        render() {
            return <a href={`#${this.to}`}>{this.$slots.default}</a>
        }
    })
    Vue.component('router-view', {
        render(h) {
            return h(this._router.routeMap[this._router.route.current])
        }
    })
}

export default Router