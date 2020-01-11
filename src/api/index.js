/*
包含n个接口请求的函数,
返回值是promise

路径里面的是param参数
写在对象里的是query参数，即路径中问号以后的是query参数

http://localhost:3000/position/${geohash}/${xxx}?query
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash)=>ajax(`http://localhost:3000/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodsTypes = ()=>ajax('http://localhost:3000/index_category')
// 3、根据经纬度获取商铺列表
//传两个参数
export const reqShops = (latitude,longitude)=>ajax('http://localhost:3000/shops',{latitude,longitude})
//传一个参数，即传一个对象里面右经纬度两个属性
// export const reqAddress = ({latitude,longitude})=>ajax('http://localhost:3000/shops',{})
// 4、根据经纬度和关键字搜索商铺列表
// export const reqAddress = ()=>ajax()
// 5、获取一次性验证码
// export const reqAddress = ()=>ajax()
// 6、用户名密码登陆
// export const reqAddress = ()=>ajax()
// 7、发送短信验证码
// export const reqAddress = ()=>ajax()
// 8、手机号验证码登陆
// export const reqAddress = ()=>ajax()
// 9、根据会话获取用户信息
// export const reqAddress = ()=>ajax()
// 10、用户登出
// export const reqAddress = ()=>ajax()

