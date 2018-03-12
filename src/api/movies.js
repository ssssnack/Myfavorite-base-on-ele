import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'
//拼接连接上的一些参数
export function getMovies() {
    const url = '/api/getMovies'

    const data = Object.assign({},commonParams,{
        //请求自由的参数,没有就填空
        //uin:0
    })


    return axios.get(url,{
        params: data
    }).then((res) =>{
        return Promise.resolve(res.data)
    })
}