"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2748],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,p=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return t?a.createElement(p,i(i({ref:n},g),{},{components:t})):a.createElement(p,i({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:3,title:"Range Selection",sidebar_class_name:"enhanced-feature",description:"Range selection allows Excel-like range selection of cells."},i=void 0,o={unversionedId:"selection/range-selection",id:"selection/range-selection",title:"Range Selection",description:"Range selection allows Excel-like range selection of cells.",source:"@site/docs/selection/range-selection.md",sourceDirName:"selection",slug:"/selection/range-selection",permalink:"/BBjGridExWidget/docs/selection/range-selection",draft:!1,editUrl:"https://github.com/BBj-Plugins/BBjGridExWidget/tree/dev/website/docs/selection/range-selection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Range Selection",sidebar_class_name:"enhanced-feature",description:"Range selection allows Excel-like range selection of cells."},sidebar:"tutorialSidebar",previous:{title:"Row Selection",permalink:"/BBjGridExWidget/docs/selection/row-selection"},next:{title:"Filtering",permalink:"/BBjGridExWidget/docs/category/filtering"}},s={},d=[{value:"Selecting Ranges",id:"selecting-ranges",level:2},{value:"Range Deselection",id:"range-deselection",level:2},{value:"Suppress Multi Range Selection",id:"suppress-multi-range-selection",level:2},{value:"Range Selection Changed Event",id:"range-selection-changed-event",level:2},{value:"Range Selection API",id:"range-selection-api",level:2},{value:"Example: Advanced Range Selection",id:"example-advanced-range-selection",level:2}],g={toc:d};function c(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-Enhanced-038279",alt:"BBjGridExWidget - Enhanced Version"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/BBj-SAM%20required-orange",alt:"BBjGridExWidget - SAM Required"})),(0,r.kt)("p",null,"Range selection allows Excel-like range selection of cells. Range selections are useful for visually highlighting data, copying data to the Clipboard, or for doing aggregations using the Status Bar."),(0,r.kt)("h2",{id:"selecting-ranges"},"Selecting Ranges"),(0,r.kt)("p",null,"Range Selection is enabled using the following grid option ",(0,r.kt)("inlineCode",{parentName:"p"},"EnableRangeSelection=true"),". When enabled, ranges can be selected in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mouse Drag"),": Click the mouse down on a cell and drag and release the mouse over another cell. A range will be created between the two cells and clear any existing ranges."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl & Mouse Drag"),": Holding ",(0,r.kt)("kbd",null,"Ctrl")," key while creating a range using mouse drag outside an existing range will create a new range selection and keep any existing ranges."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift & Click"),": Clicking on one cell to focus that cell, then holding down ",(0,r.kt)("kbd",null,"Shift")," while clicking another cell, will create a range between both cells."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift & Arrow Keys"),": Focusing a cell and then holding down ",(0,r.kt)("kbd",null,"Shift")," and using the arrow keys will create a range starting from the focused cell."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl & Shift & Arrow Keys"),": Focusing a cell and then holding down ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"Shift")," and using the arrow keys will create a range starting from the focused cell to the last cell in the direction of the Arrow pressed.")),(0,r.kt)("h2",{id:"range-deselection"},"Range Deselection"),(0,r.kt)("p",null,"It is possible to deselect part of existing ranges in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl & Mouse Drag"),": Holding ",(0,r.kt)("kbd",null,"Ctrl")," and dragging a range starting within an existing range will cause any cells covered by the new range to be deselected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl & Click"),": Holding ",(0,r.kt)("kbd",null,"Ctrl")," and clicking a cell will deselect just that cell.")),(0,r.kt)("p",null,"Note that deselecting part of a range can split the range into multiple ranges, since individual ranges have the limitation of being rectangular."),(0,r.kt)("p",null,"The example below demonstrates simple range selection. Ranges can be selected in all the ways described above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bbj",metastring:"showLineNumbers",showLineNumbers:!0},'use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget\nuse ::BBjGridExWidget/GxClientModels.bbj::GxClientRowModel\nuse com.basiscomponents.db.ResultSet\nuse com.basiscomponents.bc.SqlQueryBC\n\ndeclare auto BBjTopLevelWindow wnd!\n\nwnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Checkbox Selection")\nwnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")\n\ngosub main\nprocess_events\n\nmain:\n  declare SqlQueryBC sbc!\n  declare ResultSet rs!\n  declare BBjGridExWidget grid!\n\n  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))\n  rs! = sbc!.retrieve("SELECT * FROM CDINVENTORY")\n\n  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)\n  grid!.getOptions().setEnableRangeSelection(1)\n  grid!.getOptions().setSuppressRowClickSelection(1)\n\n  grid!.setData(rs!)\nreturn\n\nbyebye:\nbye\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BBjGridExWidget - Range Selection Basic",src:t(9778).Z,width:"802",height:"632"})),(0,r.kt)("h2",{id:"suppress-multi-range-selection"},"Suppress Multi Range Selection"),(0,r.kt)("p",null,"By default multiple ranges can be selected. To restrict range selection to a single range, even if the ",(0,r.kt)("kbd",null,"Ctrl")," key is held down, enable the following grid options: ",(0,r.kt)("inlineCode",{parentName:"p"},"SuppressMultiRangeSelection=true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bbj"},"grid!.getOptions().setSuppressMultiRangeSelection(1)\n")),(0,r.kt)("h2",{id:"range-selection-changed-event"},"Range Selection Changed Event"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BBjGridExWidget::ON_GRID_RANGE_SELECTION_CHANGED")," is fired when a the grid's range selection is changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bbj"},'grid!.setCallback(grid!.ON_GRID_RANGE_SELECTION_CHANGED(), "handleChanged")\n')),(0,r.kt)("h2",{id:"range-selection-api"},"Range Selection API"),(0,r.kt)("p",null,"The following methods are available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"BBjGridExWidget")," class for managing range selection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Method")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#getRangeSelections"},"getRangeSelections()")),(0,r.kt)("td",{parentName:"tr",align:null},"This will return back a BBjVector of ",(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientModels/GxClientRangeSelectionModel.html"},(0,r.kt)("inlineCode",{parentName:"a"},"GxClientRangeSelectionModel"))," objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/GxClientModels/GxClientAddRangeSelectionModel.html"},"addRangeSelection(GxClientAddRangeSelectionModel model!)")),(0,r.kt)("td",{parentName:"tr",align:null},"Add new range selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#addRangeSelection"},"addRangeSelection(BBjString columns! , BBjNumber start! , BBjNumber end!)")),(0,r.kt)("td",{parentName:"tr",align:null},"Add new range selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bbj-plugins.github.io/BBjGridExWidget/javadoc/BBjGridExWidget/BBjGridExWidget.html#clearRangeSelection"},"clearRangeSelection()")),(0,r.kt)("td",{parentName:"tr",align:null},"Clears the selected range.")))),(0,r.kt)("h2",{id:"example-advanced-range-selection"},"Example: Advanced Range Selection"),(0,r.kt)("p",null,"The example below demonstrates a more complex range selection scenario. The example listens for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON_GRID_RANGE_SELECTION_CHANGED")," and\nre-create the BBjGridExWidget statusbar in BBj."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bbj",metastring:"showLineNumbers",showLineNumbers:!0},'use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget\nuse ::BBjGridExWidget/GxStatusBar.bbj::GxStatusBarAggregationComponent\nuse ::BBjGridExWidget/GxClientModels.bbj::GxClientRangeSelectionModel\nuse ::BBjGridExWidget/GxClientModels.bbj::GxClientColumnModel\nuse ::BBjGridExWidget/GxClientModels.bbj::GxClientAddRangeSelectionModel\nuse com.basiscomponents.db.ResultSet\nuse com.basiscomponents.bc.SqlQueryBC\nuse java.sql.Types\nuse java.util.ArrayList\nuse java.util.Collections\nuse java.util.Random\n\ndeclare auto BBjTopLevelWindow wnd!\n\nwnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Range Selection Demo")\nwnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")\nwnd!.setCallback(BBjAPI.ON_RESIZE,"resize")\n\naggTemplate! = "Average : %s - Count : %s - Min : %s - Max : %s - Sum : %s"\n\nstatusbar! = wnd!.addStatusBar(98,$8000$)\nvector! = bbjapi().makeVector()\nvector!.add(150)\nvector!.add(65535)\nstatusbar!.setSegments(vector!)\nstatusbar!.setTextAt(0, "Aggregation done with BBj")\nstatusbar!.setAlignmentAt(0,statusbar!.LEFT)\nstatusbar!.setTextAt(1, String.format(aggTemplate!,0,0,0,0,0))\nstatusbar!.setAlignmentAt(1,statusbar!.LEFT)\n\nonRandomRange! = wnd!.addButton(99,10,10,150,25,"Add Random Range")\nonRandomRange!.setCallback(BBjAPI.ON_BUTTON_PUSH,"onRandomRange")\n\nclearRange! = wnd!.addButton(100,180,10,150,25,"Clear Ranges")\nclearRange!.setCallback(BBjAPI.ON_BUTTON_PUSH,"onClearRange")\n\ngosub main\nprocess_events\n\nrem /**\nrem  * Retrieve the data from the database and configure the grid\nrem  */\nmain:\n  declare BBjGridExWidget grid!\n  declare SqlQueryBC sbc!\n  declare ResultSet rs!\n\n  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))\n  rs! = sbc!.retrieve("SELECT TITLE , COST , RETAIL , ONHAND FROM CDINVENTORY")\n\n  grid! = new BBjGridExWidget(wnd!,101, 0 , 50 , 800 , 530)\n\n  REM   Set to true to enable Range Selection\n  grid!.getOptions().setEnableRangeSelection(1)\n\n  REM   Allow users to move between cells using arrow keys instead of rows\n  grid!.getOptions().setNavigationBehavior(grid!.GRID_NAVIGATION_BEHAVIOUR_NEXT_CELL())\n\n  REM   Disable row selection on row click\n  grid!.getOptions().setSuppressRowClickSelection(1)\n\n  REM  Attach the aggregation component to the grid\'s built-in statusbar.\n  REM  The component provides aggregations on the selected range.\n  grid!.getStatusbar().addComponent(new GxStatusBarAggregationComponent("right"))\n\n  REM  Here we add a range selection to the grid by defining the columns which are included\n  REM  in the range and the start and end row\'s index/id\n  grid!.addRangeSelection("COST,RETAIL" , 2, 6)\n\n  REM listen to the grid range selection event so we can build our own statusbar in BBj\n  grid!.setCallback(grid!.ON_GRID_RANGE_SELECTION_CHANGED(),"onRangeSelectionChange")\n\n  grid!.setFitToGrid()\n  grid!.getSidebar().setHiddenByDefault(1)\n\n  grid!.setData(rs!)\n\n  REM  align columns of type number to the right to get better presentation\n  grid!.getColumn("COST").setAlignment(BBjGridExWidget.GRID_ALIGN_RIGHT() , 1)\n  grid!.getColumn("RETAIL").setAlignment(BBjGridExWidget.GRID_ALIGN_RIGHT() , 1)\n  grid!.getColumn("ONHAND").setAlignment(BBjGridExWidget.GRID_ALIGN_RIGHT() , 1)\nreturn\n\nonRangeSelectionChange:\n  declare auto GxClientRangeSelectionModel currentRange!\n  declare auto GxClientColumnModel column!\n\n  REM vector of ranges\n  ranges! = grid!.getRangeSelections()\n\n  IF (ranges!.size() = 0) THEN\n      statusbar!.setTextAt(1, String.format(aggTemplate!,0,0,0,0,0))\n      return\n  FI\n\n  rangesLength! = ranges!.size() - 1\n  sum!          = 0\n  count!        = 0\n  min!          = 0\n  max!          = 0\n  average!      = 0\n  values!       = new ArrayList()\n\n  rem we start by looping over all ranges\n  FOR rangeIndex! = 0 TO rangesLength!\n\n      currentRange!   = ranges!.get(rangeIndex!)\n\n      rows!           = currentRange!.getRows()\n      rowsLength!     = rows!.size() - 1\n\n      columns!        = currentRange!.getColumns()\n      columnsLength!  = columns!.size() - 1\n\n      count!          = count! + (columns!.size() * rows!.size())\n\n      FOR rowIndex! = 0 TO rowsLength!\n          FOR columnsIndex! = 0 TO columnsLength!\n\n              column! = columns!.get(columnsIndex!)\n              type!   = column!.getType()\n\n              SWITCH (type!)\n                  CASE Types.BIGINT\n                  CASE Types.BIT\n                  CASE Types.DECIMAL\n                  CASE Types.DOUBLE\n                  CASE Types.FLOAT\n                  CASE Types.INTEGER\n                  CASE Types.NUMERIC\n                  CASE Types.NUMERIC\n                  CASE Types.TINYINT\n                      row!   = rows!.get(rowIndex!).asDataRow()\n                      value! = num(row!.getField(column!.getName()).getValue())\n                      sum!   = sum! + value!\n\n                      values!.add(value!)\n                      BREAK\n                  CASE DEFAULT\n                      BREAK\n              SWEND\n\n          NEXT columnsIndex!\n      NEXT rowIndex!\n\n  NEXT rangeIndex!\n\n  IF (values!.size() > 0) THEN\n      min!      = Collections.min(values!)\n      max!      = Collections.max(values!)\n      average!  = sum! / values!.size()\n  FI\n\n  statusbar!.setTextAt(1, String.format(aggTemplate!, round(average!), count!, round(min!), round(max!), round(sum!)))\nreturn\n\nrem /**\nrem  * Add a random add range model\nrem  */\nonRandomRange:\n    declare GxClientAddRangeSelectionModel addModel!\n\n    REM  list of columns which can be included in the range\n    columns! = new ArrayList()\n    columns!.add("COST")\n    columns!.add("RETAIL")\n    columns!.add("ONHAND")\n\n    REM number of columns include with the random generated range\n    numberOfColumns! = rnd(3)\n\n    rand! = new Random()\n    rangeColumns! = new ArrayList()\n\n    FOR index = 0 TO numberOfColumns!\n     randomIndex! = rand!.nextInt(columns!.size())\n     rangeColumns!.add(columns!.get(randomIndex!))\n     columns!.remove(randomIndex!)\n    NEXT index\n\n    addModel! =  new GxClientAddRangeSelectionModel()\n    addModel!.setColumns(rangeColumns!)\n    addModel!.setStart(str(rnd(10)))\n    addModel!.setEnd(str(rnd(10)))\n\n    grid!.clearRangeSelection()\n    grid!.addRangeSelection(addModel!)\nreturn\n\nrem /**\nrem  * We clear all range selections\nrem  */\nonClearRange:\n    grid!.clearRangeSelection()\nreturn\n\nresize:\n  ev! = BBjAPI().getLastEvent()\n  w=ev!.getWidth()\n  h=ev!.getHeight()\n  grid!.setSize(w,h - 50)\nreturn\n\nbyebye:\nbye\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BBjGridExWidget - Range Selection API",src:t(78).Z,width:"802",height:"636"})))}c.isMDXComponent=!0},78:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/range-selection-api-64cffd4c333e336f6b9a20f52bee4f05.png"},9778:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/range-selection-basic-9a010e944ad83b5e72579c7c9961a646.png"}}]);