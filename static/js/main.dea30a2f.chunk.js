(this.webpackJsonpmyresume=this.webpackJsonpmyresume||[]).push([[0],{22:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},5:function(e){e.exports=JSON.parse('{"title1":"Hello , I am Milad","title2":"Engineer | ReactJs Dev","links":{"linkedin":"https://linkedin.com/in/milad-mozhdehipour-a004b2190","twitter":"https://twitter.com/milad_mozhde","github":"https://github.com/MilladMozhdehi","instagram":"https://www.instagram.com/miladmozhdehi"},"section":[{"title":"About","items":[{"type":"p","container":"I am Milad Mozhdehi Pour and I love programming."},{"type":"p","container":"I graduate at Garmsar University but because of interest in programming I start self-learning JavaScript."},{"type":"p","container":"I am very enthusiastic in coding and I learn it by video and pdf, but I sure in near future I become a professional full stack Dev."}]},{"title":"Skills","items":[{"type":"card","content":{"image":"./images/REACT.png","title":"React"}},{"type":"card","content":{"image":"./images/jS.png","title":"JavaScript"}},{"type":"card","content":{"image":"./images/CSS.png","title":"CSS"}},{"type":"card","content":{"image":"./images/HTML.png","title":"HTmL"}}]}]}')},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),l=(a(27),a(1)),o=a(2),s=a(4),m=a(3),u=(a(28),a(7)),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("nav",{className:"nav"},c.a.createElement("div",null,e),c.a.createElement("div",{className:"scrolls"},c.a.createElement(u.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},c.a.createElement("a",{className:"decoration1",id:"a1",href:""},"About")),"   ",c.a.createElement(u.Link,{activeClass:"active",to:"test2",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},c.a.createElement("a",{id:"a1",href:"",className:"decoration2"},"Skills"))))}}]),a}(n.Component),p=a(5),h=(a(39),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}]),a}(n.Component)),v=a(21),f=(a(45),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(h,{className:"first"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h1",{className:"tSize1"},p.title1),c.a.createElement("h2",{className:"tSize2"},p.title2)),c.a.createElement("div",{className:"links"},Object.keys(p.links).map((function(e){return c.a.createElement("div",{className:"icons"},c.a.createElement(v.SocialIcon,{url:p.links[e]}))}))))),c.a.createElement(u.Element,{name:"test1",className:"element"}))}}]),a}(n.Component)),b=(a(46),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"border"},c.a.createElement(h,{className:"second"},c.a.createElement("div",null,c.a.createElement("h3",{className:"tSize2"},p.section[0].title),c.a.createElement("div",{className:"p"},c.a.createElement("div",null,p.section[0].items[0].container),c.a.createElement("div",null,p.section[0].items[1].container),c.a.createElement("div",null,p.section[0].items[2].container)))),c.a.createElement(u.Element,{name:"test2",className:"element"}))}}]),a}(n.Component)),E=(a(47),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",{className:"tSize3"},p.section[1].title),c.a.createElement("div",{className:"wrapper"},p.section[1].items.map((function(e){return c.a.createElement("div",{className:"cards"},c.a.createElement("div",null,c.a.createElement("img",{src:e.content.image})),c.a.createElement("div",null,c.a.createElement("h4",{className:"tSize4"},e.content.title)))}))))}}]),a}(n.Component)),g=(a(48),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(h,{className:"first"},c.a.createElement(E,null))}}]),a}(n.Component)),y=(a(49),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={color:"black",backgroundColor:"tomato"},e}return Object(o.a)(a,[{key:"ChangeColor",value:function(){this.setState({backgroundColor:"tomato"===this.state.backgroundColor?"orange":"tomato",color:"black"===this.state.color?"white":"black"})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{backgroundColor:this.state.backgroundColor,color:this.state.color}},c.a.createElement(d,null,c.a.createElement("img",{src:"./images/paint.png",href:"#",className:"img",onClick:function(){e.ChangeColor()}})),c.a.createElement(f,null),c.a.createElement(b,null),c.a.createElement(g,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.dea30a2f.chunk.js.map