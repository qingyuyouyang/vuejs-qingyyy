/*
* @Author: faker
* @Date:   2020-05-25 15:26:34
* @Last Modified by:   faker
* @Last Modified time: 2020-05-25 15:26:51
*/
export default {
  bind(el, binding, vnode) {
    const handler = () => {
      el.parentElement.classList.toggle('open')
    }

    const documentHandler = (e) => {
      const target = e.target

      if (target.isSameNode(el) || el.contains(target)) return
      el.parentElement.classList.remove('open')
    }

    el.addEventListener('click', handler, false)
    document.addEventListener('click', documentHandler, false)

    el.destroy = () => {
      el.removeEventListener('click', handler, false)
      document.removeEventListener('click', documentHandler, false)
      el.destroy = null
    }
  },
  unbind(el) {
    el.destroy()
  }
}