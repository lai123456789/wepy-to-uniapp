<template>

  <view class="multipleImg">  <!-- 测试start -->
    <view class="upload" v-for="(item, index) in chooseImgs" :key="index">
      <!--显示缩略图-->
      <image :src="item" class="addImg" mode="aspectFill" @tap="previewImg" :data-index="index" :data-item="item"></image>
      <!--删除-->
      <image src="../../images/del.png" class="deleteImg" mode="aspectFill" @tap="deleteImg" :data-index="index" :data-item="item"></image>
    </view>
    <!--上传图片-->
    <view class="uploadDiv" @tap="uploadImgs">
      <image src="../../images/photo.png" class="addImg" mode="aspectFill"></image>
      <view>照片视频</view>
    </view>
  </view>      <!-- 测试end -->

</template>

<script>

export default {
  data() {
    return {
      data: {
        hideAdd: false,
        // 是否隐藏添加图片的图标
        upload: [],
        // 上传的图(url)
        chooseImgs: [] // 用户选择上传的图片(缩略图)

      }
    };
  },

  onLoad() {},

  mixins: [],
  components: {},
  props: {
    num: {
      type: Number,
      default: 1
    }
  },
  methods: {
    /*****************************************************上传图片模块START**************************************/

    /* ================== 多图上传 ================== */
    uploadImgs() {
      let that = this;
      let {
        chooseImgs
      } = this.data;
      wx.chooseImage({
        count: 9 - chooseImgs.length,
        // 默认9
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          let newChooseImgs = res.tempFilePaths;
          let imgInfo = res.tempFiles; // 判断选择的图片是否符合要求

          for (let i = 0; i < imgInfo.length; i++) {
            console.log("尺寸", imgInfo[i].size); // 判断图片尺寸

            if (imgInfo[i].size / 1024 / 1024 >= 10) {
              wx.showModal({
                title: '提示',
                // 标题
                content: "图片超过10MB啦~",
                // 内容
                showCancel: false,
                // 是否显示取消按钮
                confirmText: '确定' // 确认按钮的文字

              });
              return;
            } // 判断图片格式


            let imgSplit = imgInfo[i].path.split(".");
            let imgSLen = imgSplit.length; // console.log("格式", imgSplit, imgSLen, imgSLen - 1);

            if (["jpg", "jpeg", "png"].includes(imgSplit[imgSLen - 1])) {
              console.log("格式正确");
            } else {
              console.log("格式错误");
              utils.showModalInfo({
                content: "请选择正确的图片格式上传"
              });
              return;
            }
          }

          console.log("选择图片之前", res, chooseImgs, newChooseImgs);
          newChooseImgs.forEach(item => {
            that.chooseImgs.push(item);
          }); // console.log("选择图片后", chooseImgs, newChooseImgs);
          // 限制上传数量

          if (chooseImgs.length > 9) {
            wx.showModal({
              title: '提示',
              content: "请选择正确的图片格式上传",
              showCancel: false,
              confirmText: '确定'
            });
          } // 判断是否显示添加图片


          console.log("显示添加图片", chooseImgs.length);

          if (chooseImgs.length > 0) {
            //图如果满了9张，不显示加图
            // if (chooseImgs.length >= 9) {
            //   that.setData({
            //     hideAdd: true
            //   })
            // } else {
            //   that.setData({
            //     hideAdd: false
            //   })
            // }
            // 显示预览图
            that.setData({
              chooseImgs
            });
          }
        }
      });
    },

    /* ================== 点击图片放大预览 ================== */
    previewImg(e) {
      let contentImg = e.currentTarget.dataset.item; // console.log("点击图片放大预览", contentImg);

      wx.previewImage({
        current: contentImg,
        //当前图片地址
        urls: [contentImg],
        //所有要预览的图片的地址集合 数组形式
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    },

    /* ================== 点击图片删除 ================== */
    deleteImg(e) {
      let index = e.currentTarget.dataset.index;
      let {
        upload,
        chooseImgs
      } = this.data;
      upload.splice(index, 1);
      chooseImgs.splice(index, 1); // console.log("点击图片删除", index);

      this.setData({
        upload,
        chooseImgs,
        hideAdd: chooseImgs.length === 9 // 是否隐藏添加图片的图标

      });
    }
    /*****************************************************上传图片模块END**************************************/


  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index.scss";
@import "../../common/css/rpx.scss";
@import "../../common/css/const.scss";
@import "../../common/css/mixin.scss";


</style>