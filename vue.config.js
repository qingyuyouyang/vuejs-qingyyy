/*
* @Author: faker
* @Date:   2020-05-24 10:42:04
* @Last Modified by:   faker
* @Last Modified time: 2020-05-24 10:42:10
*/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-essential/dist/'
    : '/'
}