webpackJsonp([1],{0:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=l(1),r=n(a),i=l(31),o=n(i),c=l(208),u=n(c);l(206),o.default.render(r.default.createElement(u.default,null),document.getElementById("root"))},208:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=function(){function e(e,t){for(var l=0;t.length>l;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}();l(209);var c=l(1),u=n(c),s=l(176),d=(n(s),l(199)),f=l(211),h=n(f),p=function(e){function t(){var e;a(this,t);for(var l=arguments.length,n=Array(l),i=0;l>i;i++)n[i]=arguments[i];var o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return o.changeTile=function(e){o.setState({title:e.target.value})},o.state={title:"",className:null,height:null,src:null},o}return i(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){confirm("Can I update the states?")&&e.setState({className:"change-style-to",height:80,src:h.default})},5e3)}},{key:"render",value:function(){return u.default.createElement("div",{className:"container"},u.default.createElement("section",null,u.default.createElement("input",{type:"text",value:this.state.title,onChange:this.changeTile})),u.default.createElement("h3",null,"Fill"),u.default.createElement("section",null,u.default.createElement("div",{className:"box"},u.default.createElement(d.Div,{className:"square"}),u.default.createElement(d.Img,{props:{children:"loading..."},src:this.state.src,width:80,height:80})),u.default.createElement("br",null),u.default.createElement(d.H,{className:this.state.className},this.state.title),u.default.createElement("br",null),u.default.createElement(d.Div,null,this.state.title)),u.default.createElement("h3",null,"Square"),u.default.createElement("section",{style:{textAlign:"center"}},u.default.createElement(d.Div,{holder:s.holders.Square,style:{height:this.state.height}})),u.default.createElement("h3",null,"Circle"),u.default.createElement("section",{style:{textAlign:"center"}},u.default.createElement(d.Div,{holder:s.holders.Circle,style:{height:this.state.height}}),u.default.createElement("br",null),u.default.createElement(d.Div,{holder:s.holders.Circle,className:"circle"}),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement(d.Img,{holder:s.holders.Circle,props:{children:"loading..."},src:this.state.src,width:80,height:80})),u.default.createElement("h3",null,"Text"),u.default.createElement("section",null,u.default.createElement(d.P,{holder:s.holders.Text,style:{textIndent:30,fontSize:20}},this.state.title),u.default.createElement(d.P,{holder:s.holders.Text,props:{length:300},style:{padding:"5px 0"}},this.state.title)),u.default.createElement("h3",null,"Table"),u.default.createElement("section",null,u.default.createElement(d.Div,{holder:s.holders.Table,props:{cols:4,rows:2},style:{height:80}})))}}]),t}(c.Component);t.default=p},209:function(e,t,l){var n=l(210);"string"==typeof n&&(n=[[e.id,n,""]]);var a,r={};r.transform=a;l(174)(n,r);n.locals&&(e.exports=n.locals)},210:function(e,t,l){t=e.exports=l(173)(void 0),t.push([e.id,"section{margin-bottom:15px}h3{border-bottom:1px solid #ddd}.container{position:relative;margin:60px auto;padding:0;width:80%;max-width:800px}.box{overflow:hidden}.box .square{width:80px;height:80px;margin-right:30px;display:inline-block;float:left}.box img{float:left}.circle{width:80px;height:80px;border-radius:40px;display:inline-block}.change-style-to{width:33.33%;opacity:.6}",""])},211:function(e,t,l){e.exports=l.p+"images/github-toplan.png"}});
//# sourceMappingURL=basic.js.map