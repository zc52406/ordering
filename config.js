let host = "https://www.zlin-e.com/wxapp/";//小程序调用接口
const config = {
  API_HOST: "https://www.zlin-e.com/wxapp/index.php",//小程序调用接口
  indexUrl: `${host}index.php?act=index&op=index`,
  loginUrl: `${host}login.php?act=login&op=member`,
  loginsellerUrl: `${host}index.php?act=login&op=seller`,
  //saveMemberUrl: `${host}index.php?act=login&op=member`,

}
//初始值为空对象
module.exports = config;