"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),d=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,g=m["".concat(o,".").concat(p)]||m[p]||u[p]||r;return n?l.createElement(g,i(i({ref:t},c),{},{components:n})):l.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4,title:"Styling Cells"},i=void 0,s={unversionedId:"layout-and-styling/styling-cells",id:"layout-and-styling/styling-cells",title:"Styling Cells",description:"Cell customizations is done a the column level via the column object. You can mix and match any of the following mechanisms:",source:"@site/docs/layout-and-styling/styling-cells.md",sourceDirName:"layout-and-styling",slug:"/layout-and-styling/styling-cells",permalink:"/BBjGridExWidget/docs/layout-and-styling/styling-cells",draft:!1,editUrl:"https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website/docs/layout-and-styling/styling-cells.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Styling Cells"},sidebar:"tutorialSidebar",previous:{title:"Styling Rows",permalink:"/BBjGridExWidget/docs/layout-and-styling/styling-rows"},next:{title:"Data",permalink:"/BBjGridExWidget/docs/category/data"}},o={},d=[{value:"Cell Style",id:"cell-style",level:2},{value:"Cell Class",id:"cell-class",level:2},{value:"Cell Class Rules",id:"cell-class-rules",level:2},{value:"Cells Conditional Styling",id:"cells-conditional-styling",level:3},{value:"Refresh of Styles",id:"refresh-of-styles",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cell customizations is done a the column level via the column object. You can mix and match any of the following mechanisms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cell Style"),": Providing a CSS style for the cells."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cell Class"),": Providing a CSS class for the cells."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cell Class Rules"),": Providing rules for applying CSS classes.")),(0,a.kt)("p",null,"Each of these approaches are presented in the following sections."),(0,a.kt)("h2",{id:"cell-style"},"Cell Style"),(0,a.kt)("p",null,"The cell style is nothing more than map of css values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bbj"},'use com.google.gson.JsonObject\nuse ::BBjGridExWidget/GxColumns.bbj::GxColumn\n\ngrid!.setData(rs!)\n\ndeclare GxColumn column!\ncolumn! = grid!.getColumn("CDNUMBER")\n\ndeclare JsonObject cellStyle!\ncellStyle! = column!.getCellStyle()\ncellStyle!.addProperty("color","red")\n')),(0,a.kt)("h2",{id:"cell-class"},"Cell Class"),(0,a.kt)("p",null,"Provides a class for the cells in this column. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bbj"},'use java.util.ArrayList\nuse ::BBjGridExWidget/GxColumns.bbj::GxColumn\n\ngrid!.setData(rs!)\n\ndeclare GxColumn column!\ncolumn! = grid!.getColumn("CDNUMBER")\n\ndeclare ArrayList cellClass!\ncellClass! = column!.getCellClass()\ncellClass!.add("myCustomClassName")\n\ngrid!.addStyle(".myCustomClassName" , "{""background"": ""lightgreen !important""}")\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can add and remove style from the grid using the following two methods where the selector can be any valid css selector:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BBjGridExWidget.addStyle(BBjString selector$, BBjString rules!)"),": To add a new style"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BBjGridExWidget.removeStyle(BBjString selector$)"),": To remove a style"))),(0,a.kt)("h2",{id:"cell-class-rules"},"Cell Class Rules"),(0,a.kt)("p",null,"You can define rules which can be applied to include certain CSS classes via via column option ",(0,a.kt)("inlineCode",{parentName:"p"},"CellClassRules"),". These rules are provided as a map where the keys are the class names and the values are expressions that if evaluated to true."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"An expression is evaluated by the grid by executing the string as if it were a Javascript expression. ")),(0,a.kt)("p",null,"When working with expressions keep the following points in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the expression has the word ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," in it, then we will assume it is a multi-line expression and will not wrap it."),(0,a.kt)("li",{parentName:"ul"},"If the expression does not have the word ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," in it, then we will insert the ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," statement and the ",(0,a.kt)("inlineCode",{parentName:"li"},";")," for you."),(0,a.kt)("li",{parentName:"ul"},"If the expression has many lines, then you will need to provide the ",(0,a.kt)("inlineCode",{parentName:"li"},";")," at the end of each line and also provide the ",(0,a.kt)("inlineCode",{parentName:"li"},"return"),"\nstatement.")),(0,a.kt)("p",null,"Expressions have access to several predefined variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Variable")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"colDef"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The column definition associated with the column for this cell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"x"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mapped from cell value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"value"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Same as x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mapped from the ",(0,a.kt)("inlineCode",{parentName:"td"},"DataRow"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The grid client context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"rowIndex"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The row index")))),(0,a.kt)("p",null,"The following snippet shows ",(0,a.kt)("inlineCode",{parentName:"p"},"CellClassRules")," usage to change the background color of the cell when the value is smaller than 6."),(0,a.kt)("h3",{id:"cells-conditional-styling"},"Cells Conditional Styling"),(0,a.kt)("p",null,"The following is a sample which shows how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CellClassRules")," to do cells conditional styling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bbj",metastring:"showLineNumbers",showLineNumbers:!0},'use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget\nuse com.basiscomponents.db.ResultSet\nuse com.basiscomponents.bc.SqlQueryBC\nuse com.google.gson.JsonObject\n\ndeclare auto BBjTopLevelWindow wnd!\n\nwnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Cells Conditional Styling Demo")\nwnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")\nwnd!.setCallback(BBjAPI.ON_RESIZE,"resize")\n\ngosub main\nprocess_events\n\nmain:\n  declare SqlQueryBC sbc!\n  declare ResultSet rs!\n  declare BBjGridExWidget grid!\n\n  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))\n  rs! = sbc!.retrieve("SELECT CDNUMBER, TITLE, MUSICTYPE, PLAYINGTIME from CDINVENTORY")\n\n  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)\n  grid!.setData(rs!,"CDNUMBER")\n  grid!.setFitToGrid()\n\n  grid!.setColumnBackColor("CDNUMBER",BBjAPI().makeColor("LTGRAY"))\n  grid!.setColumnForeColor("CDNUMBER",BBjAPI().makeColor("BLUE"))\n  grid!.pinColumn("CDNUMBER","left")\n  grid!.setColumnWidth("CDNUMBER",120)\n\n  generRules! = new JsonObject()\n  generRules!.addProperty("gener-rock","x.includes(\'Rock\')")\n  grid!.getColumn("MUSICTYPE").setCellClassRules(generRules!)\n  grid!.addStyle(".gener-rock", "{""background"": ""#aaaaff""}")\n\n  timesRules! = new JsonObject()\n  timesRules!.addProperty("time-normal","x >= 10 && x <= 50")\n  timesRules!.addProperty("time-long","x >= 50 && x <= 70")\n  timesRules!.addProperty("time-tooLong","x > 70")\n\n  grid!.getColumn("PLAYINGTIME").setCellClassRules(timesRules!)\n  grid!.addStyle(".time-normal" , "{""background"": ""lightgreen""}")\n  grid!.addStyle(".time-long" , "{""background"": ""lightsalmon""}")\n  grid!.addStyle(".time-tooLong" , "{""background"": ""lightcoral""}")\nreturn\n\nresize:\n  ev! = BBjAPI().getLastEvent()\n  w=ev!.getWidth()\n  h=ev!.getHeight()\n  grid!.setSize(w,h)\nreturn\n\nbyebye:\nbye\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BBjGridExWidget - Rows Conditional Styling",src:n(8467).Z,width:"802",height:"632"})),(0,a.kt)("h2",{id:"refresh-of-styles"},"Refresh of Styles"),(0,a.kt)("p",null,"If you refresh a cell, or a cell is updated due to editing, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CellStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CellClass")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CellClassRules")," are all applied again. This has the following effect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CellStyle"),": All new styles are applied. If a new style is the same as an old style, the new style overwrites the old style. If a new style is not present, the old style is left (the grid will NOT remove styles)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CellClass"),": All new classes are applied. Old classes are not removed so be aware that classes will accumulate. If you want to remove old classes, then use CellClassRules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CellClassRules"),": Rules that return true will have the class applied the second time. Rules tha return false will have the class removed second time.")))}u.isMDXComponent=!0},8467:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/cells-conditional-styling-c682e0ecc5fa2fc92b691cb062314240.png"}}]);