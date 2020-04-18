/*
 * @description: 请求接口和一个全局函数（所有项目均可使用de）
 * @Author: iconbonx-mini
 * @Date: 2018-06-29 10:39:42
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-08-15 14:14:08
 */


import {
  WECHAT_ACCESS_TOKEN_NAME,
  TOAST_DURATION,
  Version
} from '../common/js/config'

import Auth from '../common/js/authProcess.js'
// import getErrorText, { REPEAT_GROUP } from './errors'
// console.log('REPEAT_GROUP', REPEAT_GROUP)
// console.log('errors', getErrorText(REPEAT_GROUP))
let proFun = () => {
  let miniPro = {} // 挂载一些函数
  // showToast
  miniPro.showToast = (title, icon = 'none', duration = TOAST_DURATION) => {
    uni.hideToast()
    setTimeout(() => {
      uni.showToast({
        title,
        icon,
        mask: true,
        duration
      })
    }, 10)
  }

  // confirm
  miniPro.showConfirm = (obj) => {
    uni.showModal({
      title: obj.title || '提示',
      content: obj.content || '',
      success: function(res) {
        if (res.confirm) {
          obj.callback && obj.callback(true)
        } else if (res.cancel) {
          obj.callback && obj.callback(false)
        }
      }
    });
  }

  // alert
  miniPro.showAlert = ({title, content, confirmText = '确定', success}) => {
    uni.showModal({
      title,
      content,
      showCancel: false,
      confirmText,
      success: function(res) {
        if (res.confirm) {
          success && success('confirm')
        } else if (res.cancel) {
          success && success('cancel')
        }
      }
    })
  }

  // 获取access-token
  miniPro.getAccessToken = () => {
    return uni.getStorageSync(WECHAT_ACCESS_TOKEN_NAME)
  }

  //  设置 access-token
  miniPro.setAccessToken = (toekn) => {
    return uni.setStorageSync(WECHAT_ACCESS_TOKEN_NAME, toekn)
  }

  // 跳转详情页
  miniPro.toGoodsDetail = (_goodsId, groupFlag = 0) => {
    if (groupFlag == 1) {
      uni.navigateTo({ url: `/pages/packageIndex/bulkDetail/index?goodsId=${_goodsId}` })
    } else {
      uni.navigateTo({ url: `/pages/packageIndex/goodsDetail/index?goodsId=${_goodsId}` })
    }
  }

  // 跳转webview
  miniPro.toWebView = (url) => {
    uni.navigateTo({ url: `/pages/webview/index?url=${url}` });
  }

  /**
   * 成功后延时操作
   * @param {*} msg
   * @param {*} callback
   * @param {*} icon
   * @param {*} time
   * @example
   * miniPro.tipDelaySuccess('保存成功', () => { resolve(msg); }) 一般用于请求成功提示
   */
  miniPro.tipDelaySuccess = (msg, callback, icon = 'none', time = 2000) => {
    uni.showToast({
      title: msg,
      icon: icon,
      duration: time,
      mask: true
    })
    setTimeout(() => {
      callback && callback()
    }, time)
  }

  miniPro.requestPayment = (data) => {
    console.log("data",data);
    return new Promise((resolve, reject) => {
      uni.requestPayment({
        'timeStamp': data.timeStamp,
        'nonceStr': data.nonceStr,
        'package': data.packageValue,
        'signType': 'MD5',
        'paySign': data.paySign,
        success (res) {
          resolve(res)
        },
        fail (err) {
          reject(err)
        }
      })
    })
  }



  /**
   * 请求
   * @param { Object } options - { header, method, haveLoading ...}
   * @param { function } fun - this.health.bind(this) // 一定需要bind一下this
   */

  miniPro.request = (options,fun) => {
	  console.log("mini request")
	  console.log(options)
    let _header = Object.assign({}, options.header)
    const Access_Token = miniPro.getAccessToken()
    let haveLoading = options.haveLoading || true
    return new Promise((resolve, reject) => {
      if (haveLoading) {
        wx.showLoading({
          title: '加载中',
          mask: true
        })
      }
      uni.request({
        url: options.url,
        method: options.method || 'GET',
        data: options.data,
        header: {
          'version' : Version,
          'Authorization': "59accf98a0294eaba404a6e9deb0053c", // `${Access_Token}`
          'content-type': 'application/x-www-form-urlencoded', // application/json
          ..._header
        },
        success(res) {
          setTimeout(() => { uni.hideLoading() }, 0)
          let { statusCode, data } = res
          let errorCode = data.code === undefined ? 'none' : Number(data.code)
          let errMsg = data.message
          if (statusCode === 200) {
            if (errorCode == 0) {
              if (options.noOutData) {
                resolve(res.data)
              } else {
                resolve(res.data.data)
              }
            } else {
              miniPro.showToast(errMsg)
              reject(data)
            }
          } else if (statusCode == 401) { //token失效重新登录
            uni.setStorageSync('isGettingToken', false) //isGettingToken 为false走登录流程 如果为true则不走
            console.log("我是111")
            Auth.getInstance().checkWebchatAuth(true, fun, true)
          } else if (statusCode === 403) { // 未绑定需要绑定操作（手机号，验证码）
            miniPro.showToast('请先登录')
            setTimeout(() => {
              uni.navigateTo({ url: '/pages/login/index' })
            }, TOAST_DURATION - 1000)
            reject(data)
          } else if (statusCode === 400) {
            reject(data)
            // 解决置换token的时候再次返回400 isGettingToken 为true无法再次走登录流程
            uni.setStorageSync('isGettingToken', false);
            if (data.error) {
              if (data.error === 'invalid_grant' || data.error === 'wechat.code.expire' || data.error === 'wechatToken.time.out') {
                console.log("我是222")
                Auth.getInstance().checkWebchatAuth(true, fun, true)
              } else if (data.error === 'mobile.bind') {
                miniPro.showToast('手机号已被占用，无法获取数据');
              }
            }
          } else if (statusCode === 500 && data && data.status == 500) {
            reject(res.data)
          } else {
            miniPro.showToast('加载失败')
            reject(res)
          }
        },
        fail(err) {
          // 请求失败 30秒隐藏loading
          setTimeout(() => { uni.hideLoading() }, 30 * 1000)
          reject(err)
        }
      })
    })
  }

  miniPro.upload = (options, fun) => {
    let _header = Object.assign({}, options.header)
    const Access_Token = miniPro.getAccessToken()
    let haveLoading = options.haveLoading || true
    return new Promise((resolve, reject) => {
      if (haveLoading) {
        wx.showLoading({
          title: '加载中',
          mask: true
        })
      }
      uni.uploadFile({
        url: options.url,
        filePath: options.filePath,
        name: 'partnerHeadFile',
        header: {
          'version' : Version,
          'Authorization': `${Access_Token}`,
          'content-type': 'multipart/form-data', // application/json
          ..._header
        },
        formData: {
          // 'user': 'test'
        },
        success(res) {
          setTimeout(() => { uni.hideLoading() }, 0)
          let { statusCode, data } = res
          data = JSON.parse(data)
          let errorCode = data.code === undefined ? 'none' : Number(data.code)
          let errMsg = data.message
          if (statusCode === 200) {
            if (errorCode == 0) {
              if (options.noOutData) {
                resolve(res.data)
              } else {
                resolve(data.data)
              }
            } else {
              miniPro.showToast(errMsg)
              reject(data)
            }
          } else if (statusCode == 401) {
            uni.setStorageSync('isGettingToken', false)
            console.log("我是3333")
            Auth.getInstance().checkWebchatAuth(true, fun, true)
          } else if (statusCode === 403) { // 未绑定需要绑定操作（手机号，验证码）
            miniPro.showToast('请先登录')
            setTimeout(() => {
              uni.navigateTo({ url: '/pages/login/index' })
            }, TOAST_DURATION - 1000)
            reject(data)
          } else if (statusCode === 400) {
            reject(data)
            // 解决置换token的时候再次返回400 isGettingToken 为true无法再次走登录流程
            uni.setStorageSync('isGettingToken', false);
            if (data.error) {
              if (data.error === 'invalid_grant' || data.error === 'wechat.code.expire' || data.error === 'wechatToken.time.out') {
                console.log("我是44444")
                Auth.getInstance().checkWebchatAuth(true, fun, true)
              } else if (data.error === 'mobile.bind') {
                miniPro.showToast('手机号已被占用，无法获取数据');
              }
            }
          } else if (statusCode === 500 && data && data.status == 500) {
            reject(res.data)
          } else {
            miniPro.showToast('加载失败')
            reject(res)
          }
        },
        fail(err) {
          // 请求失败 30秒隐藏loading
          setTimeout(() => { uni.hideLoading() }, 30 * 1000)
          reject(err)
        }
      })
    })
  }
  return miniPro
}
let _retunrMiniPro = proFun()
export default _retunrMiniPro
