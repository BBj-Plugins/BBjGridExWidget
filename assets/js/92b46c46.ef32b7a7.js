"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,m=u["".concat(o,".").concat(c)]||u[c]||g[c]||a;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Overview"},l=void 0,d={unversionedId:"editing/overview",id:"editing/overview",title:"Overview",description:"Enable Editing",source:"@site/docs/editing/overview.md",sourceDirName:"editing",slug:"/editing/overview",permalink:"/BBjGridExWidget/docs/editing/overview",draft:!1,editUrl:"https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website/docs/editing/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Editing",permalink:"/BBjGridExWidget/docs/category/editing"},next:{title:"Start / Stop Cell Editing",permalink:"/BBjGridExWidget/docs/editing/start-stop-cell-editing"}},o={},p=[{value:"Enable Editing",id:"enable-editing",level:2},{value:"Cell Editors",id:"cell-editors",level:2},{value:"Editing Events",id:"editing-events",level:2}],s={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enable-editing"},"Enable Editing"),(0,r.kt)("p",null,"To enable Cell Editing for a Column, set ",(0,r.kt)("inlineCode",{parentName:"p"},"Editable=1")," on the Column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bbj"},'grid!.getColumn("CDNUMBER").setEditable(1)\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To enable/disable cell editing conditionally, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./editing-expressions"},"Editing Expressions")," documentation.")),(0,r.kt)("h2",{id:"cell-editors"},"Cell Editors"),(0,r.kt)("p",null,"By default the grid provides a cell editor for each column based on the Column's SQL Type"),(0,r.kt)("h2",{id:"editing-events"},"Editing Events"),(0,r.kt)("p",null,"Cell editing results in the following events."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Payload")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_CELL_VALUE_CHANGED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientEvents/GxClientEventsCell.html"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"GxClientEventsCell"))),(0,r.kt)("td",{parentName:"tr",align:null},"Value has changed after editing. This event will not fire if editing was cancelled (eg ESC was pressed).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_CELL_EDITING_STARTED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientEvents/GxClientEventsCell.html"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"GxClientEventsCell"))),(0,r.kt)("td",{parentName:"tr",align:null},"Editing a cell has started.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_CELL_EDITING_STOPPED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientEvents/GxClientEventsCell.html"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"GxClientEventsCell"))),(0,r.kt)("td",{parentName:"tr",align:null},"Editing a cell has stopped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_ROW_EDITING_STARTED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientEvents/GxClientEventsRowEditing.html"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"GxClientEventsRowEditing"))),(0,r.kt)("td",{parentName:"tr",align:null},"Editing a row has started (when row editing is enabled). When row editing, this event will be fired once and ",(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_CELL_EDITING_STARTED")," will be fired for each individual cell. Only fires when doing Full Row Editing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_ROW_EDITING_STOPPED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientEvents/GxClientEventsRowEditing.html"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"GxClientEventsRowEditing"))),(0,r.kt)("td",{parentName:"tr",align:null},"Editing a row has stopped (when row editing is enabled). When row editing, this event will be fired once and ",(0,r.kt)("inlineCode",{parentName:"td"},"ON_GRID_CELL_EDITING_STOPPED")," will be fired for each individual cell. Only fires when doing Full Row Editing")))))}g.isMDXComponent=!0}}]);