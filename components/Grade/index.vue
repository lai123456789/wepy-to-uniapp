<template>

  <view class="itembox">
    <view v-for="(item, index) in imgs" :key="index" @tap="select" :data-index="item.id">
      <image class="star" :src="(item.id>starId?src2:src1)"></image>
    </view>

  </view>

</template>

<script>

export default {
  data() {
    return {
      data: {
        imgs: [{
          id: 1
        }, {
          id: 2
        }, {
          id: 3
        }, {
          id: 4
        }, {
          id: 5
        }],
        starId: 0,
        //src1 已点亮  src2未点亮
        src1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAEbElEQVRYhZ2XTYhWVRjH/8/bWzQlahQURRjZzAhWExk2UkFCiQS5qyACQdqIi6BahEFR0NdCJiJIGknXlRBEUIlYBKYglm0MF4226ItqlRZ1zv/f4r333PN135nxhct7z3PPPc/vPJ/32O8Hn8CiPwkQmmt0b6P/e0G9DGEDpDMgXod00NjMIwAq3BsbmTSSU1j9zEdBzfAiIQBpFYivglLpLiM+hHQHiFMxjLF5hy1EJI9+gx6KCEThxbAzL8BjNyjAN8+8Grnm4AU4wTw7uSPgGrkjrLkfA6PUvI0Si3YDL4C6Gl7Pmk8g2muzeW60BiiBiOE8R1f0G3YQmTuIzDrdv0kvghp0po8tCIB6C9Rs+zzZDJN5GUysUIC1CnKIdmHhclC7kMRBE5ydVe8GNWPUqRSiDeIodhIYRhAV5RFEu8grEAZhcUULp7t+E9TmXohKAA+TNBwHMfq/CtTTIzf2QrTX/SBmjTpWhei1TMUtYeE4JYUXCgjlEDGc5uCxKRoXc1IYrxJiNF4F6npIN4FYY9QUiKfigpWaP4Fox7OgjsLrtBELoBZA/QjqnFE/w+O/GMb+OPBYC/EIpNtBTEO6FcQNoFaOLVj9EKnrfCWLqF/gtQDqqBFvX7n/yFn7871HV4A6BmJ9UjWVL7yENK1ZzI+Z00H+C2rjEF5zoNZ3buqBKOAE82MgomqdyyyCbGSXGbV/CKcns4KVZtNilvBjUtePAfW5uzUzhNdfRq0o2kDFQktRmCjw+Xo1a4U5J4bmuQPE+0vy/zIV1jbVuajY+M4BnD6A405zajopQ3OzpsOWHbcboxmHLlyVMcjgFLp4NGfrxCdfnxw2Zt4LyoGYT3fQs+sQwLV4St+rWTsbb5349Phno6Ln2C64D5QZ9S6yAC0XW0ThuHROx1smPj9+qKvALvHbPKhLQL0TFqsXrKXWjwpEmP+wUQFk1Chd8eJeoxyo+YtWGLmvp1I/AOIwpKw3OdZMuA/EWng9t4SCtUjKRxACQD0O6nB4lsKUFbJZ7IdehWXBWsQSSb36KYFL3cT6Yh739NWPZTXJfK70oBFfBnlumZpCUOuWUbD6IVRYaCr5Cigtky3mNQQxXaRzOy8/MeSuLFoLYtl0cqirWSarH2tBra5lUi2z6hYqPtLb+0mTrgBxoZpNlfoxubwelUHEH+nlN9IEpCkQ3xYwaZ0J9WNdHWJMrCibl3zKRjKFuClgBj1N8b5UprIBhlOhDpnXq+b4W3ayRHLiZPSMmhnFZprag6Ize8EcZwqI5ChLwOkbc9pmXlvg9Ty8bobTbnj9gzCXKUhwLSZDUaxZJvk88DrSKg0Q3bzv4bTDvO6E18dwbHd8HtRr5nWLee2BlwtlIiqSjSu/CEej6Gfnt22q1YqVRpwBdW0UK79CesOIuaKGtPESjSGtAfESpO3htCoAwklIG9BwXHr2dAdz4aHZvtS9BsIuUNeB+s6IA6D+zg51NYgucEfj2yBsh3AjpBMQ9gBdV4ph/gdl6achYslwgwAAAABJRU5ErkJggg==',
        //已点击
        src2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAACIklEQVRYhcXYT4hNYRjH8c+9TUIyZCMSMeNPZITGFIpismFnY0Pi1DSLKVmNopQ/G5GkuUwNa6ysNIlSk8U0YkMWGOXPWIoIC4tzr67bec/cc6dz769Onfd53+d5v533nPd5n1MolUpmoB04iy14jYu4lyVAFEX/7ttmANKOJ1XtrbiLTXjeSMDiDGAGA/bLjQZsFGYRTgb6dqO7mTBnpvG92kjQRmBmo3+aMdvQ1QyYc3X6XckaOCvMQpyoc+wu9OQJczrj+ExfVto+044lWIHlWI2BjDA9GMNLvC1f7zGJT/hdPbhQtQMfxEaswQYsxfyMk2fR5zLcGK5FUfSuUCqV5uEp1uc48XT6he6ieF1bCQKzMFLEsRaDVNRVxLdWU5Q1XsTRVlOU1VfEHfS1GGRfFEUTlU1vCMdbCPKA/ze9YRRwo4kgvVEUjVYatengpuYt2X6MVhuS0sEQ/ojB8tIePKw1hhLlsPhwnYcOJYGkwcCbfFh8DHWkwWzPAQT2hjrSYNbmAEJ8FElUCKZNfJTIQ8G4IZhVWJAPi07MzQLTmRMIzBFYqhBMXu9LRZlgdmYIPIrz+JLBJ7GmCsHUU4A9wwH04hRWiuvvn3X4Jr4GIZhHKYFeic9Am3G/yv4dF9CBS+KUEtLjLDADmKqxTYkLuHUYSZnog/inQAduJ/RP4HqSY6hu+iouV/qxGC9wCz9SIGo1iSPip3QYyzBebifqL3RwWdp5zNMdAAAAAElFTkSuQmCC" //未点击

      }
    };
  },

  onLoad() {},

  mixins: [],
  components: {},
  props: {
    msg: {
      type: Number,
      default: 1
    }
  },
  methods: {
    select(e) {
      console.log(e);
      this.starId = e.currentTarget.dataset.index; //点亮几颗星星的下标索引值

      let selected = this.starId;
      this.$emit('selected', selected); // 
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

// @import "./index.scss";
@import "../../common/css/rpx.scss";
@import "../../common/css/const.scss";
@import "../../common/css/mixin.scss";
.black .popup .star_submit {
  background: #09BB07;
  border-radius: 40rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
  width: 240rpx;
  height: auto;
  margin-top: 72rpx;
  line-height: 2.2;
}
.itembox {
  display: flex;
  align-items: center;
}
.scorePin{
  font-size:26rpx;
  font-weight: 600;
}

.star {
  width: rpx(34);
  height: rpx(35);
  margin: 0 rpx(20) 0 0;
  vertical-align: middle;
}

</style>