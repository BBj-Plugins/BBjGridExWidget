"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,title:"Value Parsers"},l=void 0,s={unversionedId:"editing/value-parsers",id:"editing/value-parsers",title:"Value Parsers",description:"After editing cells in the grid you have the opportunity to parse the value before inserting it into your data. This is done using The Value Parser Expression.",source:"@site/docs/editing/value-parsers.md",sourceDirName:"editing",slug:"/editing/value-parsers",permalink:"/BBjGridExWidget/docs/editing/value-parsers",draft:!1,editUrl:"https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website/docs/editing/value-parsers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Value Parsers"},sidebar:"tutorialSidebar",previous:{title:"Start / Stop Cell Editing",permalink:"/BBjGridExWidget/docs/editing/start-stop-cell-editing"},next:{title:"Value Setters",permalink:"/BBjGridExWidget/docs/editing/value-setters"}},o={},d=[{value:"Configuring Value Parsers",id:"configuring-value-parsers",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After editing cells in the grid you have the opportunity to parse the value before inserting it into your data. This is done using The Value Parser Expression."),(0,a.kt)("h2",{id:"configuring-value-parsers"},"Configuring Value Parsers"),(0,a.kt)("p",null,"A Value Parser is the inverse of a ",(0,a.kt)("a",{parentName:"p",href:"../rendering/value-formatter"},"Value Formatter")," and it is arbitrary ",(0,a.kt)("strong",{parentName:"p"},"JavaScript")," code/expression that gets called to parse the value before it is saved."),(0,a.kt)("p",null,"When working with expressions keep the following points in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the expression has the word ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," in it, then we will assume it is a multi-line expression and will not wrap it."),(0,a.kt)("li",{parentName:"ul"},"If the expression does not have the word ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," in it, then we will insert the ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," statement and the ",(0,a.kt)("inlineCode",{parentName:"li"},";")," for you."),(0,a.kt)("li",{parentName:"ul"},"If the expression has many lines, then you will need to provide the ",(0,a.kt)("inlineCode",{parentName:"li"},";")," at the end of each line and also provide the ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," statement.")),(0,a.kt)("p",null,"Expressions have access to several predefined variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oldValue"),(0,a.kt)("td",{parentName:"tr",align:null},"Mapped from the cell's old value, this is mapped in editing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"newValue"),(0,a.kt)("td",{parentName:"tr",align:null},"Mapped from the cell's new value, this is mapped in editing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"Mapped from the DataRow")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"column"),(0,a.kt)("td",{parentName:"tr",align:null},"Current column")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getValue"),(0,a.kt)("td",{parentName:"tr",align:null},"The value after it is processed by the ",(0,a.kt)("a",{parentName:"td",href:"../rendering/value-getters"},"ValueGetterExpression"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ctx"),(0,a.kt)("td",{parentName:"tr",align:null},"The grid ",(0,a.kt)("a",{parentName:"td",href:"../data/client-context"},"client context"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bbj"},"column!.setValueParserExpression(\"Number(newValue)')\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Below shows an example using value parsers. The following can be noted:"),(0,a.kt)("p",null,"All columns are editable. After any edit, the a message box shows what has been changed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Column ",(0,a.kt)("inlineCode",{parentName:"li"},"CDNUMBER")," is a string column. No parser is needed."),(0,a.kt)("li",{parentName:"ul"},"Column ",(0,a.kt)("inlineCode",{parentName:"li"},"TITLE")," has a parser which removes any dashes from the new value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bbj",metastring:"showLineNumbers",showLineNumbers:!0},'use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget\nuse com.basiscomponents.db.ResultSet\nuse com.basiscomponents.bc.SqlQueryBC\n\nwnd! = BBjAPI().openSysGui("X0").addWindow(10, 10, 450, 450, "Value Parser")\nwnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")\n\ngosub main\nprocess_events\n\nmain:\n  declare SqlQueryBC sbc!\n  declare ResultSet rs!\n  declare BBjGridExWidget grid!\n\n  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))\n  rs! = sbc!.retrieve("SELECT CDNUMBER, TITLE FROM CDINVENTORY")\n  \n  grid! = new BBjGridExWidget(wnd!, 100, 0, 0, 450, 450)\n  options! = grid!.getOptions()\n  options!.setStopEditingWhenGridLosesFocus(1)\n  options!.setEditable(1)\n  options!.setSingleClickEdit(1)\n\n  grid!.setFitToGrid()\n  grid!.setData(rs!)\n  grid!.setCallback(grid!.ON_GRID_CELL_VALUE_CHANGED(), "cellEditingChanged")\n  \n  titleColumn! = grid!.getColumn("TITLE")\n  rem The expression will cast the "newValue" to string and replace dashes with empty string\n  titleColumn!.setValueParserExpression("String(newValue).replace(/-/g, \'\')")\nreturn\n\ncellEditingChanged:\n  ev! = BBjAPI().getLastEvent()\n  ev! = ev!.getObject()\n  \n  a! = msgbox(String.format("Value changed from (%s) to (%s)", ev!.getOldValue(), ev!.getValue()))\nreturn\n\nbyebye:\nbye\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BBjGridExWidget - Value Parsers",src:n(2040).Z,width:"450",height:"481"})))}u.isMDXComponent=!0},2040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/value-parser-1f0fc41ecd2d93e51fb25001c97d1bde.gif"}}]);