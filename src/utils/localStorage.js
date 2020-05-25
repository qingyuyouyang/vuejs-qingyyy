/*
* @Author: faker
* @Date:   2020-05-25 15:15:25
* @Last Modified by:   faker
* @Last Modified time: 2020-05-25 15:15:38
*/
const ls = localStorage

export default {
  setItem(name, value) {
    ls.setItem(name, JSON.stringify(value))
  },
  getItem(name) {
    try {
      return JSON.parse(ls.getItem(name))
    } catch (e) {
      return null
    }
  },
  removeItem(name) {
    ls.removeItem(name)
  }
}