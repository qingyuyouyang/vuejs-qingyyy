/*
* @Author: faker
* @Date:   2020-05-25 15:01:58
* @Last Modified by:   faker
* @Last Modified time: 2020-05-25 15:28:10
*/
import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

const directives = {
  validator,
  dropdown
}

for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}