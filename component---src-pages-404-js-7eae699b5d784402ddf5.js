(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(156),s=n(157),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},152:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(154);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var a=n(164),r=n.n(a),o=n(165),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var s=c.rhythm,u=c.scale},154:function(t,e,n){var a;t.exports=(a=n(155))&&a.default||a},155:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},156:function(t,e,n){"use strict";n(34);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(152),s=n(153),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=u},157:function(t,e,n){"use strict";var a=n(158),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(166),u=n.n(s);function l(t){var e=t.description,n=t.lang,r=t.meta,i=t.title,c=a.data.site,s=e||c.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=l},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Alperen's Personal Blog",description:"",author:"Alperen"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-7eae699b5d784402ddf5.js.map