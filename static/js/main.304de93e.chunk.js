(this.webpackJsonpvilperime=this.webpackJsonpvilperime||[]).push([[0],{144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n.n(i),r=n(47),c=n.n(r),s=(n(57),n(58),n(59),n(22),n(0)),o=n(1),l=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"isWebGLAvailable",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(t){return!1}}},{key:"isWebGL2Available",value:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(t){return!1}}},{key:"getWebGLErrorMessage",value:function(){return this.getErrorMessage(1)}},{key:"getWebGL2ErrorMessage",value:function(){return this.getErrorMessage(2)}},{key:"getErrorMessage",value:function(e){var t={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',i=document.createElement("div");return i.id="webglmessage",i.style.fontFamily="monospace",i.style.fontSize="13px",i.style.fontWeight="normal",i.style.textAlign="center",i.style.background="#fff",i.style.color="#000",i.style.padding="1.5em",i.style.width="400px",i.style.margin="5em auto 0",n=(n=t[e]?n.replace("$0","graphics card"):n.replace("$0","browser")).replace("$1",{1:"WebGL",2:"WebGL 2"}[e]),i.innerHTML=n,i}}]),e}(),d=(n(48),n(4)),u=n(49),b=n.p+"static/media/vilperi.c752422f.glb",j=n(8),h=200,f=250,m=function(){var e=Object(i.useRef)(document.createElement("div"));return Object(i.useEffect)((function(){var t=x(),n=p(0,.75,1.25,0,0,0),i=g(),a=v(1,8,8);v(-1,4,8);(new u.a).load(b,(function(e){var n=e.scene;t.add(n)}),void 0,(function(e){console.error(e)})),t.add(n),t.add(a);!function e(){i.render(t,n),window.requestAnimationFrame(e)}(),e.current.appendChild(i.domElement)}),[e]),Object(j.jsx)("div",{ref:e})},x=function(){return new d.Z},p=function(e,t,n,i,a,r){var c=new d.P(75,h/f,.1,100);return c.position.set(e,t,n),c.rotation.set(i,a,r),c},g=function(){var e=new d.mb({alpha:!0,antialias:!0});return e.setSize(h,f),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e},v=function(e,t,n){var i=new d.Q(16777215,1.5);return i.position.set(e,t,n),i.intensity=1.4,i},O=function(){return Object(j.jsx)("div",{className:"header-image-container","data-testid":"headerImage",children:l.isWebGLAvailable()?Object(j.jsx)(m,{}):Object(j.jsx)("img",{className:"header-image",alt:'A "self" portrait',src:"https://images.unsplash.com/photo-1579972383667-4894c883d674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"})})},w=function(){return Object(j.jsxs)("div",{className:"header-text-container","data-testid":"headerText",children:[Object(j.jsx)("h1",{className:"header-text",children:"Hello!"}),Object(j.jsx)("h2",{className:"header-text",children:"Welcome to my suuuuuper cool website!"}),Object(j.jsx)("div",{className:"header-socials",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Github"}),Object(j.jsx)("li",{children:"Contact Info"}),Object(j.jsx)("li",{children:"Other Info"}),Object(j.jsx)("li",{children:"Give me a treat"})]})})]})},y=function(){return Object(j.jsxs)("header",{className:"header","data-testid":"header",children:[Object(j.jsx)(w,{}),Object(j.jsx)(O,{})]})},G=(n(81),n(19)),L=function(e){var t=e.articleNavHeaders;return Object(j.jsx)("nav",{className:"navigation-bar","data-testid":"navigation-bar",children:t&&Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)(G.b,{to:e.ref,"data-testid":e.text,children:e.text})},t)}))})})},W=(n(38),n(17)),N=n(52),C=n.n(N),E=function(e){var t=e.mdFile,n=Object(i.useState)("<h2> Getting article.. </h2>"),a=Object(W.a)(n,2),r=a[0],c=a[1];return Object(i.useEffect)((function(){var e=new C.a({html:!0});fetch(t).then((function(e){return e.text()})).then((function(t){var n=e.render(t);console.log(n),c(n)}))}),[t]),Object(j.jsx)("article",{className:"app-main","data-testid":"article",children:Object(j.jsx)("div",{className:"article-preview",dangerouslySetInnerHTML:{__html:r}})})},M=n(10),F=n.p+"static/media/vilperi.b12c0286.md",k=n.p+"static/media/cah.5cb71714.md",H="/",A="/cah",I=[{text:"vilperi.me",ref:"."+H},{text:"Cards Against Humanity",ref:"."+A}],R=[{path:H,mdFile:F},{path:A,mdFile:k}],S=function(){return Object(j.jsx)(M.c,{children:R.map((function(e){return Object(j.jsx)(M.a,{exact:!0,path:e.path,children:Object(j.jsx)(E,{mdFile:e.mdFile})},e.path)}))})},P=(n(144),function(){return Object(j.jsx)("footer",{className:"footer","data-testid":"footer",children:Object(j.jsx)("p",{children:" Webpage by Vilps. "})})}),T=function(){return Object(j.jsx)(G.a,{children:Object(j.jsxs)("div",{className:"app","data-testid":"app",children:[Object(j.jsx)(y,{}),Object(j.jsx)(L,{articleNavHeaders:I}),Object(j.jsx)(S,{}),Object(j.jsx)(P,{})]})})},$=(n(145),n(146),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))});c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),$()},22:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},81:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.304de93e.chunk.js.map