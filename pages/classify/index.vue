<template>

  <view class="classify-ctner container-same">
    <wxs src="../../utils/filter.wxs" module="tools"></wxs>

      <view class="ix-input-wrap">
        <view class="input-search" @tap="toSearchA(0)">
          <image src="../../images/nav_button_search_default.png"></image>
        </view>
        <input @tap="toSearchA(0)" disabled maxlength="200" class="icx-input" placeholder-class="icx-placeholder" placeholder="请输入商品"></input>
        <view class="input-msg" @tap="toMsgA">
          <image src="../../images/nav_button_message_default.png"></image>
        </view>
      </view>
      <view class="cs-scroll-outer">
        <view class="cs-scroll-inner">
          <view class="cs-left">
            <scroll-view scroll-y="true" style="height: 100%;width: 100%">
              <view :class="'cs-left-item ' + (currenIndex == index ? 'cs-left-item-active' : '')" v-for="(item, index) in pageList" :key="index" @tap="classifyA(item,index)">
                {{item.categoryName}}
            </view>
			</scroll-view>
          </view>
          <view class="cs-right">
            <scroll-view scroll-y="true" style="height: 100%;width: 100%">
              <view class="right-con-outer">
                <view class="right-banner">
                  <image @tap="toRightBannerA(bannerObj)" :src="bannerObj.bannerPath">
                </image></view>
                <view class="right-list">
                  <view class="right-list-item" v-for="(item, index) in subPageList" :key="index" @tap="toSearchA(item.id)">
                    <image :src="item.categoryIco"></image>
                    <view>{{item.categoryName}}</view>
                  </view>
                </view>
              </view>
            </scroll-view>
          </view>
        </view>
      </view>
  </view>

</template>

<script>
import '../../common/js/authProcess.js';
import miniPro from '@/utils/wepy-pro.js';
import { apiCategoryByParentF, apiCategoryGetBannerF } from '../../services/classify/index'; // import miniPro from '@/utils/wepy-pro.js';

export default {
  data() {
    return {
        parentId: 0,
        pageList: [],
        currenIndex: 0,
        subPageList: [],
        subParentId: '',
        bannerObj: {}
    };
  },
  async onLoad() {
    await this.apiCategoryGetBannerFA(this.apiCategoryGetBannerFA.bind(this));
    await this.apiCategoryByParentFA(this.apiCategoryByParentFA.bind(this)); //分类列表
  },
  mixins: [],
  components: {},
  props: {},
  methods: {
    toRightBannerA(item) {
      // linkType: 1-商品详情；2-H5; 3-抽奖活动
      let {
        link,
        linkType
      } = item;
      if (link) {
        if (linkType == 1) {
          miniPro.toGoodsDetail(link);
        } else if (linkType == 2) {
          miniPro.toWebView(link);
        } else if (linkType == 3) {
          uni.navigateTo({
            url: link
          });
        }
      }
    },

    toMsgA() {
      uni.navigateTo({
        url: '/pages/packageIndex/message/index'
      });
    },
    classifyA(item, index) {
      if (this.currenIndex == index) return;
      this.currenIndex = index;
      this.subParentId = item.id;
      this.apiCategoryByParentSubFA(this.apiCategoryByParentSubFA.bind(this));
    },

    toSearchA(categoryId) {
      uni.navigateTo({
        url: `/pages/packageIndex/search/index?categoryId=${categoryId}`
      });
    },

    apiCategoryByParentFA(fun) {
      //分类列表
      apiCategoryByParentF(this.parentId, fun).then(reslut => {
        let currenIndex = this.currenIndex;
        console.log(currenIndex);
        this.pageList = reslut;
        this.subParentId = reslut[currenIndex].id;
        this.apiCategoryByParentSubFA(this.apiCategoryByParentSubFA.bind(this));
      }).catch(() => {});
    },

    apiCategoryByParentSubFA(fun) {
      apiCategoryByParentF(this.subParentId, fun).then(reslut => {
        this.subPageList = reslut;
      }).catch(() => {});
    },

    apiCategoryGetBannerFA(fun) {
      apiCategoryGetBannerF(fun).then(result => {
        this.bannerObj = result;
      }).catch(() => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss">

@import "./index.scss";

</style>