<template>
  <view class="recom-ctner container-same">
    <view class="recom-same-top">
      <view class="recom-same-content">
        <view class="recom-des-round">
          <view class="recom-des">
            <view class="t1">
              <view class="t1-one">
               <image src="../../images/attention_favor_fill.png"></image>
               <!-- <view><open-data type="userAvatarUrl"></open-data></view> -->
              </view>
              <view class="t1-two">
                <!-- <view><open-data type="userNickName"></open-data></view> -->
                <view v-if="Info.userType !== 0">我的推荐码：{{Info.invitationCode}}</view>
              </view>
            </view>
            <view class="t2">
              <view class="t2-one" @click="newRead">
                <image src="../../images/new-people.png"></image>
                <view class="icx-btn-same-sure">新人必读</view>
              </view>
             <view class="t2-two" @click="'goWork(' + Info.userType + ')'">
                <button class="icx-btn-same-sure">进入工作台</button>
              </view>
              <view class="t2-three" @click="commonProblem">
                <image src="../../images/commonProblem.png"></image>
                <view class="icx-btn-same-sure">常见问题</view>
              </view>
            </view>
          </view>
        </view>

      </view>

    </view>
    <view class="recom-same-center">
      <view :class="'center-around  ' + (Info.userLevel === 0 ? 'css0' : Info.userLevel === 1 ? 'css1' : 'css2')" @click="goMember()">
        <view class="topImg" v-if="Info.userLevel === 0">普通会员</view>
        <view class="topImg" v-else-if="Info.userLevel === 1">月卡会员</view>
        <view class="topImg" v-else="Info.userLevel === 2">年卡会员</view>
        <view class="index-line">
          <view :class="(Info.userLevel === 0 ? 'color-line0' : Info.userLevel === 1 ? 'color-line1' : 'color-line2')" style="width: 30%"></view>
        </view>
        <view class="bottom-view">
          <view class="grow-text">
            <text>成长值</text>
            <text> {{Info.growth}}</text>
          </view>
          <view class="picture-text-index">
              <view class="every">
                <view class="every-center">
                  <view><image src="../../images/menber.png"></image></view>
                </view>
                <view>会员礼</view>
              </view>
            <view class="every">
              <view class="every-center">
                <view><image src="../../images/miao1.png"></image></view>
              </view>
              <view>专属秒杀</view>
            </view>
            <view class="every">
              <view class="every-center">
                <view><image src="../../images/member-1yuan.png"></image></view>
              </view>
              <view>1元购</view>
            </view>
            <view class="every">
              <view class="every-center">
                <view><image src="../../images/xianxia.png"></image></view>
              </view>
              <view>新品试用</view>
            </view>
            <view class="every">
              <view class="every-center">
                <view><image src="../../images/all-tequan.png"></image></view>
              </view>
              <view>全部特权</view>
            </view>
          </view>
        </view>
      </view>
      <view class="center-1">
        <text>我的积分 </text>
        <text> {{Info.integration}}</text>
        <button class="icx-btn-same-sure" @click="toIntegral">领取积分</button>
      </view>
    </view>
    <view class="recom-play-cheng">
      <view class="p1">玩转成氏商城</view>
      <view class="p2">
        <!--        <video src="http://mvvideo1.meitudata.com/575c2b652d7375255.mp4"></video>-->
<!--        <video src="https://csmall-1259120104.cos.ap-guangzhou.myqcloud.com/videos/video.mp4"></video>-->
        <video src="https://csmall-1259120104.cos.ap-guangzhou.myqcloud.com/videos/lv_0_20200313193022.mp4"></video>
      </view>
    </view>
    <scroll-view scroll-y="true" style="height: 100%;overflow-y: hidden" @scrolltolower="loadMore">
        <view class="we"><text>我们的故事</text></view>
         <view class="recom-same" v-for="(item, index) in taleArr" :key="index"  @click="toTaleDetailA(item.id)">
			 <block >
				 <view class="recom-title" >
				     <image :src="item.authorHead"></image>
				     <text>{{item.authorName}}</text>
				     <image src="../../images/attention_favor_fill.png"></image>
				     <text>{{item.readCount}}人看过</text>
				 </view>
				 <view class="recom-img">
				   <image :src="item.taleCover"></image>
				 </view>
				 <view class="recom-des">
				   {{item.taleName}}
				 </view>
			 </block>
        </view>

        <view class="tips1" style="text-align: center">
          <view v-if="hasMore" style="display: flex;flex-direction: row;align-items: center;align-self: center;justify-content: center;">
          <icon type="waiting" size="45"></icon><text>玩命的加载中...</text></view>
          <view v-else><text>没有更多内容了</text></view>
        </view>

    </scroll-view>
  </view>

</template>
<script>
	import { apiTaleFindPageF } from '../../services/classify/index.js';
	// import miniPro from '../../utils/wepy-pro'
	import { apiGetUserInfoF } from '../../services/memberIntegral/index.js';
	export default{
	  data(){
		  return{
			  Info:{},
			  userId:'',//推荐码
			  taleArr: [],
			  hasMore: false,
			  pageParams: {
			    page: 0
			  }
		  }
	  },
	  methods:{
	    newRead(){ //新人必读
	      uni.navigateTo({ url: `/pages/packageIntegral/newPeopleRead/index` });
	    },
	    commonProblem(){//常见问题
	      uni.navigateTo({ url: `/pages/packageIntegral/commonProblem/index` });
	    },
	    toIntegral(){
	      uni.navigateTo({ url: `/pages/packageIntegral/memberIntegralSignIn/index` });
	    },
	    toTaleDetailA(taleId) {
	      uni.navigateTo({ url: `/pages/packageRecom/taleDetail/index?taleId=${taleId}` });
	    },
	    loadMore() { // 加载更多
	      if (!this.hasMore) return
	      this.pageParams.page += 1
	      this.apiTaleFindPageFA()
	    },
	    goMember(){
	      uni.navigateTo({ url: `/pages/packageIntegral/memberRank/index` });
	    },
	    goWork(e){
	      if(e == 0){
	        uni.navigateTo({ url: '/pages/packageMine/joinPartner/index' }); //普通用户 点击跳转加入合伙人页面
	      }else{
	        uni.navigateTo({ url: '/pages/packageMine/joinPartnerBench/index' });//合伙人直接进入页面
	      }
	
	    },
		apiTaleFindPageFA(fun) {
		console.log("fawefd调用")
		let t = this
		  apiTaleFindPageF({
		    page: this.pageParams.page,
		    limit: 100
		  }, fun).then((result) => {
		    let { rows, last } = result
		          this.hasMore = !last
		          this.taleArr = []
		          this.taleArr = this.taleArr.concat(rows)
			
		  }).catch((err) => {
			  console.log(err)
		  });
		},
		GetUserInfoF(){ //获取用户会员等级积分信息
		console.log("获取用户信息")
		  apiGetUserInfoF().then(msg => {
		    console.log(msg)
		    this.Info = msg
		    /** usertype 用户类型 0：普通用户 1：普通合伙人 2：高级合伙人 3：代购合伙人 */
		  }).catch(() => {})
		},
	  },
	  onLoad(option) {
	    // this.userId = uni.$instance.globalData.qrScene
	    this.GetUserInfoF()
		this.apiTaleFindPageFA() //我们的故事
	  },
	  onShow() {
	    this.GetUserInfoF()  //签到完  返回上一层页面 数据要再刷新一遍 调用
	  }
	}
</script>

<style lang="scss">

@import "./index.scss";

</style>