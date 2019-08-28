export default { // 其实是一个方法  指令有自己的生命周期 bind update inserted ....
  clickOutside: {
    inserted(el, bindings) { // el是真实dom元素
      document.addEventListener('click', function (e) {
        // contains仅用于判断DOM元素的包含关系  参数是Element类型
        if (e.target === el || el.contains(e.target)) {
          return
        }
        bindings.value() // 触发close事件
      })
    },
    unbind() {
        // document.removeEventListener('XXX')
    }
  }
}
