import {Loading} from 'element-ui'
let requestCount: number = 0 // 当前页面请求计数器请求
let loadingInstance: any // loading实例

export function showFullScreenLoading() {
  if (requestCount === 0) {
    loadingInstance = Loading.service({
      fullscreen: true,
      background: 'transparent',
      spinner: 'iconfont iconLoading',
      text: '加载中'
    })
  }
  requestCount++
}

export function hideFullScreenLoading() {
  if (requestCount <= 0) { return }
  requestCount--
  if (requestCount === 0) {
    loadingInstance.close()
  }
}
