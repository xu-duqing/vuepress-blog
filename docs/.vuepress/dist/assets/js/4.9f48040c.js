(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{343:function(t,e,n){},344:function(t,e,n){},346:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",o="month",a="quarter",u="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:o,y:u,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:a}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",$={};$[m]=l;var g=function(t){return t instanceof M},v=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)$[t]&&(r=t),e&&($[t]=e,r=t);else{var i=t.name;$[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},_=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},y=d;y.l=v,y.i=g,y.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function l(t){this.$L=v(t.locale,null,!0),this.parse(t)}var p=l.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return _(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<_(t)},p.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,a){var f=this,h=!!y.u(a)||a,l=y.p(t),p=function(t,e){var n=y.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return h?n:n.endOf(i)},d=function(t,e){return y.w(f.toDate()[t].apply(f.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},m=this.$W,$=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case u:return h?p(1,0):p(31,11);case o:return h?p(1,$):p(0,$+1);case s:var _=this.$locale().weekStart||0,M=(m<_?m+7:m)-_;return p(h?g-M:g+(6-M),$);case i:case c:return d(v+"Hours",0);case r:return d(v+"Minutes",1);case n:return d(v+"Seconds",2);case e:return d(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(s,a){var f,h=y.p(s),l="set"+(this.$u?"UTC":""),p=(f={},f[i]=l+"Date",f[c]=l+"Date",f[o]=l+"Month",f[u]=l+"FullYear",f[r]=l+"Hours",f[n]=l+"Minutes",f[e]=l+"Seconds",f[t]=l+"Milliseconds",f)[h],d=h===i?this.$D+(a-this.$W):a;if(h===o||h===u){var m=this.clone().set(c,1);m.$d[p](d),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](d);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[y.p(t)]()},p.add=function(t,a){var c,f=this;t=Number(t);var h=y.p(a),l=function(e){var n=_(f);return y.w(n.date(n.date()+Math.round(e*t)),f)};if(h===o)return this.set(o,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===i)return l(1);if(h===s)return l(7);var p=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,d=this.$d.getTime()+t*p;return y.w(d,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),s=this.$H,o=this.$m,a=this.$M,u=i.weekdays,c=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return y.s(s%12||12,t,"0")},p=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:y.s(a+1,2,"0"),MMM:f(i.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,u,2),ddd:f(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:y.s(s,2,"0"),h:l(1),hh:l(2),a:p(s,o,!0),A:p(s,o,!1),m:String(o),mm:y.s(o,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||d[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,c,f){var h,l=y.p(c),p=_(t),d=6e4*(p.utcOffset()-this.utcOffset()),m=this-p,$=y.m(this,p);return $=(h={},h[u]=$/12,h[o]=$,h[a]=$/3,h[s]=(m-d)/6048e5,h[i]=(m-d)/864e5,h[r]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[l]||m,f?$:y.a($)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return $[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},l}(),D=M.prototype;return _.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",o],["$y",u],["$D",c]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,M,_),t.$i=!0),_},_.locale=v,_.isDayjs=g,_.unix=function(t){return _(1e3*t)},_.en=$[m],_.Ls=$,_.p={},_}()},347:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var r=e.prototype;n.utc=function(t){return new e({date:t,utc:!0,args:arguments})},r.utc=function(t){var e=n(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),"minute"):e},r.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var i=r.parse;r.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),i.call(this,t)};var s=r.init;r.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else s.call(this)};var o=r.utcOffset;r.utcOffset=function(t,e){var n=this.$utils().u;if(n(t))return this.$u?0:n(this.$offset)?o.call(this):this.$offset;var r=Math.abs(t)<=16?60*t:t,i=this;if(e)return i.$offset=r,i.$u=0===t,i;if(0!==t){var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(i=this.local().add(r+s,"minute")).$offset=r,i.$x.$localOffset=s}else i=this.utc();return i};var a=r.format;r.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return a.call(this,e)},r.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var u=r.toDate;r.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var c=r.diff;r.diff=function(t,e,r){if(t&&this.$u===t.$u)return c.call(this,t,e,r);var i=this.local(),s=n(t).local();return c.call(i,s,e,r)}}}()},348:function(t,e,n){"use strict";n(343)},349:function(t,e,n){"use strict";n(344)},350:function(t,e,n){"use strict";var r=n(11),i=n(4),s=n(79),o=n(16),a=n(13),u=n(30),c=n(205),f=n(51),h=n(3),l=n(37),p=n(52).f,d=n(28).f,m=n(12).f,$=n(204).trim,g=i.Number,v=g.prototype,_="Number"==u(l(v)),y=function(t){var e,n,r,i,s,o,a,u,c=f(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=$(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(s=c.slice(2)).length,a=0;a<o;a++)if((u=s.charCodeAt(a))<48||u>i)return NaN;return parseInt(s,r)}return+c};if(s("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var M,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(_?h((function(){v.valueOf.call(n)})):"Number"!=u(n))?c(new g(y(e)),n,D):y(e)},S=r?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;S.length>O;O++)a(g,M=S[O])&&!a(D,M)&&m(D,M,d(g,M));D.prototype=v,v.constructor=D,o(i,"Number",D)}},351:function(t,e,n){var r=n(201),i=n(194),s=n(352),o=n(356);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),s(t,n,(function(t,n){return e(t,n[0])}))}},352:function(t,e,n){var r=n(122),i=n(353),s=n(117);t.exports=function(t,e,n){for(var o=-1,a=e.length,u={};++o<a;){var c=e[o],f=r(t,c);n(f,c)&&i(u,s(c,t),f)}return u}},353:function(t,e,n){var r=n(354),i=n(117),s=n(120),o=n(77),a=n(53);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,f=(e=i(e,t)).length,h=f-1,l=t;null!=l&&++c<f;){var p=a(e[c]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(c!=h){var m=l[p];void 0===(d=u?u(m,p,l):void 0)&&(d=o(m)?m:s(e[c+1])?[]:{})}r(l,p,d),l=l[p]}return t}},354:function(t,e,n){var r=n(355),i=n(119),s=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},355:function(t,e,n){var r=n(202);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},356:function(t,e,n){var r=n(195),i=n(357),s=n(359);t.exports=function(t){return r(t,s,i)}},357:function(t,e,n){var r=n(118),i=n(358),s=n(196),o=n(197),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,s(t)),t=i(t);return e}:o;t.exports=a},358:function(t,e,n){var r=n(200)(Object.getPrototypeOf,Object);t.exports=r},359:function(t,e,n){var r=n(198),i=n(360),s=n(121);t.exports=function(t){return s(t)?r(t,!0):i(t)}},360:function(t,e,n){var r=n(77),i=n(199),s=n(361),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return s(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},361:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},362:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(15);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,391,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(348),n(10)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(349),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(350),n(81)),u=n.n(a),c=n(351),f=n.n(c),h={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return f()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=Object(i.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},368:function(t,e,n){},380:function(t,e,n){"use strict";n(368)},395:function(t,e,n){"use strict";n.r(e);n(80),n(1);var r=n(346),i=n.n(r),s=n(347),o=n.n(s),a=n(6),u=n(362);i.a.extend(o.a);var c={components:{NavigationIcon:a.n,ClockIcon:a.a,TagIcon:a.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return u.b},resolvePostDate:function(t){return i.a.utc(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},f=(n(380),n(10)),h=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt?n("client-only",[n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(e.excerpt)}})]):n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n      ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])],1)})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=h.exports}}]);