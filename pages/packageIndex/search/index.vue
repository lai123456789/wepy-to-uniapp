<template>

  <view class="search-ctner container-same">
    <!-- <wxs src="../../../utils/filter.wxs" module="tools"></wxs> -->
      <view class="search-top-outer">
        <view class="ix-input-wrap">
          <view class="input-search">
            <image src="../../../images/nav_button_search_default.png"></image>
          </view>
          <input @input="bindInput" maxlength="200" class="icx-input" placeholder-class="icx-placeholder" placeholder="请输入商品"></input>
          <!-- <view class="input-close" @tap='toCloseWordA'>
            <image src='../../../images/nav_button_search_default.png' />
          </view> -->
          <view class="input-msg" @tap="toSearchA">搜索</view>
        </view>

        <view class="search-rank-outer">
          <view class="rank-same">综合</view>
          <view class="rank-same">销量</view>
          <view class="rank-same active">价格</view>
        </view>
      </view>

     <view class="ix-goods-wrap">
       <scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="loadMore">
            <block v-for="(item, index) in pageList" :key="index">
                <SearchItem :current="index" :item="item"></SearchItem>
            </block>
        </scroll-view>
      </view>


  </view>

</template>

<script>
import Auth from '../../../common/js/authProcess.js';
import { apiGoodsListF, apiGetGoodsDetailsF } from '../../../services/index';
import { apiCollectDeleteF, apiCollectSaveF } from '../../../services/mine';
import miniPro from '@/utils/wepy-pro.js';
import { showAlertTips } from '@/utils/feature.js';
import SearchItem from '@/components/searchItem/index';

export default {
  data() {
    return {
        pageList: [],
        starFData: {
          goodsId: '',
          current: ''
        },
        pageParams: {
          page: 0,
          limit: 7,
          categoryId: '',
          keyword: '',
          hasMore: false
        }
    };
  },

  async onLoad(option) {
    this.pageParams.categoryId = option.categoryId || 0;
    this.getGoodsListA(this.getGoodsListA.bind(this));
		uni.$on('goods-start-event',(current,collection) => {
		       this.starFData.goodsId = this.pageList[current].id
		            this.starFData.current = current
		            setTimeout(() => {
		              if (collection) {
		                this.apiCollectDeleteA(this.apiCollectDeleteA.bind(this))
		              } else {
		                this.apiCollectSaveA(this.apiCollectSaveA.bind(this))
		              }
		            }, 10);
		    })
		uni.$on(
			'to-goods-event',(goodsId, groupPurchase) => {
			      let _goodsId = goodsId
			      let _group = groupPurchase
				  console.log("跳转奥")
			      // miniPro.toGoodsDetail(_goodsId, _group)
				  uni.navigateTo({ url: `/pages/packageIndex/goodsDetail/index?goodsId=${_goodsId}` })
			    }
		)
  },
  onUnload() {},

  onHide() {},
  async onShow() {},
  mixins: [],
  components: {
    SearchItem: SearchItem
  },
  props: {},
  methods: {
    toSearchA() {
      this.pageParams.page = 0;
      this.pageList = [];
      this.getGoodsListA(this.getGoodsListA.bind(this));
    },

    toCloseWordA() {},

    bindInput(e) {
      this.pageParams.keyword = e.detail.value;
    },

    loadMore() {
      // 加载更多
      if (!this.pageParams.hasMore) return;
      this.pageParams.page += 1;
      this.getGoodsListA(this.getGoodsListA.bind(this));
    },

    getGoodsListA(fun) {
      apiGoodsListF({
        page: this.pageParams.page,
        limit: this.pageParams.limit,
        keyword: this.pageParams.keyword,
        categoryId: this.pageParams.categoryId
      }, fun).then(result => {
        let {
          rows,
          last,
          pageNumber
        } = result;
        this.pageParams.page = pageNumber;
        this.pageParams.hasMore = !last;
        this.pageList = this.pageList.concat(rows);
      }).catch(err => {});
    },

    apiCollectSaveA(fun) {
      apiCollectSaveF({
        goodsId: this.starFData.goodsId
      }, fun).then(msg => {
		  miniPro.showToast('收藏成功');
        this.pageList[this.starFData.current].collection = true;
      }).catch(err => {
        miniPro.showToast('收藏失败');
      });
    },

    apiCollectDeleteA(fun) {
      apiCollectDeleteF(this.starFData.goodsId, fun).then(msg => {
        this.pageList[this.starFData.current].collection = false;
      }).catch(err => {
        miniPro.showToast('删除收藏失败');
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss">

@import "./index.scss";

</style>