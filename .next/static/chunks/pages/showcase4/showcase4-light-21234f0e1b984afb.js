(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4481],{8630:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase4/showcase4-light",function(){return n(3195)}])},5850:function(e,t){"use strict";t.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},5217:function(e,t,n){"use strict";var r=n(2455);t.Z=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach((function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-tit")})),t.addEventListener("mousemove",(function(t){(0,r.Ji)(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"})),t.addEventListener("mouseleave",(function(){(0,r.U6)(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){(0,r.Ji)(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){(0,r.U6)(t,800),t.style.padding=0}))}))}},3781:function(e,t,n){"use strict";var r=n(603),i=n(5893),s=n(7294),o=n(1664),a=n.n(o),c=n(2873),l=n(265),u=n(8116),d=(n(933),n(8770),n(92),n(8277),n(5217)),p=n(5850);u.ZP.use([u.W_,u.tl,u.VS,u.Gk]);t.Z=function(){var e=(0,r.Z)(s.useState(!0),2),t=e[0],n=e[1];s.useEffect((function(){setTimeout((function(){n(!1),(0,d.Z)(),(0,p.Z)()}))}),[]);var o=s.useRef(null),u=s.useRef(null),f=s.useRef(null);return(0,i.jsxs)("header",{className:"slider showcase-grid",children:[(0,i.jsx)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:t?null:(0,i.jsx)(c.t,{speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,navigation:{prevEl:o.current,nextEl:u.current},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},onBeforeInit:function(e){e.params.navigation.prevEl=o.current,e.params.navigation.nextEl=u.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=o.current,e.params.navigation.nextEl=u.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:4,children:l.map((function(e){return(0,i.jsx)(c.o,{className:"swiper-slide",children:(0,i.jsx)(a(),{passHref:!0,href:"/project-details2/project-details2-dark",children:(0,i.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-tooltip-tit":e.title.first+" "+e.title.second,"data-tooltip-sub":e.sub})})},e.id)}))})}),(0,i.jsxs)("div",{className:"txt-botm",children:[(0,i.jsxs)("div",{ref:u,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Next Slide"})}),(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,i.jsxs)("div",{ref:o,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"fas fa-chevron-left"})}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Prev Slide"})})]}),(0,i.jsx)("div",{className:"swiper-pagination dots",ref:f})]})]})}},371:function(e,t,n){"use strict";var r=n(5893),i=n(7294),s=n(9008),o=n.n(s);t.Z=function(e){var t=e.children;return e.bdOn&&i.useEffect((function(){return document.querySelector("body").classList.add("bd-dark"),function(){document.querySelector("body").classList.remove("bd-dark")}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("link",{rel:"stylesheet",href:"/css/light.css"})}),t]})}},3195:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=(n(7294),n(1966)),s=n(3781),o=n(371);t.default=function(){return(0,r.jsxs)(o.Z,{bdOn:!0,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(s.Z,{})]})}},8770:function(){},603:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[1664,7255,8435,9774,2888,179],(function(){return t=8630,e(e.s=t);var t}));var t=e.O();_N_E=t}]);