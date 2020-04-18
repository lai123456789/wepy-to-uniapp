<template>
    <view class="user-center-item">
        <view class="item-content">
            <view class="left-item">
                <image :src="imageUrl" class="left-image" mode="aspectFit"></image>
                <text class="content-text">{{ textContent || 'aaaa' }}</text>
            </view>
            <view class="right-item"><image src="../../static/images/go.png" class="right-image" mode="aspectFit"></image></view>
        </view>
        <view class="usercenter-divider"></view>
    </view>
</template>
<script>
export default {
    props: {
        // 这里定义了imageUrl属性，属性值可以在组件使用时指定
        imageUrl: {
            type: String,
            default() {
                return 'aaaa';
            }
        },
        textContent: {
            type: String,
            default() {
                return 'aaaa';
            }
        }
    },
    methods: {}
};
</script>
<style>
/* lib/usercenter_item/userCenterItem.css */

.user-center-item {
    display: flex;
    flex-direction: column;
}

.item-content {
    width: 750tpx;
    height: 90rpx;
}

.left-item {
    display: flex;
    height: 90rpx;
    flex-direction: row;
    align-items: center;
    float: left;
    margin-left: 30rpx;
}

.left-image {
    width: 35rpx;
    height: 35rpx;
}

.content-text {
    color: #666;
    font-size: 32rpx !important;
    line-height: 90rpx;
    text-align: center;
    margin-left: 30rpx;
}

.right-item {
    display: flex;
    align-items: center;
    height: 90rpx;
    float: right;
    margin-right: 30rpx;
}

.right-image {
    width: 30rpx;
    height: 30rpx;
}

.usercenter-divider {
    border-top: 1px solid #f2f4f7;
    margin-left: 95rpx;
}
</style>
