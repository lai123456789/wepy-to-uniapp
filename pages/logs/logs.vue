<template>
    <!--logs.wxml-->
    <view class="container log-list">
        <block v-for="(log, index) in logs" :key="index">
            <text class="log-item">{{ index + 1 }}. {{ log }}</text>
        </block>
    </view>
</template>
<script>
//logs.js
const util = require('../../utils/util.js');

export default {
    data() {
        return {
            logs: []
        };
    },

    onLoad: function() {
        this.setData({
            logs: (uni.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log));
            })
        });
    },
    components: {},
    props: {},
    methods: {
        setData: function(obj) {
            let that = this;
            let keys = [];
            let val, data;
            Object.keys(obj).forEach(function(key) {
                keys = key.split('.');
                val = obj[key];
                data = that.$data;
                keys.forEach(function(key2, index) {
                    if (index + 1 == keys.length) {
                        that.$set(data, key2, val);
                    } else {
                        if (!data[key2]) {
                            that.$set(data, key2, {});
                        }
                    }

                    data = data[key2];
                });
            });
        }
    }
};
</script>
<style>
.log-list {
    display: flex;
    flex-direction: column;
    padding: 40rpx;
}
.log-item {
    margin: 10rpx;
}
</style>
