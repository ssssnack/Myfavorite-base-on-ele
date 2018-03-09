import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

//拼接连接上的一些参数
export function getMovies() {
    const url = 'https://movie.douban.com/j/search_subjects'

    const data = Object.assign({},commonParams,{
        //请求自由的参数,没有就填空
        //uin:0
    })

    return jsonp(url,data,options)
}