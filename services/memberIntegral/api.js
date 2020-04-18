import {MAIN_DOMAIN} from '../../common/js/config';
//立即签到
const SignIn = () => `${MAIN_DOMAIN}/api/wx/user/sign`
//获取签到信息
const apiGetSignInfo = () => `${MAIN_DOMAIN}/api/wx/user/sign/get_sign_data`
// 获取用户积分会员等级信息
const apiGetUserInfo = () => `${MAIN_DOMAIN}/api/wx/user/get_my_home_data`
// 兑换专区 积分使用兑换会员
const apiExchang = () => `${MAIN_DOMAIN}/api/vip/deduct`
export {
  SignIn,
  apiGetSignInfo,
  apiGetUserInfo,
  apiExchang
}
