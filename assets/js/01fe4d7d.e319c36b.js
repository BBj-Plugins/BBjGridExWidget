"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1,title:"Overview"},l=void 0,a={unversionedId:"filtering/overview",id:"filtering/overview",title:"Overview",description:"The grid can display a subset of the provided rows using filtering.",source:"@site/docs/filtering/overview.md",sourceDirName:"filtering",slug:"/filtering/overview",permalink:"/BBjGridExWidget/docs/filtering/overview",draft:!1,editUrl:"https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website/docs/filtering/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Filtering",permalink:"/BBjGridExWidget/docs/category/filtering"},next:{title:"Columns Filter",permalink:"/BBjGridExWidget/docs/category/columns-filter"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The grid can display a subset of the provided rows using filtering."),(0,i.kt)("p",null,"This section outlines the different types of filtering that can be performed in the grid as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./columns-filter/overview"},"Column Filters"),": Column filters appear in the column menu and / or in the ",(0,i.kt)("a",{parentName:"li",href:"../accessories/toolpanels/filters-tool-panel"},"Filters Tool Panel"),". A filter set on a column filters using data in that column only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./quick-filter"},"Quick Filter"),": Quick filter is a piece of text given to the grid (typically the user will type it in somewhere in your application) that is used to filter rows using data in all columns in the grid.")))}p.isMDXComponent=!0}}]);