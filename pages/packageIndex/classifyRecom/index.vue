<template>

  <view class="classify-recom-ctner container-same">
    <!-- <wxs src="../../../utils/filter.wxs" module="tools"></wxs> -->
      <view class="clre-top">
        <scroll-view scroll-x="true" style="height: 100%;width: 100%">
          <view @tap="'toggleItemA(' + index + ', ' + item + ')'" :class="'top-item ' + (index == classIndex?'top-item-active' : '')" v-for="(item, index) in classArr" :key="index">
            {{item.categoryName}}
          </view>
        </scroll-view>
      </view>
      <view class="clre-con">
        <scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="loadMore">
          <view class="clre-con-top">
            <image :src="categoryIco"></image>
          </view>
          <view class="clre-goods-outer" v-for="(item, index) in pageList" :key="index" @tap="'toGoodsDetailA(' + item + ')'">
            <view class="clre-l">
              <image :src="item.goodsIco"></image>
            </view>
            <view class="clre-r">
              <view>{{item.goodsName}}</view>
              <view>
              </view>
              <view>
                <text>{{item.collectionNumber}}人推荐</text>
                <!-- <image src='../../../images/recom_icon.png' @tap.stop='recomA'></image> -->
              </view>
            </view>
          </view>
        </scroll-view>
      </view>

  </view>

</template>

<script>
import Auth from '../../../common/js/authProcess.js';
import { apiGoodFindCategoryIdF, apiCategoryListF } from '../../../services/index';
import miniPro from '@/utils/wepy-pro.js';
import { showAlertTips } from '@/utils/feature.js';
// import SearchItem from '@/components/searchItem/index' ;

export default {
  data() {
    return {
      data: {
        classArr: [],
        pageList: [],
        classIndex: 0,
        categoryIco: '',
        pageParams: {
          page: 0,
          limit: 20,
          categoryId: '',
          hasMore: false
        }
      }
    };
  },

  async onLoad() {
    this.apiCategoryListFA(this.apiCategoryListFA.bind(this));
  },

  onUnload() {},

  onHide() {},

  async onShow() {},

  mixins: [],
  components: {},
  props: {},
  methods: {
    toggleItemA(index, item) {
      if (this.classIndex == index) return;
      this.pageParams.page = 0;
      this.classIndex = index;
      this.pageParams.categoryId = item.id;
      this.pageList = [];
      this.categoryIco = item.categoryIco;
      this.apiGoodFindCategoryIdFA(this.apiCategoryListFA.bind(this));
    },

    toGoodsDetailA(item) {
      if (!item.id) return;
      miniPro.toGoodsDetail(item.id, item.groupPurchase);
    },

    // recomA() {
    // },
    loadMore() {
      // 加载更多
      if (!this.pageParams.hasMore) return;
      this.pageParams.page += 1;
      this.apiGoodFindCategoryIdFA(this.apiGoodFindCategoryIdFA.bind(this));
    },

    apiCategoryListFA(fun) {
      apiCategoryListF(fun).then(msg => {
        this.classArr = msg;
        this.pageParams.categoryId = msg[0].id;
        this.categoryIco = msg[0].categoryIco;
        this.apiGoodFindCategoryIdFA(this.apiCategoryListFA.bind(this));
      }).catch(err => {});
    },

    apiGoodFindCategoryIdFA(fun) {
      apiGoodFindCategoryIdF({
        page: this.pageParams.page,
        limit: this.pageParams.limit,
        categoryId: this.pageParams.categoryId
      }, fun).then(result => {
        let {
          rows,
          last,
          pageNumber
        } = result;
        this.pageParams.page = pageNumber;
        this.pageParams.hasMore = last;
        this.pageList = this.pageList.concat(rows);
      }).catch(err => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss">

@import "./index.scss";

</style>