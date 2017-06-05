let host = "https://www.zlin-e.com/wxapp/";//小程序调用接口
const config = {
  API_HOST: "https://www.zlin-e.com/wxapp/index.php",//小程序调用接口
  indexUrl: `${host}index.php?act=index&op=index`,
  loginUrl: `${host}login.php?act=login&op=member`,
  loginsellerUrl: `${host}index.php?act=login&op=seller`,
  goodsListUrl: `${host}index.php?act=seller_goods&op=goods_list`, //首页商品列表
  //saveMemberUrl: `${host}index.php?act=login&op=member`,

}
//初始值为空对象
module.exports = config;