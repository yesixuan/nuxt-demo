/**
 * @description 获取cookie值
 * @param name  需要获取cookie中的key
 * @param cookieStr cookie字符串
 * @returns {string} 返回cookie中 key为 name的值
 * */

export default function getCookie(name, cookieStr) {
  cookieStr = cookieStr || document.cookie
  if (cookieStr.length > 0 && name !== '') {
    let startCookie = cookieStr.indexOf(name + '=')
    if (startCookie !== -1) {
      startCookie = startCookie + name.length + 1
      let endCookie = cookieStr.indexOf(';', startCookie)
      if (endCookie === -1) {
        endCookie = cookieStr.length
      }
      return unescape(cookieStr.substring(startCookie, endCookie))
    }
  }
  return ''
}
