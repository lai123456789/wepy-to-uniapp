(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video_play-videoPlay"],{"31cf":function(e,i,t){"use strict";var a,o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"video-play"},[t("v-uni-video",{attrs:{id:"myVideo",src:e.videoUrl,binderror:"videoErrorCallback",poster:e.coverImage,"danmu-list":e.danmuList,"enable-danmu":"true","danmu-btn":"true","show-center-play-btn":"true","show-play-btn":"true",controls:"true","show-mute-btn":"true"}}),t("v-uni-view",{staticClass:"danmu"},[t("v-uni-view",{staticClass:"danmu-text"},[t("v-uni-text",{staticClass:"danmu-left-tip"},[e._v("弹幕内容:")]),t("v-uni-input",{staticClass:"danmu-right-input",attrs:{bindblur:"bindInputBlur",type:"text",placeholder:"在此处输入弹幕内容","placeholder-class":"placeholder",value:e.initText}})],1),t("v-uni-view",{staticClass:"send-danmu-normal",attrs:{"hover-class":"send-danmu-presss"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.bindSendDanmu.apply(void 0,arguments)}}},[e._v("发送弹幕")])],1)],1)},d=[];t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return d})),t.d(i,"a",(function(){return a}))},"6af3":function(e,i,t){"use strict";t.r(i);var a=t("74e0"),o=t.n(a);for(var d in a)"default"!==d&&function(e){t.d(i,e,(function(){return a[e]}))}(d);i["default"]=o.a},"6e11":function(e,i,t){"use strict";var a=t("e340"),o=t.n(a);o.a},"74e0":function(e,i,t){"use strict";function a(){for(var e=[],i=0;i<3;++i){var t=Math.floor(256*Math.random()).toString(16);t=1===t.length?"0"+t:t,e.push(t)}return"#"+e.join("")}t("4160"),t("a15b"),t("b64b"),t("d3b7"),t("ac1f"),t("25f0"),t("1276"),t("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{coverImage:"https://image1.pearvideo.com/main/20190517/12719568-133605-1.png",videoUrl:"https://video.pearvideo.com/mp4/third/20190517/cont-1555570-12719568-133553-hd.mp4",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],initText:""}},onReady:function(){this.videoContext=uni.createVideoContext("myVideo")},onLoad:function(e){uni.setNavigationBarTitle({title:"三人行钢琴曲"})},onShareAppMessage:function(){return{title:"video",path:"page/component/pages/video/video"}},props:{},methods:{bindInputBlur:function(e){this.inputValue=e.detail.value},bindButtonTap:function(){var e=this;uni.chooseVideo({sourceType:["album","camera"],maxDuration:60,camera:["front","back"],success:function(i){e.setData({src:i.tempFilePath})}})},bindSendDanmu:function(){null!=this.inputValue&&""!=this.inputValue?(this.videoContext.sendDanmu({text:this.inputValue,color:a()}),this.setData({initText:""}),this.inputValue="",uni.showToast({title:"弹幕发送成功",icon:"none"})):uni.showToast({title:"弹幕不能为空哟",icon:"none"})},videoErrorCallback:function(e){console.log("视频错误信息:"),console.log(e.detail.errMsg)},setData:function(e){var i,t,a=this,o=[];Object.keys(e).forEach((function(d){o=d.split("."),i=e[d],t=a.$data,o.forEach((function(e,d){d+1==o.length?a.$set(t,e,i):t[e]||a.$set(t,e,{}),t=t[e]}))}))}}};i.default=o},b86b:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'/*!\n * weui.js v1.1.0 (https://github.com/weui/weui.css)\n * Copyright 2016, wechat ui team\n * MIT license\n */uni-page-body[data-v-4367e3be]{line-height:1.6;font-family:-apple-system-font,Helvetica Neue,sans-serif}uni-icon[data-v-4367e3be]{vertical-align:middle}.weui-cells[data-v-4367e3be]{position:relative;margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px}.weui-cells[data-v-4367e3be]:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:%?1?% solid #d9d9d9;color:#d9d9d9}.weui-cells[data-v-4367e3be]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:%?1?% solid #d9d9d9;color:#d9d9d9}.weui-cells__title[data-v-4367e3be]{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells_after-title[data-v-4367e3be]{margin-top:0}.weui-cells__tips[data-v-4367e3be]{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell[data-v-4367e3be]{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell[data-v-4367e3be]:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:%?1?% solid #d9d9d9;color:#d9d9d9;left:15px}.weui-cell[data-v-4367e3be]:first-child:before{display:none}.weui-cell_active[data-v-4367e3be]{background-color:#ececec}.weui-cell_primary[data-v-4367e3be]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd[data-v-4367e3be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-cell__ft[data-v-4367e3be]{text-align:right;color:#999}.weui-cell_access[data-v-4367e3be]{color:inherit}.weui-cell__ft_in-access[data-v-4367e3be]{padding-right:13px;position:relative}.weui-cell__ft_in-access[data-v-4367e3be]:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link[data-v-4367e3be]{color:#586c94;font-size:14px}.weui-cell_link[data-v-4367e3be]:active{background-color:#ececec}.weui-cell_link[data-v-4367e3be]:first-child:before{display:block}.weui-icon-radio[data-v-4367e3be]{margin-left:3.2px;margin-right:3.2px}.weui-icon-checkbox_circle[data-v-4367e3be],\n.weui-icon-checkbox_success[data-v-4367e3be]{margin-left:4.6px;margin-right:4.6px}.weui-check__label[data-v-4367e3be]:active{background-color:#ececec}.weui-check[data-v-4367e3be]{position:absolute;left:-9999px}.weui-check__hd_in-checkbox[data-v-4367e3be]{padding-right:.35em}.weui-cell__ft_in-radio[data-v-4367e3be]{padding-left:.35em}.weui-cell_input[data-v-4367e3be]{padding-top:0;padding-bottom:0}.weui-label[data-v-4367e3be]{width:105px;word-wrap:break-word;word-break:break-all}.weui-input[data-v-4367e3be]{height:2.58823529em;min-height:2.58823529em;line-height:2.58823529em}.weui-toptips[data-v-4367e3be]{position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn[data-v-4367e3be]{background-color:#e64340}.weui-textarea[data-v-4367e3be]{display:block;width:100%}.weui-textarea-counter[data-v-4367e3be]{color:#b2b2b2;text-align:right}.weui-textarea-counter_warn[data-v-4367e3be]{color:#e64340}.weui-cell_warn[data-v-4367e3be]{color:#e64340}.weui-form-preview[data-v-4367e3be]{position:relative;background-color:#fff}.weui-form-preview[data-v-4367e3be]:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:%?1?% solid #d9d9d9;color:#d9d9d9}.weui-form-preview[data-v-4367e3be]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:%?1?% solid #d9d9d9;color:#d9d9d9}.weui-form-preview__value[data-v-4367e3be]{font-size:14px}.weui-form-preview__value_in-hd[data-v-4367e3be]{font-size:26px}.weui-form-preview__hd[data-v-4367e3be]{position:relative;padding:10px 15px;text-align:right;line-height:2.5em}.weui-form-preview__hd[data-v-4367e3be]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:%?1?% solid #d9d9d9;color:#d9d9d9;left:15px}.weui-form-preview__bd[data-v-4367e3be]{padding:10px 15px;font-size:.9em;text-align:right;color:#999;line-height:2}.weui-form-preview__ft[data-v-4367e3be]{position:relative;line-height:50px;display:-webkit-box;display:-webkit-flex;display:flex}.weui-form-preview__ft[data-v-4367e3be]:after{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:%?1?% solid #d5d5d6;color:#d5d5d6}.weui-form-preview__item[data-v-4367e3be]{overflow:hidden}.weui-form-preview__label[data-v-4367e3be]{float:left;margin-right:1em;min-width:4em;color:#999;text-align:justify;text-align-last:justify}.weui-form-preview__value[data-v-4367e3be]{display:block;overflow:hidden;word-break:normal;word-wrap:break-word}.weui-form-preview__btn[data-v-4367e3be]{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-align:center}.weui-form-preview__btn[data-v-4367e3be]:after{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:%?1?% solid #d5d5d6;color:#d5d5d6}.weui-form-preview__btn[data-v-4367e3be]:first-child:after{display:none}.weui-form-preview__btn_active[data-v-4367e3be]{background-color:#eee}.weui-form-preview__btn_default[data-v-4367e3be]{color:#999}.weui-form-preview__btn_primary[data-v-4367e3be]{color:#0bb20c}.weui-cell_select[data-v-4367e3be]{padding:0}.weui-select[data-v-4367e3be]{position:relative;padding-left:15px;padding-right:30px;height:2.58823529em;min-height:2.58823529em;line-height:2.58823529em;border-right:%?1?% solid #d9d9d9}.weui-select[data-v-4367e3be]:before{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:15px;margin-top:-4px}.weui-select_in-select-after[data-v-4367e3be]{padding-left:0}.weui-cell__hd_in-select-after[data-v-4367e3be],\n.weui-cell__bd_in-select-before[data-v-4367e3be]{padding-left:15px}.weui-cell_vcode[data-v-4367e3be]{padding-right:0}.weui-vcode-img[data-v-4367e3be]{margin-left:5px;height:2.58823529em;vertical-align:middle}.weui-vcode-btn[data-v-4367e3be]{display:inline-block;height:2.58823529em;margin-left:5px;padding:0 .6em 0 .7em;border-left:1px solid #e5e5e5;line-height:2.58823529em;vertical-align:middle;font-size:17px;color:#3cc51f;white-space:nowrap}.weui-vcode-btn[data-v-4367e3be]:active{color:#52a341}.weui-cell_switch[data-v-4367e3be]{padding-top:6px;padding-bottom:6px}.weui-uploader__hd[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:10px;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-uploader__title[data-v-4367e3be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-uploader__info[data-v-4367e3be]{color:#b2b2b2}.weui-uploader__bd[data-v-4367e3be]{margin-bottom:-4px;margin-right:-9px;overflow:hidden}.weui-uploader__file[data-v-4367e3be]{float:left;margin-right:9px;margin-bottom:9px}.weui-uploader__img[data-v-4367e3be]{display:block;width:79px;height:79px}.weui-uploader__file_status[data-v-4367e3be]{position:relative}.weui-uploader__file_status[data-v-4367e3be]:before{content:" ";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.weui-uploader__file-content[data-v-4367e3be]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff}.weui-uploader__input-box[data-v-4367e3be]{float:left;position:relative;margin-right:9px;margin-bottom:9px;width:77px;height:77px;border:1px solid #d9d9d9}.weui-uploader__input-box[data-v-4367e3be]:before,\n.weui-uploader__input-box[data-v-4367e3be]:after{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.weui-uploader__input-box[data-v-4367e3be]:before{width:2px;height:39.5px}.weui-uploader__input-box[data-v-4367e3be]:after{width:39.5px;height:2px}.weui-uploader__input-box[data-v-4367e3be]:active{border-color:#999}.weui-uploader__input-box[data-v-4367e3be]:active:before,\n.weui-uploader__input-box[data-v-4367e3be]:active:after{background-color:#999}.weui-uploader__input[data-v-4367e3be]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}.weui-article[data-v-4367e3be]{padding:20px 15px;font-size:15px}.weui-article__section[data-v-4367e3be]{margin-bottom:1.5em}.weui-article__h1[data-v-4367e3be]{font-size:18px;font-weight:400;margin-bottom:.9em}.weui-article__h2[data-v-4367e3be]{font-size:16px;font-weight:400;margin-bottom:.34em}.weui-article__h3[data-v-4367e3be]{font-weight:400;font-size:15px;margin-bottom:.34em}.weui-article__p[data-v-4367e3be]{margin:0 0 .8em}.weui-msg[data-v-4367e3be]{padding-top:36px;text-align:center}.weui-msg__link[data-v-4367e3be]{display:inline;color:#586c94}.weui-msg__icon-area[data-v-4367e3be]{margin-bottom:30px}.weui-msg__text-area[data-v-4367e3be]{margin-bottom:25px;padding:0 20px}.weui-msg__title[data-v-4367e3be]{margin-bottom:5px;font-weight:400;font-size:20px}.weui-msg__desc[data-v-4367e3be]{font-size:14px;color:#999}.weui-msg__opr-area[data-v-4367e3be]{margin-bottom:25px}.weui-msg__extra-area[data-v-4367e3be]{margin-bottom:15px;font-size:14px;color:#999}@media screen and (min-height:438px){.weui-msg__extra-area[data-v-4367e3be]{position:fixed;left:0;bottom:0;width:100%;text-align:center}}.weui-flex[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex}.weui-flex__item[data-v-4367e3be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-btn[data-v-4367e3be]{margin-top:15px}.weui-btn[data-v-4367e3be]:first-child{margin-top:0}.weui-btn-area[data-v-4367e3be]{margin:1.17647059em 15px .3em}.weui-agree[data-v-4367e3be]{display:block;padding:.5em 15px;font-size:13px}.weui-agree__text[data-v-4367e3be]{color:#999}.weui-agree__link[data-v-4367e3be]{display:inline;color:#586c94}.weui-agree__checkbox[data-v-4367e3be]{position:absolute;left:-9999px}.weui-agree__checkbox-icon[data-v-4367e3be]{position:relative;top:2px;display:inline-block;border:1px solid #d1d1d1;background-color:#fff;border-radius:3px;width:11px;height:11px}.weui-agree__checkbox-icon-check[data-v-4367e3be]{position:absolute;top:1px;left:1px}.weui-footer[data-v-4367e3be]{color:#999;font-size:14px;text-align:center}.weui-footer_fixed-bottom[data-v-4367e3be]{position:fixed;bottom:.52em;left:0;right:0}.weui-footer__links[data-v-4367e3be]{font-size:0}.weui-footer__link[data-v-4367e3be]{display:inline-block;vertical-align:top;margin:0 .62em;position:relative;font-size:14px;color:#586c94}.weui-footer__link[data-v-4367e3be]:before{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:%?1?% solid #c7c7c7;color:#c7c7c7;left:-.65em;top:.36em;bottom:.36em}.weui-footer__link[data-v-4367e3be]:first-child:before{display:none}.weui-footer__text[data-v-4367e3be]{padding:0 .34em;font-size:12px}.weui-grids[data-v-4367e3be]{border-top:%?1?% solid #d9d9d9;border-left:%?1?% solid #d9d9d9;overflow:hidden}.weui-grid[data-v-4367e3be]{position:relative;float:left;padding:20px 10px;width:33.33333333%;box-sizing:border-box;border-right:%?1?% solid #d9d9d9;border-bottom:%?1?% solid #d9d9d9}.weui-grid_active[data-v-4367e3be]{background-color:#ececec}.weui-grid__icon[data-v-4367e3be]{display:block;width:28px;height:28px;margin:0 auto}.weui-grid__label[data-v-4367e3be]{margin-top:5px;display:block;text-align:center;color:#000;font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.weui-loading[data-v-4367e3be]{margin:0 5px;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading-data-v-4367e3be 1s steps(12) infinite;animation:weuiLoading-data-v-4367e3be 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes weuiLoading-data-v-4367e3be{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading-data-v-4367e3be{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.weui-badge[data-v-4367e3be]{display:inline-block;padding:.15em .4em;min-width:8px;border-radius:18px;background-color:#f43530;color:#fff;line-height:1.2;text-align:center;font-size:12px;vertical-align:middle}.weui-badge_dot[data-v-4367e3be]{padding:.4em;min-width:0}.weui-loadmore[data-v-4367e3be]{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips[data-v-4367e3be]{display:inline-block;vertical-align:middle}.weui-loadmore_line[data-v-4367e3be]{border-top:1px solid #e5e5e5;margin-top:2.4em}.weui-loadmore__tips_in-line[data-v-4367e3be]{position:relative;top:-.9em;padding:0 .55em;background-color:#fff;color:#999}.weui-loadmore__tips_in-dot[data-v-4367e3be]{position:relative;padding:0 .16em;width:4px;height:1.6em}.weui-loadmore__tips_in-dot[data-v-4367e3be]:before{content:" ";position:absolute;top:50%;left:50%;margin-top:-1px;margin-left:-2px;width:4px;height:4px;border-radius:50%;background-color:#e5e5e5}.weui-panel[data-v-4367e3be]{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel[data-v-4367e3be]:first-child{margin-top:0}.weui-panel[data-v-4367e3be]:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:%?1?% solid #e5e5e5;color:#e5e5e5}.weui-panel[data-v-4367e3be]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:%?1?% solid #e5e5e5;color:#e5e5e5}.weui-panel__hd[data-v-4367e3be]{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd[data-v-4367e3be]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:%?1?% solid #e5e5e5;color:#e5e5e5;left:15px}.weui-media-box[data-v-4367e3be]{padding:15px;position:relative}.weui-media-box[data-v-4367e3be]:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:%?1?% solid #e5e5e5;color:#e5e5e5;left:15px}.weui-media-box[data-v-4367e3be]:first-child:before{display:none}.weui-media-box__title[data-v-4367e3be]{font-weight:400;font-size:17px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all}.weui-media-box__desc[data-v-4367e3be]{color:#999;font-size:13px;line-height:1.2;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.weui-media-box__info[data-v-4367e3be]{margin-top:15px;padding-bottom:5px;font-size:13px;color:#cecece;line-height:1em;list-style:none;overflow:hidden}.weui-media-box__info__meta[data-v-4367e3be]{float:left;padding-right:1em}.weui-media-box__info__meta_extra[data-v-4367e3be]{padding-left:1em;border-left:1px solid #cecece}.weui-media-box__title_in-text[data-v-4367e3be]{margin-bottom:8px}.weui-media-box_appmsg[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-media-box__thumb[data-v-4367e3be]{width:100%;height:100%;vertical-align:top}.weui-media-box__hd_in-appmsg[data-v-4367e3be]{margin-right:.8em;width:60px;height:60px;line-height:60px;text-align:center}.weui-media-box__bd_in-appmsg[data-v-4367e3be]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0}.weui-media-box_small-appmsg[data-v-4367e3be]{padding:0}.weui-cells_in-small-appmsg[data-v-4367e3be]{margin-top:0}.weui-cells_in-small-appmsg[data-v-4367e3be]:before{display:none}.weui-progress[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-progress__bar[data-v-4367e3be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-progress__opr[data-v-4367e3be]{margin-left:15px;font-size:0}.weui-navbar[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;top:0;width:100%;border-bottom:%?1?% solid #ccc}.weui-navbar__item[data-v-4367e3be]{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:13px 0;text-align:center;font-size:0}.weui-navbar__item.weui-bar__item_on[data-v-4367e3be]{color:#1aad19}.weui-navbar__slider[data-v-4367e3be]{position:absolute;content:" ";left:0;bottom:0;width:6em;height:3px;background-color:#1aad19;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.weui-navbar__title[data-v-4367e3be]{display:inline-block;font-size:15px;max-width:8em;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.weui-tab[data-v-4367e3be]{position:relative;height:100%}.weui-tab__panel[data-v-4367e3be]{box-sizing:border-box;height:100%;padding-top:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-search-bar[data-v-4367e3be]{position:relative;padding:8px 10px;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;background-color:#efeff4;border-top:%?1?% solid #d7d6dc;border-bottom:%?1?% solid #d7d6dc}.weui-icon-search[data-v-4367e3be]{margin-right:8px;font-size:inherit}.weui-icon-search_in-box[data-v-4367e3be]{position:absolute;left:10px;top:7px}.weui-search-bar__text[data-v-4367e3be]{display:inline-block;font-size:14px;vertical-align:middle}.weui-search-bar__form[data-v-4367e3be]{position:relative;-webkit-box-flex:1;-webkit-flex:auto;flex:auto;border-radius:5px;background:#fff;border:%?1?% solid #e6e6ea}.weui-search-bar__box[data-v-4367e3be]{position:relative;padding-left:30px;padding-right:30px;width:100%;box-sizing:border-box;z-index:1}.weui-search-bar__input[data-v-4367e3be]{height:28px;line-height:28px;font-size:14px}.weui-icon-clear[data-v-4367e3be]{position:absolute;top:0;right:0;padding:7px 8px;font-size:0}.weui-search-bar__label[data-v-4367e3be]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;border-radius:3px;text-align:center;color:#9b9b9b;background:#fff;line-height:28px}.weui-search-bar__cancel-btn[data-v-4367e3be]{margin-left:10px;line-height:28px;color:#09bb07;white-space:nowrap}.weui-cells[data-v-4367e3be]{margin-top:%?80?%;text-align:left}.weui-label[data-v-4367e3be]{width:5em}.video-play[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.video-play uni-video[data-v-4367e3be]{width:100%}.danmu[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;flex-flow:column}.danmu-text[data-v-4367e3be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:%?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.danmu-left-tip[data-v-4367e3be]{font-size:18sp;margin-left:%?20?%;color:#ff9a6a}.danmu-right-input[data-v-4367e3be]{width:%?550?%;margin-left:%?15?%;margin-top:%?5?%;color:#333}.placeholder[data-v-4367e3be]{color:#999;font-size:18sp}.send-danmu-normal[data-v-4367e3be]{border-radius:%?15?%;background:#ff9a6a;margin-top:%?50?%;margin-left:%?75?%;height:%?80?%;width:%?600?%;line-height:%?80?%;text-align:center;font-size:%?30?%;color:#fff}.send-danmu-presss[data-v-4367e3be]{border-radius:%?15?%;background:#f48f18!important;margin-top:%?50?%;margin-left:%?75?%;height:%?80?%;width:%?600?%;line-height:%?80?%;text-align:center;font-size:%?30?%;color:#fff}',""]),e.exports=i},cb60:function(e,i,t){"use strict";t.r(i);var a=t("31cf"),o=t("6af3");for(var d in o)"default"!==d&&function(e){t.d(i,e,(function(){return o[e]}))}(d);t("6e11");var r,n=t("f0c5"),l=Object(n["a"])(o["default"],a["b"],a["c"],!1,null,"4367e3be",null,!1,a["a"],r);i["default"]=l.exports},e340:function(e,i,t){var a=t("b86b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("48ad41b6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);