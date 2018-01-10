/**
 * Created by saturn on 2018/1/6.
 */


/*------------------------------Test---------------------------------*/
export const news = 'http://3g.163.com/touch/jsonp/sy/recommend/0-9.html';

/*------------------------------Base---------------------------------*/
export const ApiUrl = 'http://127.0.0.1:8080/api';// 图片服务器地址
export const ImgSrc = 'http://127.0.0.1:8080/';    // 图片服务器地址

/*------------------------------User---------------------------------*/
export const getCode = ApiUrl + '/v1/user/code/';     // 验证码
export const login = ApiUrl + '/v1/user/login';       // 登录
export const register = ApiUrl + '/v1/user/register'; // 注册

/*------------------------------Home---------------------------------*/
export const getHomeList = ApiUrl + '/v1/home/list';      // 首页列表数据
