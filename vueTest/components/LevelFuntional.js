export default {
    props: {
        t: {
            type: Number
        }
    },
    render(h) { // createElement()
        let tag = `h${this.t}`
        // 注意这里： 模板取slot和jsx取slot
        return <tag>{this.$slots.default}</tag>
        // return <h1 on-click={() => alert(1)} style={{color: 'red'}}>你好</h1>
    }
    // render(h) { // createElement()
    //     return h('h1', {
    //         on: {
    //             click() {
    //                 alert(1)
    //             }
    //         },
    //         attrs: {
    //             a:1
    //         }
    //     }, [h('span', {}, 'hello')])
    // }
}