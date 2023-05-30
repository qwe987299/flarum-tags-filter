/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function a(){"use strict";t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function m(){}function g(){}function d(){}var v={};l(v,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(q([])));b&&b!==r&&o.call(b,s)&&(v=b);var w=d.prototype=m.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(a,i,s,u){var c=p(t[a],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function q(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return g.prototype=d,l(w,"constructor",d),l(d,"constructor",g),g.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(T.prototype),l(T.prototype,u,(function(){return this})),e.AsyncIterator=T,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new T(f(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,c,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=q,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.apply(this,arguments)}r.r(n);const e=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/app"];var o=r.n(a);const i=flarum.core.compat["forum/components/IndexPage"];var s=r.n(i);const u=flarum.core.compat["forum/components/LinkButton"];var c=r.n(u);function l(t,e,r,n,a,o,i){try{var s=t[o](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,a)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var h=r(357),g=r.n(h);const d=flarum.core.compat["common/Component"];var v=r.n(d);const y=flarum.core.compat["common/components/Button"];var b=r.n(y);const w=flarum.core.compat["common/components/Dropdown"];var x=r.n(w);const T=flarum.core.compat["common/components/Separator"];var L=r.n(T);const _=flarum.core.compat["common/utils/extractText"];var S=r.n(_);const O=flarum.core.compat["common/utils/Stream"];var q=r.n(O);const k=flarum.core.compat["common/components/LoadingIndicator"];var N=r.n(k),j=function(e){var r,n;function a(){return e.apply(this,arguments)||this}n=e,(r=a).prototype=Object.create(n.prototype),r.prototype.constructor=r,p(r,n);var i,s,u=a.prototype;return u.oninit=function(t){var r=this;e.prototype.oninit.call(this,t),this.state={currentData:[],value:q()(""),searchQuery:q()(""),lastSearchedQuery:"",loading:!1,timeoutKey:null,selectedTags:[],selectedTagsStr:"",tagList:[],tagListr:[],tagView:[],label:"All"},window.thisTag=this,o().store.find("tags").then((function(t){r.state.tagView=r.tagList})),m.redraw()},u.refreshTagView=function(){var t=this;this.state.tagView=JSON.parse(JSON.stringify(this.tagList)),this.state.selectedTags.map((function(e){t.state.tagView=t.state.tagView.filter((function(t){return"free-tag"!=t.tagType&&(null==t?void 0:t.id)!=(null==e?void 0:e.id)}))})),"tag"==o().current.data.routeName&&this.state.tagView.filter((function(t){return t.attributes.slug==window.location.pathname.split("/")[2]}))[0],m.redraw()},u.view=function(){var e,r=this;this.performSearch(this.state.searchQuery());var n=[];function a(e){return null==e?void 0:e.map((function(e){if(e){var r=null!=e.attributes.position&&0==e.attributes.isChild?600:400,n=null!=e.attributes.position&&0==e.attributes.isChild?400:200;return m(b(),{class:["TohsakaratTagsFilter-item Button ",null!=e&&e.attributes.color?"colored":"",e.attributes.description?"description":"",e.attributes.tagType],style:{"--tag-title-color":null!=e&&e.attributes.color?e.attributes.color:"var(--tag-color)",background:m.route.param().tags==e.attributes.slug?"var(--control-bg)":"unset"},onclick:function(){"free-tag"==e.attributes.tagType||"index"!=o().current.get("routeName")&&m.route.param().tags!=e.attributes.slug?window.thisTag.handleTagsChange(e.attributes.slug):"free-tag"!=e.attributes.tagType&&"index"==o().current.get("routeName")||"tag"==o().current.get("routeName")&&m.route.param().tags!=e.attributes.slug?m.route.set(o().routes.tag.path,t({},m.route.param(),{tags:e.attributes.slug})):"tag"==o().current.get("routeName")&&m.route.param().tags==e.attributes.slug&&m.route.set(o().routes.index.path,t({},m.route.param(),{tags:""}))}},m("span",{class:"SelectTagListItem-name",style:{fontWeight:r}},m("span",{class:"icon "+(e.attributes.icon?e.attributes.icon:"TagIcon")}),null==e?void 0:e.attributes.name),m("span",{class:"SelectTagListItem-description",style:{fontWeight:n}}," ",e.attributes.description))}}))}return this.refreshTagView(),this.state.loading?n.push(m(N(),null)):0==Number(this.state.searchQuery().length)?(this.state.lastSearchedQuery="",n.push(m("div",{class:"tohsakarat-selectTagsTab"},a(this.state.tagView)))):null!=(e=this.state.currentData)&&e.length?n.push(m("div",{class:"tohsakarat-selectTagsTab"},a(this.state.currentData))):n.push(m("span",null,S()(o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.no_results")))),o().search.params().q&&n.push(m(L(),null),m(b(),{class:"Button",icon:"fas fa-times",onclick:function(){return r.handleTagsChange(null)}},S()(o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.remove_filter")))),m(x(),{buttonClassName:"Button",updateOnClose:!0,label:this.label,accessibleToggleLabel:o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.accessible_label"),onshow:function(){$("input").focus()}},m("span",{class:"TagsLabel "},this.state.selectedTags.map((function(t){return m("span",{class:"TagLabel  "+(null!=t&&t.attributes.color?"colored ":" ")+(null==t?void 0:t.attributes.tagType),style:{background:null==t?void 0:t.attributes.color},onclick:function(){r.removeTag(t.attributes.slug)}},null==t?void 0:t.attributes.name)}))),m("input",{type:"text",class:"FormControl",placeholder:S()(o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.comment_filter")),value:this.state.value(),oninput:function(t){r.state.value(t.currentTarget.value),r.state.timeoutKey&&clearTimeout(r.state.timeoutKey),r.state.timeoutKey=setTimeout((function(){r.state.searchQuery(t.target.value)}),250)}}),m(L(),null),m("span",null),n)},u.minSearchLength=function(){return 0},u.maxResults=function(){return 5},u.performSearch=function(){var t,e=(t=g().mark((function t(e){var r,n,a=this;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.lastSearchedQuery!==e){t.next=2;break}return t.abrupt("return");case 2:if(this.state.loading=!0,this.state.lastSearchedQuery=e,r=[],n=this.getTags(),this.state.tagList=n,this.refreshTagView(),this.state.tagListr=this.state.tagView.map((function(t){var e=JSON.parse(JSON.stringify(t));return e.attributes=JSON.stringify(e.attributes),e})),r=(r=this.state.tagListr.filter((function(t){return-1!=t.attributes.toLowerCase().indexOf(e.toLowerCase())}))).map((function(t){return t.attributes=a.state.tagList.filter((function(e){return e.id==t.id}))[0].attributes,t})),this.state.currentData=JSON.parse(JSON.stringify(r)),this.state.loading=!1,m.redraw(),this.state.searchQuery()===e){t.next=16;break}return t.abrupt("return");case 16:this.state.loading=!1,m.redraw();case 18:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){l(o,n,a,i,s,"next",t)}function s(t){l(o,n,a,i,s,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),u.UpdateSelectedTags=function(){var t=this;if(this.tagList.length){var e=o().search.params();return this.state.selectedTags=e.q?e.q.split(" ").filter((function(t){return-1!=t.indexOf("tag:")})).map((function(t){return t.replaceAll("tag:","")})):[],this.state.selectedTags=this.state.selectedTags.map((function(e){return t.tagList.filter((function(t){return t.attributes.slug==e}))[0]})),this.state.selectedTagsStr=this.state.selectedTags.map((function(t){return null!=t&&t.attributes?m("span",{style:{color:null!=t&&t.attributes.color?t.attributes.color:"var(--tag-color)"}},(null==t?void 0:t.attributes.name)+" "):""})),m.redraw(),this.state.selectedTagsStr}return""},u.handleTagsChange=function(e){var r=o().search.params(),n=r.q;e?(r.q=r.q?r.q.split(" "):[],r.q=-1==r.q.indexOf("tag:"+e)?r.q.join(" ")+" tag:"+e:r.q.join(" ")," "==r.q[0]&&(r.q=r.q.substr(1))," "==r.q[r.q.length-1]&&(r.q=r.q.substr(0,r.q.length-2))):r.q=r.q,n!==r.q&&m.route.set(o().route(o().current.get("routeName"),t({},m.route.param(),r))),this.UpdateSelectedTags(),m.redraw()},u.removeTag=function(e){var r=o().search.params(),n=r.q;e?(r.q=r.q.split(" ").filter((function(t){return t!="tag:"+e&&""!=t})).join(" ")," "==r.q[0]&&(r.q=r.q.substr(1))," "==r.q[r.q.length-1]&&(r.q=r.q.substr(0,r.q.length-1))):r.q=r.q,n!==r.q&&m.route.set(o().route(o().current.get("routeName"),t({},m.route.param(),r))),this.UpdateSelectedTags(),m.redraw()},u.getTags=function(){var t=[];for(var e in o().store.data.tags)t.push(o().store.data.tags[e].data);return t=t.sort((function(e,r){function n(e){var r=1e5;return e&&(null!=e.attributes.position&&0==e.attributes.isChild?(r=1e3*e.attributes.position,e.attributes.tagType="root-cat"):null!=e.attributes.position&&1==e.attributes.isChild?(r=100*e.attributes.position+1e3*t.filter((function(t){return t.id==e.relationships.parent.data.id}))[0].attributes.position,e.attributes.tagType="child-cat"):e.attributes.tagType="free-tag",r-=e.attributes.discussionCount),r}return n(e)-n(r)}))},i=a,(s=[{key:"tagList",get:function(){return this.getTags()}},{key:"tagListr",get:function(){return this.tagList.map((function(t){var e=JSON.parse(JSON.stringify(t)),r="";for(var n in e.attributes)e.attributes[n]&&(r+=e.attributes[n]);return e.attributes=r,e}))}},{key:"label",get:function(){function t(t){return o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.label",{text:m("b",null,t)})}if(o().search.params().q){var e=this.UpdateSelectedTags();if(e)return t(e);this.handleTagsChange(null)}return t(o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.all"))}}])&&f(i.prototype,s),Object.defineProperty(i,"prototype",{writable:!1}),a}(v());const E=flarum.core.compat["forum/components/Search"];var P=r.n(E);const C=flarum.core.compat["forum/components/DiscussionsSearchSource"];var I=r.n(C);const V=flarum.core.compat["forum/components/DiscussionHero"];var F=r.n(V);o().initializers.add("tohsakarat/tags-filter",(function(){(0,e.extend)(s().prototype,"viewItems",(function(t){"byobuPrivate"!==o().current.data.routeName&&t.add("tagsFilter",m(j,null),-15)})),(0,e.extend)(s().prototype,"viewItems",(function(t){t.add("search",m(P(),{state:o().search}),-16)})),(0,e.extend)(I().prototype,"view",(function(e,r){e[1]=m("li",null,m(c(),{icon:"fas fa-search",href:o().route(o().current.get("routeName"),t({},m.route.param(),{q:r}))},o().translator.trans("core.forum.search.all_discussions_button",{query:r}))),/^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/.test(r)&&e.unshift(m("li",null,m(c(),{icon:"fas fa-right",href:o().route("discussion",{id:r})},o().translator.trans("tohsakarat-tags-filter.forum.index_page.filter_tags.link-button")+" "+r)))})),(0,e.extend)(F().prototype,"items",(function(t,e){var r,n,a,i,s,u,c,l;null!=(r=o().current)&&null!=(n=r.data)&&null!=(a=n.discussion)&&null!=(i=a.data)&&i.id&&t.add("id",m("span",{icon:"fas fa-right"},m("i",{class:"fas fa-right"}),o().translator.trans("ID = "+(null==(s=o().current)||null==(u=s.data)||null==(c=u.discussion)||null==(l=c.data)?void 0:l.id))),-15)}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map