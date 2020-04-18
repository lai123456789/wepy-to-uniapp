<template>

  <view class="vip-ctner container-same">
    <scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="loadMore">
      <!-- <view class="vip-banner-outer"></view> -->
      <view class="vip-list-outer">
        <view class="vip-goods-item" v-for="(item, index) in pageList" :key="index">
          <image @tap="'toGoodsDetailA(' + item + ')'" :src="item.goodsIco">
        </image></view>
        <view class="no-data-tip" v-if="pageList.length < 1">暂无数据</view>
      </view>
    </scroll-view>
  </view>

</template>

<script>
import '../../../common/js/authProcess.js';
import { apiVIPGoodsListF } from '../../../services/index';
import miniPro from '@/utils/wepy-pro.js';

export default {
  data() {
    return {
      data: {
        pageList: [],
        pageParams: {
          page: 0,
          limit: 10,
          orderStatus: 0,
          hasMore: false
        }
      }
    };
  },

  async onLoad() {
    this.apiVIPGoodsListFA(this.apiVIPGoodsListFA.bind(this));
  },

  onUnload() {},

  onHide() {},

  async onShow() {},

  mixins: [],
  components: {},
  props: {},
  methods: {
    loadMore() {
      // 加载更多
      if (!this.pageParams.hasMore) return;
      this.pageParams.page += 1;
      this.apiVIPGoodsListFA(this.apiVIPGoodsListFA.bind(this));
    },

    toGoodsDetailA(item) {
      let {
        id
      } = item;

      if (id) {
        miniPro.toGoodsDetail(id);
      }
    },

    apiVIPGoodsListFA(fun) {
      apiVIPGoodsListF({
        page: this.pageParams.page,
        limit: this.pageParams.limit
      }, fun).then(result => {
        let {
          rows,
          last,
          pageNumber
        } = result;
        this.pageParams.page = pageNumber;
        this.pageParams.hasMore = !last;
        this.pageList = this.pageList.concat(rows);
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