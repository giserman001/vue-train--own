/**
 * 封装 localStorage
 */
export default {
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get(key: string) {
    let value: any = window.localStorage.getItem(key)
    try {
      value = JSON.parse(value)
    } catch (error) {
      console.log(error)
    }
    return value
  },
  remove(key: string) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  },
}
