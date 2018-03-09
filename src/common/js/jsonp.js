//使用jsonp做跨域处理，二次封装
import originJSonp from 'jsonp'

 export default function jsonp(url,data,option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

     return new Promise((resolve,reject) =>{
         originJSonp(url,option,(err,data) =>{
             if(!err){
                 resolve(data)
             }else{
                 reject(err)
             }
         })
     })
 }

 function param(data) {
    let url = ''
    for (let key in data) {
      let value = data[key] !== undefined ? data[key] : ''
      url += `&${key}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
  }