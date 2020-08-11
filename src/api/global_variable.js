/*
* @Author: faker
* @Date:   2020-08-08 16:48:41
* @Last Modified by:   faker
* @Last Modified time: 2020-08-11 15:08:58
*/

const baseURL = process.env.NODE_ENV === 'production'
    ? 'http://laravel.qingyyy.cn'
    : 'http://laravel-qingyyy.test'
const token = '123456'
const userSite = '林花落了春红，太匆匆'

export default {
  baseURL,
  token,
  userSite,
}
