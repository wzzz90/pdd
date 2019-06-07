import axios from 'axios';
import { Promise } from 'core-js';

axios.defaults.baseURL = '';
axios.defaults.timeout = 5000;


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}){
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then(response => {
      resolve(response)
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,params = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,params)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}


