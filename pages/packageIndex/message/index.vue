<template>

  <view class="msg-ctner">
      <view v-if="pageList.length > 0" class="msg-has">
         <scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="loadMore">
            <view class="msg-item" v-for="(item, index) in pageList" :key="index" @tap="'toMsgDetail(' + item.id + ')'">
              <image class="msg-img-left" src="../../../images/msg_icon.png"></image>
              <view class="msg-con">
                <view>{{item.title}}</view>
                <view>{{item.createTime}}</view>
              </view>
              <image class="msg-img-right" src="../../../images/unfold.png"></image>
            </view>
         </scroll-view>
      </view>
      <view v-else class="msg-no">
        <image src="../../../images/msg_cion.png"></image>
        <view>暂时没有新消息</view>
      </view>
  </view>

</template>

<script>
import '../../../common/js/authProcess.js';
import { apiGetMessageF } from '../../../services/index';

export default {
  data() {
    return {
      data: {
        pageList: [],
        pageParams: {
          page: 0,
          limit: 10,
          type: 0,
          hasMore: false
        }
      }
    };
  },

  onLoad() {
    this.apiGetMessageFA(this.apiGetMessageFA.bind(this));
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    toMsgDetail(id) {
      uni.navigateTo({
        url: `/pages/packageIndex/messageDetail/index?id=${id}`
      });
    },

    loadMore() {
      // 加载更多
      if (!this.pageParams.hasMore) return;
      this.pageParams.page += 1;
      this.apiGetMessageFA(this.apiGetMessageFA.bind(this));
    },

    apiGetMessageFA(fun) {
      apiGetMessageF({
        page: this.pageParams.page,
        limit: this.pageParams.limit,
        type: this.pageParams.type
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
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index";

</style>