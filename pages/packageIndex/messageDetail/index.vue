<template>

  <view class="msg-con-ctner">
    {{content}}
  </view>

</template>

<script>
import '../../../common/js/authProcess.js';
import { apiMessageReadF } from '../../../services/index';

export default {
  data() {
    return {
      data: {
        msgId: '',
        content: ''
      }
    };
  },

  onLoad(option) {
    this.msgId = option.id;
    this.apiMessageReadFA(this.apiMessageReadFA.bind(this));
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    apiMessageReadFA(fun) {
      apiMessageReadF({
        id: this.msgId
      }, fun).then(result => {
        this.content = result.content;
      }).catch(() => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index";

</style>