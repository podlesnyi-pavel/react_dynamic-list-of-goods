(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(1),a=e.n(c),u=e(2),s=e(6),i=e(7),d=e(9),f=e(8),p=e(3),l=e.n(p),h=(e(15),e(0)),b=function(t){var n=t.goods;return Object(h.jsx)("ul",{children:n.map((function(t){return Object(h.jsx)("li",{style:{color:t.color},children:"".concat(t.name)},t.id)}))})},j=function(){var t=Object(u.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(u.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j().then((function(t){return t.filter((function(t){return"red"===t.color}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(t){Object(d.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.getGoods=function(){var n=Object(u.a)(a.a.mark((function n(e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e().then((function(n){return t.setState({goods:n})}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Dynamic list of Goods"}),Object(h.jsxs)("div",{className:"App__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return t.getGoods(j)},children:"Load All goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.getGoods(g)},children:"Load 5 first goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.getGoods(m)},children:"Load red goods"})]}),n.length>0&&Object(h.jsx)(b,{goods:n})]})}}]),e}(l.a.Component),v=O;o.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a6511ff8.chunk.js.map