(function(e){function n(n){for(var a,r,c=n[0],s=n[1],u=n[2],g=0,l=[];g<c.length;g++)r=c[g],i[r]&&l.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(n);while(l.length)l.shift()();return t.push.apply(t,u||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],a=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(a=!1)}a&&(t.splice(n--,1),e=c(c.s=o[0]))}return e}var a={},i={index:0},t=[];function r(e){return c.p+"static/js/"+({"pages-comic-comic":"pages-comic-comic","pages-comic-reader-comicReader":"pages-comic-reader-comicReader","pages-comic_detail-comicDetail":"pages-comic_detail-comicDetail","pages-logs-logs":"pages-logs-logs","pages-mine-index":"pages-mine-index","pages-recom-index":"pages-recom-index","pages-ucenter-ucenter":"pages-ucenter-ucenter","pages-video-video":"pages-video-video","pages-video_play-videoPlay":"pages-video_play-videoPlay"}[e]||e)+"."+{"pages-comic-comic":"6bfa1fab","pages-comic-reader-comicReader":"0b8a00b7","pages-comic_detail-comicDetail":"fad1f95c","pages-logs-logs":"86149dfc","pages-mine-index":"43b4a2c8","pages-recom-index":"7f1a7ab5","pages-ucenter-ucenter":"40accc44","pages-video-video":"9a3b435c","pages-video_play-videoPlay":"591d0dd1"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var n=[],o=i[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=a);var t,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(e),t=function(n){s.onerror=s.onload=null,clearTimeout(u);var o=i[e];if(0!==o){if(o){var a=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+t+")");r.type=a,r.request=t,o[1](r)}i[e]=void 0}};var u=setTimeout((function(){t({type:"timeout",target:s})}),12e4);s.onerror=s.onload=t,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(o,a,function(n){return e[n]}.bind(null,a));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/h5/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var g=0;g<s.length;g++)n(s[g]);var d=u;t.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("1ba1")},"0597":function(e,n,o){"use strict";o.r(n);var a=o("c3f7"),i=o.n(a);for(var t in a)"default"!==t&&function(e){o.d(n,e,(function(){return a[e]}))}(t);n["default"]=i.a},1542:function(e,n,o){"use strict";var a,i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},t=[];o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return t})),o.d(n,"a",(function(){return a}))},"1ba1":function(e,n,o){"use strict";var a=o("ee27"),i=a(o("f3f3"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("536b"),o("1c31"),o("921b");var t=a(o("e143")),r=a(o("70ab"));t.default.config.productionTip=!1,r.default.mpType="app";var c=new t.default((0,i.default)({},r.default));c.$mount()},3644:function(e,n,o){var a=o("58cf");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=o("4f06").default;i("cbc4fc7e",a,!0,{sourceMap:!1,shadowMode:!1})},"536b":function(e,n,o){"use strict";(function(e){var n=o("ee27"),a=n(o("e143"));e["____3F0DDB0____"]=!0,delete e["____3F0DDB0____"],e.__uniConfig={tabBar:{backgroundColor:"#ffffff",borderStyle:"white",selectedColor:"#ff9a6a",color:"#999",list:[{pagePath:"pages/comic/comic",iconPath:"static/images/tab_comic_home_n.png",selectedIconPath:"static/images/tab_comic_home_p.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/video/video",iconPath:"static/images/tab_video_home_n.png",selectedIconPath:"static/images/tab_video_home_p.png",text:"短视频",redDot:!1,badge:""},{pagePath:"pages/recom/index",iconPath:"static/images/tab_video_home_n.png",selectedIconPath:"static/images/tab_video_home_p.png",text:"C+",redDot:!1,badge:""},{pagePath:"pages/ucenter/ucenter",iconPath:"static/images/tab_mine_n.png",selectedIconPath:"static/images/tab_mine_p.png",text:"测试",redDot:!1,badge:""},{pagePath:"pages/mine/index",iconPath:"static/images/tab_mine_n.png",selectedIconPath:"static/images/tab_mine_p.png",text:"我的",redDot:!1,badge:""}]},networkTimeout:{request:1e4,connectSocket:1e4,uploadFile:1e4,downloadFile:1e4},debug:!0,globalStyle:{navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",enablePullDownRefresh:!1,backgroundColor:"#FFFFFF",backgroundTextStyle:"dark"}},e.__uniConfig.router={mode:"history",base:"/h5/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},a.default.component("pages-mine-index",(function(e){var n={component:o.e("pages-mine-index").then(function(){return e(o("b8af"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-recom-index",(function(e){var n={component:o.e("pages-recom-index").then(function(){return e(o("8632"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-comic-comic",(function(e){var n={component:o.e("pages-comic-comic").then(function(){return e(o("74c9"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-ucenter-ucenter",(function(e){var n={component:o.e("pages-ucenter-ucenter").then(function(){return e(o("873e"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-logs-logs",(function(e){var n={component:o.e("pages-logs-logs").then(function(){return e(o("b224"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-video-video",(function(e){var n={component:o.e("pages-video-video").then(function(){return e(o("ae5d"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-comic_detail-comicDetail",(function(e){var n={component:o.e("pages-comic_detail-comicDetail").then(function(){return e(o("0832"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-comic-reader-comicReader",(function(e){var n={component:o.e("pages-comic-reader-comicReader").then(function(){return e(o("f4c4"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-video_play-videoPlay",(function(e){var n={component:o.e("pages-video_play-videoPlay").then(function(){return e(o("cb60"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/mine/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:4},__uniConfig.globalStyle,{navigationBarTitleText:"我的"})},[e("pages-mine-index",{slot:"page"})])}},meta:{id:1,name:"pages-mine-index",isNVue:!1,pagePath:"pages/mine/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:4,windowTop:44}},{path:"/pages/recom/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"C+"})},[e("pages-recom-index",{slot:"page"})])}},meta:{id:2,name:"pages-recom-index",isNVue:!1,pagePath:"pages/recom/index",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/comic/comic",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"腾讯动漫"})},[e("pages-comic-comic",{slot:"page"})])}},meta:{id:3,name:"pages-comic-comic",isNVue:!1,pagePath:"pages/comic/comic",isQuit:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/ucenter/ucenter",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{})},[e("pages-ucenter-ucenter",{slot:"page"})])}},meta:{id:4,name:"pages-ucenter-ucenter",isNVue:!1,pagePath:"pages/ucenter/ucenter",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/logs/logs",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"查看启动日志",usingComponents:{}})},[e("pages-logs-logs",{slot:"page"})])}},meta:{name:"pages-logs-logs",isNVue:!1,pagePath:"pages/logs/logs",windowTop:44}},{path:"/pages/video/video",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"",usingComponents:{}})},[e("pages-video-video",{slot:"page"})])}},meta:{id:5,name:"pages-video-video",isNVue:!1,pagePath:"pages/video/video",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/comic_detail/comicDetail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",usingComponents:{}})},[e("pages-comic_detail-comicDetail",{slot:"page"})])}},meta:{name:"pages-comic_detail-comicDetail",isNVue:!1,pagePath:"pages/comic_detail/comicDetail",windowTop:44}},{path:"/pages/comic-reader/comicReader",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{usingComponents:{}})},[e("pages-comic-reader-comicReader",{slot:"page"})])}},meta:{name:"pages-comic-reader-comicReader",isNVue:!1,pagePath:"pages/comic-reader/comicReader",windowTop:44}},{path:"/pages/video_play/videoPlay",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-video_play-videoPlay",{slot:"page"})])}},meta:{name:"pages-video_play-videoPlay",isNVue:!1,pagePath:"pages/video_play/videoPlay",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,o("c8ba"))},"58cf":function(e,n,o){var a=o("24fb");n=a(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/**app.css**/.container{box-sizing:border-box;background-color:#fff;font-family:PingFangSC-Light,helvetica,Heiti SC}uni-view, uni-image, uni-text, uni-navigator{box-sizing:border-box;padding:0;margin:0}uni-view, uni-text{font-family:PingFangSC-Light,helvetica,Heiti SC;font-size:%?29?%;color:#333}\r\n/*隐藏滚动条*/::-webkit-scrollbar{width:0;height:0;color:transparent}",""]),e.exports=n},"70ab":function(e,n,o){"use strict";o.r(n);var a=o("1542"),i=o("0597");for(var t in i)"default"!==t&&function(e){o.d(n,e,(function(){return i[e]}))}(t);o("9f2d");var r,c=o("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=s.exports},9288:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={appid:"__UNI__3F0DDB0"};n.default=a},"9f2d":function(e,n,o){"use strict";var a=o("3644"),i=o.n(a);i.a},c3f7:function(e,n,o){"use strict";o("4160"),o("b64b"),o("ac1f"),o("1276"),o("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},globalData:{userInfo:null,encryptedData:null,iv:null},onLaunch:function(){var e=uni.getStorageSync("logs")||[];e.unshift(Date.now()),uni.setStorageSync("logs",e),uni.login({success:function(e){}})},methods:{setData:function(e){var n,o,a=this,i=[];Object.keys(e).forEach((function(t){i=t.split("."),n=e[t],o=a.$data,i.forEach((function(e,t){t+1==i.length?a.$set(o,e,n):o[e]||a.$set(o,e,{}),o=o[e]}))}))}}};n.default=a},e30f:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={pages:{"pages/mine/index":{navigationBarTitleText:"我的"},"pages/recom/index":{navigationBarTitleText:"C+"},"pages/comic/comic":{navigationBarTitleText:"腾讯动漫"},"pages/ucenter/ucenter":{},"pages/logs/logs":{navigationBarTitleText:"查看启动日志",usingComponents:{}},"pages/video/video":{navigationBarTitleText:"",usingComponents:{}},"pages/comic_detail/comicDetail":{navigationBarTitleText:"",usingComponents:{}},"pages/comic-reader/comicReader":{usingComponents:{}},"pages/video_play/videoPlay":{}},globalStyle:{navigationBarBackgroundColor:"#FFFFFF",navigationBarTextStyle:"black",enablePullDownRefresh:!1,backgroundColor:"#FFFFFF",backgroundTextStyle:"dark"}};n.default=a}});