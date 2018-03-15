/*!
 * vw.js v0.0.1
 * 2018 603803799@qq.com
 * Released under the MIT License.
 */

export default function (company = 100) {

  const HTML = document &&
    (document.documentElement || document.getElementsByTagName('html')[0]), // 获取到html元素
    EVENT = 'orientationchange' in window ? 'orientationchange' : 'resize' // 根据设备选择事件

  function method () {
    const {clientWidth} = HTML
    return HTML.style.fontSize = clientWidth && ((clientWidth / company) + 'px')
  }

  try {
    window.addEventListener(EVENT, method) || document.addEventListener('DOMContentLoaded', method)
  } catch (error) {
    window.attachEvent(EVENT, method) || document.attachEvent('DOMContentLoaded', method)
  } finally {
    location.origin.includes('http://localhost:') && console.log(`1vw = ${HTML.clientWidth / company}px --https://github.com/noteScript/em_vw`)
  }

  return { company }
}//github.com => https://github.com/noteScript/em_vw.git