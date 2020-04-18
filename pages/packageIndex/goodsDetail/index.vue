<template>

  <view class="goods-detail-ctner">
    <import src="../../../common/wxParse/wxParse.wxml"></import>
      <view class="goods-con-outer">
          <view class="goods-banner" :style="'height: ' + Hei + ';line-height: ' + Hei">
            <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#999" indicator-active-color="#FFF" circular="true" style="height:100%">
              <block v-for="(item, indx) in bannerArr" :key="indx" :data-index="index">
                <swiper-item style="height: 100%; display: flex;align-items: center">
                  <!--              <image src="{{item.bannerPath}}" class="slide-image {{item.style}}" data-index="{{index}}"  bindload="imgF"/>-->
                  <image :src="item.bannerPath" style="width: 100%;" :class="(item.isSquare ? 'active' : '')"></image>
                </swiper-item>
              </block>
            </swiper>
        </view>

        <view class="goods-des-outer">
          <view class="price-outer">
            <view class="price-a">
              <view class="price-a-t">
                <text class="price-1">￥ 1</text>
                <!-- <text class="price-2">￥ {{firstSpec.vipPrice}}</text> -->
                <image src="../../../images/vip_icon.gif"></image>
              </view>
              <view class="price-a-b">
                <text>￥ {{firstSpec.marketPrice}}</text>
              </view>
            </view>
            <view class="price-b" @tap="toCollectA">
              <image v-if="isCollect" src="../../../images/start_on.png"></image>
              <image v-else src="../../../images/start_off.png"></image>

              <view>收藏</view>
            </view>
            <view v-if="!!shareObj.goodShareImg" class="price-c" @tap="toShareA">
              <image src="../../../images/vip_zhuanfa.png"></image>
              <view>分享</view>
            </view>
            <!-- <text class="price-1">￥</text><text class="price-1">{{firstSpec.price}}</text>
            <text class="price-2">￥</text><text class="price-2">{{firstSpec.vipPrice}}</text> -->
          </view>
          <view class="desc-outer">
            <text>{{goodsDetailObj.goodsName || '--'}}</text>
            <text>已售{{goodsDetailObj.buyNumber}}件</text>
          </view>
          <view class="desc-sub-outer">{{goodsDetailObj.goodsDescription}}</view>
        </view>


        <view class="G-line"></view>

        <view class="member-outer" v-if="!isMember">
			<view class="mem-index">
				<view class="member-bg">
				  <text class="word">现开通会员，立省100元</text>
				  <view class="btn" @tap="toJoinMemberA">
				    <text>立即开通</text>
				    <image src="../../../images/unfold.png"></image>
				  </view>
				</view>
			</view>
          
        
        <view class="G-line" v-if="!isMember"></view>
        <!--        评价内容区 start-->
        <view class="goods-des-comment" @tap="LookMore" v-if="goodsComment.total > 0">
          <view class="commentIndex">
            <view class="g1">
              <view>商品评价（{{goodsComment.total}}）</view>
              <view>查看更多></view>
            </view>
            <view class="g-content">
              <view class="g-c1">
                <image :src="goodsComment.rows[0].headImg"></image>
                <view>
                  <view class="gc1">{{goodsComment.rows[0].nickName}}</view>
                  <view class="gc2">
                    <block v-if="goodsComment.rows[0].evaluation == 5">
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                    </block>
                    <block v-if="goodsComment.rows[0].evaluation == 4">
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                    </block>
                    <block v-if="goodsComment.rows[0].evaluation == 3">
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                    </block>
                    <block v-if="goodsComment.rows[0].evaluation == 2">
                      <image src="../../../images/starred.png"></image>
                      <image src="../../../images/starred.png"></image>
                    </block>
                    <block v-if="goodsComment.rows[0].evaluation == 1">
                      <image src="../../../images/starred.png"></image>
                    </block>
                    <block v-if="goodsComment.rows[0].evaluation == 0">
                    </block>
                  </view>
                </view>
              </view>
              <view class="g-c2">
                {{goodsComment.rows[0].comment}}
              </view>
              <view class="g-c3">
                {{goodsComment.rows[0].createTime}}
              </view>
            </view>
          </view>
        </view>
        <!--        评价内容区 end-->
		
		
		<!-- 商品详情页 富文本 -->
        <view class="goods-detail">  
          <!-- <template is="wxParse" :data="wxParseData:goodsDetail.nodes"></template> -->
		  <rich-text :nodes="rich"></rich-text>
        </view>
      


      <view class="goods-bottom">
        <view class="gb-kf">
          <button class="icx-btn" open-type="contact">
            <image src="../../../images/service_light.png"></image>
            <view>客服</view>
          </button>
        </view>
        <view class="gb-cart">
          <button @tap="toCartA" class="icx-btn">
            <image src="../../../images/cart_light_sub.png"></image>
            <view>购物车</view>
          </button>
        </view>
        <view @tap="addCartA" hover-class="icx-click-hover" class="gb-join">
          加入购物车
        </view>
        <view @tap="buyNowA" hover-class="icx-click-hover" class="gb-buy">
          立即购买
        </view>
      </view>

      <view class="goods-spc-outer" v-if="showGoodsPop" @tap.stop="specPopA" @touchmove.stop="spcTouch">
          <view class="goods-spc-con" @tap.stop="specConStopA">
              <view class="goods-des">
                <view class="des-l">
                  <image :src="goodsDetailObj.goodsIco"></image>
                </view>
                <view class="des-r">
                    <view v-if="isMember">￥{{goodsSpecificationVoList[specCurrentIndex].vipPrice}}</view>
                    <view v-else>￥{{goodsSpecificationVoList[specCurrentIndex].price}}</view>
                    <view>库存{{goodsDetailObj.leavingsQuantity}}件</view>
                    <view>{{goodsDetailObj.goodsName }}</view>
                </view>
              </view>
              <view class="goods-pop-same goods-gg">
                <view class="goods-pop-title">规格</view>
                <view class="goods-outer-same goods-gg-outer">
                  <view @tap="specChoiceA(index,item)" v-for="(item, index) in goodsSpecificationVoList" :key="index" :class="'small ' + (specCurrentIndex == index ? 'active':'')">{{item.specification}}</view>
                </view>
              </view>
              <view class="goods-pop-same goods-color" v-if="goodsColorVoList.length > 0">
                <view class="goods-pop-title">颜色分类</view>
                <view class="goods-color-outer">
                    <view @tap="colorChoiceA(index,item)" v-for="(item, index) in goodsColorVoList" :key="index" :class="'small ' + (colorCurrentIndex == index ? 'active':'')">{{item.colorName}}</view>
                </view>
              </view>
              <view class="goods-pop-same goods-buy-num">
                <view class="goods-pop-title">购买数量</view>
                <AddCom></AddCom>
              </view>
              <view class="goods-pop-same goods-buy-btn">
                <button @tap="goodsSureA" class="icx-btn-same-sure">确定</button>
              </view>


          
      

      <!-- 分享弹框 -->
      <view class="share-outer" v-if="shareObj.isShowSharePop">
          <view class="share-inner">
            <view class="share-img-con">
              <image :src="shareObj.goodShareUrl"></image>
            </view>
            <view class="share-btn-wrap">
              <view class="sure-btns">
                <view class="btn">
                  <button class="icx-clear-after-border" open-type="share">
                      <image src="../../../images/we_icon.png"></image>
                      <view>微信</view>
                  </button>
                </view>
                <view class="btn" @tap="saveA">
                  <image src="../../../images/save_icon.png"></image>
                  <view>保存</view>
                </view>
              </view>
              <view class="cancel-btn" @tap="cancelShareA">取消分享</view>
              <view class="open-btn-wrap" v-if="shareObj.isShowOpen">
                <button class="icx-btn-same-sure" @tap="openSetting">打开设置页，获取相机权限</button>
              </view>
            </view>



          
      




  
</view></view></view></view></view></view></view>
</template>

<script>
import miniPro from '../../../utils/wepy-pro';
import { apiGetGoodsDetailsF, apiGetGoodsIdByShareF, apiGetGoodsShareF } from '../../../services/index';
import { apiCartSaveF, apiInfoF, apiCommentListF } from '../../../services/cart';
import { apiCollectDeleteF, apiCollectSaveF, apiCreateOrderF } from '../../../services/mine';
import WxParse from '../../../common/wxParse/wxParse.js';
import AddCom from '@/components/AddCom/index';

export default {
  data() {
    return {
		rich:"",
        Hei: "",
        isWhichFlag: '',
        // 1: 加入购物车 2：立即购买
        showGoodsPop: false,
        goodsId: '',
        shareScene: '',
        buyNum: 1,
        goodsDetailObj: {},
        bannerArr: [],
        goodsSpecificationVoList: [],
        // 规格
        specCurrentIndex: 0,
        colorCurrentIndex: 0,
        goodsColorVoList: [],
        // 颜色规格
        isCollect: false,
        isMember: false,
        shareObj: {
          goodShareImg: '',
          // goodShareUrl: 'https://csmall-test-1259120104.cos.ap-guangzhou.myqcloud.com/goods/share/20190605151323725725/b368c29c2692422fbbe22df23010c0fa.png',
          goodShareUrl: '',
          isShowSharePop: false,
          isShowOpen: false
        },
        firstSpec: {
          id: '--',
          marketPrice: '--',
          price: '--',
          specification: '--',
          vipPrice: '--'
        },
        goodsName: '',
        indicatorDots: false,
        //轮播图面板 圆点是否显示
        autoplay: true,
        interval: 5000,
        duration: 1000,
        createData: {
          prepareType: '0',
          orderDetail: []
        },
        colorId: '',
        wxData: "<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>此处可以在html2wxml.wpy中自行选择删除</p>",
        sysWidth: wx.getSystemInfoSync().windowWidth,
        userId: "",
        //userid和sk在分享商品的时候带参数，获取积分
        sk: "",
        limit: 1,
        //评价内容传的参数
        offset: 0,
        goodsComment: {}
    };
  },

  onShareAppMessage(res) {
    if (res.from === 'button') {// 来自页面内转发按钮
    }

    let _goodsId = this.goodsId;
    let _userId = this.userId;
    let _sk = this.sk; //10长度随机码 字母数字组合

    let url = '/pages/packageIndex/goodsDetail/index?goodsId=' + _goodsId + '&si=' + _userId + '&sk=' + _sk;
    console.log("商品分享链接如下");
    console.log(url);
    return {
      title: '成氏商城',
      path: `/pages/packageIndex/goodsDetail/index?goodsId=${_goodsId}&si=${_userId}&sk=${_sk}`,
      imageUrl: this.shareObj.goodShareUrl
    };
  },

  async onLoad(option) {
    this.imgH();

    if (option.si) {
      this.userId = option.si;
    }else{
		this.userId = ''
	}

    if (option.sk) {
      this.sk = option.sk;
    }else{
		this.sk = ''
	}

    this.apiGetInfoFA(this.apiGetInfoFA.bind(this)); //获取userId
    // `/pages/packageIndex/goodsDetail/index?goodsId=${_goodsId}` // 有"goodsId"字段 前端页面跳转
    // `/pages/packageIndex/goodsDetail/index?scene=${_goodsId}` // 有"scene" 分享页面跳转 => 请求接口获取商品ID
    // 【参数】例子1：goodsId=20190605151323725725
    // 【参数】例子2：scene=c#10045@s#10076

    let scene = option.scene;

    if (scene) {
      this.shareScene = scene;
      wepy.$instance.globalData.qrScene = scene || '';
      setTimeout(() => {
        this.apiGetGoodsIdByShareFA(this.apiGetGoodsIdByShareFA.bind(this));
      }, 10);
    } else {
      this.goodsId = option.goodsId;
      this.apiGetGoodsDetailsA(this.apiGetGoodsDetailsA.bind(this));
    }
  },

  onShow() {
    this.createData.orderDetail = []; // this.createData.orderDetailBoList = []
  },

  mixins: [],
  components: {
    AddCom: AddCom
  },
  props: {},
  methods: {
    spcTouch() {},

    specConStopA() {},

    specPopA() {
      this.showGoodsPop = false;
    },

    toCartA() {
      uni.switchTab({
        url: '/pages/cart/index'
      });
    },

    specChoiceA(index, item) {
      this.specCurrentIndex = index;
    },

    toJoinMemberA() {
      uni.navigateTo({
        url: `/pages/packageMine/joinMembers/index`
      });
    },

    saveA() {
      let _this = this; //获取相册授权


      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',

              success() {
                _this.downLoadA();
              },

              fail() {
                _this.downLoadA();
              }

            });
          } else {
            _this.downLoadA();
          }
        }

      });
    },

    openSetting() {
      let _this = this;

      wepy.openSetting({
        success(settingdata) {
          _this.shareObj.isShowOpen = false;
          _;

          if (settingdata.authSetting['scope.writePhotosAlbum']) {
            _this.downLoadA();
          } else {
            miniPro.showToast('获取权限失败，无法保存');
          }
        }

      });
    },

    cancelShareA() {
      this.shareObj.isShowSharePop = false;
    },

    colorChoiceA(index, item) {
      this.colorCurrentIndex = index;
    },

    toCollectA() {
      if (this.isCollect) {
        this.apiCollectDeleteA(this.apiCollectDeleteA.bind(this));
      } else {
        this.apiCollectSaveA(this.apiCollectSaveA.bind(this));
      }
    },

    toShareA() {
      this.apiGetGoodsShareFA(this.apiGetGoodsShareFA.bind(this));
    },

    goodsSureA() {
      let t = this;

      if (this.isWhichFlag == 1) {
        //加入购物车
        if (this.goodsColorVoList.length > 0) {
          this.colorId = this.goodsColorVoList[this.colorCurrentIndex].id;
        } else {
          this.colorId = '';
        }

        this.apiCartSaveA(this.apiCartSaveA.bind(this));
      } else if (this.isWhichFlag == 2) {
        //立即购买
        let _data = {
          colorId: '',
          goodsId: this.goodsId,
          specificationId: this.goodsSpecificationVoList[this.specCurrentIndex].id,
          goodsNumber: this.buyNum
        };

        if (this.goodsColorVoList.length > 0) {
          _data.colorId = this.goodsColorVoList[this.colorCurrentIndex].id;
        }

        let colorId = _data.colorId;
        let goodsId = _data.goodsId;
        let specificationId = _data.specificationId;
        let goodsNumber = _data.goodsNumber;
        let prepareType = "2";
        uni.navigateTo({
          url: `/pages/packageMine/sureOrder/index?colorId=${colorId}&goodsId=${goodsId}&specificationId=${specificationId}&goodsNumber=${goodsNumber}&prepareType=${prepareType}`
        });
      }
    },

    addCartA() {
      this.isWhichFlag = 1;
      this.showGoodsPop = true;
    },

    buyNowA() {
      this.isWhichFlag = 2;
      this.showGoodsPop = true;
    },

    LookMore() {
      //查看更多评价内容
      let _goodsId = this.goodsId;
      uni.navigateTo({
        url: `/pages/packageIndex/goodsComment/index?goodsId=${_goodsId}`
      });
    },

    downLoadA() {
      var _this = this;

      wepy.downloadFile({
        url: _this.shareObj.goodShareUrl,
        success: function (res) {
          //图片保存到本地
          wepy.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (data) {
              miniPro.showToast('保存成功');
              setTimeout(() => {
                _this.shareObj.isShowSharePop = false;
                _;
              }, 800);
            },
            fail: function (err) {
              if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                _this.shareObj.isShowOpen = true;
                _;
              }
            },

            complete(res) {}

          });
        }
      });
    },

    apiCartSaveA(fun) {
      // 添加购物车
      apiCartSaveF({
        goodsId: this.goodsId,
        specificationId: this.goodsSpecificationVoList[this.specCurrentIndex].id,
        colorId: this.colorId,
        quantity: this.buyNum
      }, fun).then(msg => {
        setTimeout(() => {
          this.showGoodsPop = false;
        }, 1500);
        miniPro.showToast('添加成功');
      }).catch(() => {});
    },

    apiCreateOrderA(fun) {
      apiCreateOrderF(this.createData, fun).then(msg => {
        // let _id = msg.id
        uni.navigateTo({
          url: `/pages/packageMine/sureOrder/index?orderId=${_id}`
        });
      }).catch(() => {});
    },

    apiCollectSaveA(fun) {
      apiCollectSaveF({
        goodsId: this.goodsId
      }, fun).then(msg => {
        miniPro.showToast('收藏成功');
        setTimeout(() => {
          this.isCollect = true;
        }, 1000);
      }).catch(err => {
        miniPro.showToast('收藏失败');
      });
    },

    apiCollectDeleteA(fun) {
      apiCollectDeleteF(this.goodsId, fun).then(msg => {
        miniPro.showToast('取消收藏成功');
        setTimeout(() => {
          this.isCollect = false;
        }, 1000);
      }).catch(err => {
        miniPro.showToast('删除收藏失败');
      });
    },

    apiGetGoodsIdByShareFA(fun) {
      var _self = this;

      apiGetGoodsIdByShareF({
        shareId: _self.shareScene
      }, fun).then(result => {
        _self.goodsId = result;

        _self.$apply();

        setTimeout(() => {
          _self.apiGetGoodsDetailsA(this.apiGetGoodsDetailsA.bind(this));
        }, 10);
      }).catch(() => {});
    },

    apiGetGoodsDetailsA(fun) {
      var _self = this;
							 // _self.userId, _self.sk, 先不传，后面要打开放下去
      apiGetGoodsDetailsF(_self.goodsId,_self.userId, _self.sk,fun).then(msg => {
        let {
          goodsDetail,
          goodsBannerVoList,
          goodsSpecificationVoList,
          goodsColorVoList,
          goodShareImg,
          collection,
          userLevel
        } = msg;
        let banners = [];

        for (let i in goodsBannerVoList) {
          goodsBannerVoList[i].style = "";
          banners.push(goodsBannerVoList[i]);
        }

        this.bannerArr = banners;
        this.goodsSpecificationVoList = goodsSpecificationVoList;
        this.goodsColorVoList = goodsColorVoList;
        let _first = goodsSpecificationVoList[0];
        this.goodsDetailObj = msg;
        this.shareObj.goodShareImg = goodShareImg;
        this.isCollect = collection; //  wx:if="{{userLevel == 1 || userLevel == 2}"

        if (userLevel == 1 || userLevel == 2) {
          this.isMember = true;
        } else {
          this.isMember = false;
        }

        if (_first) {
          this.firstSpec = {
            id: _first.id || '--',
            marketPrice: _first.marketPrice || '--',
            price: _first.price || '--',
            specification: _first.specification || '--',
            vipPrice: _first.vipPrice || '--'
          };
        }
        // WxParse.wxParse('goodsDetail', 'html', goodsDetail, _self, 5);
		let body = goodsDetail.replace(/\<img/gi, '<img style="width:100% !important;" '); //富文本里面的img设置为宽度100%
		this.rich = body
		
        this.apiCommentListFA(this.apiCommentListFA.bind(this)); //获取商品评价内容列表
      }).catch(() => {});
    },

    apiGetGoodsShareFA(fun) {
      var _self = this;

      apiGetGoodsShareF(_self.goodsId, fun).then(msg => {
        this.shareObj.isShowSharePop = true;
        this.shareObj.goodShareUrl = msg;
      }).catch(() => {});
    },

    apiGetInfoFA(fun) {
      //获取用户userid
      let _self = this;
      apiInfoF(fun).then(msg => {
        _self.userId = msg.userId;
        _self.sk = Math.random().toString(21).substr(4);
      }).catch(() => {});
    },

    apiCommentListFA(fun) {
      let t = this;
      let param = {
        limit: t.limit,
        offset: t.offset
      };
      let goodsId = t.goodsId;
      apiCommentListF(param, goodsId, fun).then(msg => {
        console.log(msg);
        t.goodsComment = msg;
      }).catch(() => {});
    },

    imgH(e) {
      var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度

      console.log(winWid);
      this.Hei = winWid + "px";
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

// @import "../../../common/wxParse/wxParse.css";
@import "./index";

</style>