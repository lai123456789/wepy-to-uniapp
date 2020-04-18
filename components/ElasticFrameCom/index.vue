<template>
<view>

  <view class="btn-div">
    <view v-if="corporationName" @click.stop="toShowModal">
<!--      <input type="text"  disabled placeholder="请选择快递公司" value="{{corporationName}}">-->
      <view class="name">{{corporationName}}</view>
    </view>
    <view @tap="toShowModal" v-else>
<!--      <input type="text" placeholder="请选择快递公司"> -->
      <view class="name" style="color: #808080;border: 3rpx solid #EEE">请选择快递公司</view>
    </view>
  </view>
  <!--custom Modal    查看更多弹框  -->
  <view class="modal-mask" @tap="hideModal" v-if="showModal">

  </view>
  <view v-if="showModal">
    <view class="modal-content">
      <view class="heard">
        <input type="text" placeholder="输入快递公司名" @input="express"></input>
        <view @click.stop="search">搜索</view>
      </view>
      <scroll-view scroll-y="true" lower-threshold="200" style="height:100%" @scrolltolower="loadMore" scroll-with-animation="true">
      <view class="content-index-bottom" v-for="(item, groupIndex) in pageList" :key="groupIndex">
        <view class="V4">
          <view class="right-content" @tap="'selected(' + item + ')'">
            <veiw class="time-content" style="text-align: center">
              <text>{{item.corporationName}}</text>
            </veiw>
          </view>
        </view>
      </view>
      </scroll-view>
    </view>


  </view>

</view>
</template>

<script>
import { apiExpressCompanyF } from '../../services/mine/index';

export default {
  data() {
    return {
      data: {
        searchVal: '',
        height: wx.getSystemInfoSync().screenHeight,
        corporationName: "",
        showModal: false,
        pageParams: {
          limit: 10,
          offset: 0,
          hasMore: false
        },
        pageList: []
      }
    };
  },

  onLoad() {
    this.number = this.num;
    this.apiExpressCompanyA(this.apiExpressCompanyA.bind(this));
  },

  mixins: [],
  components: {},
  props: {
    num: {
      type: Number,
      default: 1
    },
    selectVal: {
      type: String,
      default: {}
    }
  },
  methods: {
    express(e) {
      this.searchVal = e.detail.value;
      console.log(e.detail.value);
    },

    search() {
      this.pageParams.offset = 0;
      this.pageList = [];
      this.apiExpressCompanyA(this.apiExpressCompanyA.bind(this));
    },

    toShowModal(e) {
      //这里开始
      this.showModal = true;
    },

    hideModal() {
      this.showModal = false;
      this.pageParams.offset = 0;
      this.pageList = [];
      this.apiExpressCompanyA(this.apiExpressCompanyA.bind(this));
    },

    selected(item) {
      this.showModal = false;
      this.corporationName = item.corporationName;
      this.$emit('corporationCode', item.corporationCode);
      this.$emit('corporationName', item.corporationName);
    },

    loadMore() {
      // 加载更多分页快递公司信息
      let offset = this.pageParams.offset;

      if (offset == 0) {
        offset = this.pageParams.limit;
      } else {
        offset = offset + this.pageParams.limit;
      }

      this.pageParams.offset = offset;
      this.apiExpressCompanyA(this.apiExpressCompanyA.bind(this));
    },

    apiExpressCompanyA(fun) {
      //获取所有快递公司
      apiExpressCompanyF({
        limit: this.pageParams.limit,
        offset: this.pageParams.offset,
        keyword: this.searchVal
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
  watch: {
    item(newVal, oldVal) {}

  }
};
</script>
<style lang="scss" scoped="scoped">

@import "./index.scss";
@import "../../common/css/rpx.scss";
@import "../../common/css/const.scss";
@import "../../common/css/mixin.scss";

</style>