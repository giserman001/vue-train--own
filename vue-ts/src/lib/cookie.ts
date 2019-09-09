/**
 * 封装 cookie
 */
export default {
  setCookie(name: string, value: any, expiredays: any) {
    const exdate: any = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) +
      ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  getCookie(name: string) {
    const v: any = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  },
}
