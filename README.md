# A Grid Widget Plugin for BBj
<p>
  <a href="http://www.basis.com/downloads">
    <img src="https://img.shields.io/badge/BBj-v20.11-blue" alt="BBj v20.11" />
  </a>
  <a href="http://www.basis.com/downloads">
    <img src="https://img.shields.io/badge/BBj-SAM%20required-orange" alt="BBj sam required" />
  </a>
  <a href="https://github.com/BBj-Plugins/BBjGridExWidget/blob/master/README.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="BBjGridExWidget is released under the MIT license." />
  </a>
  <a href="https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md#pull-requests">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
   <a href="https://open.vscode.dev/BBj-Plugins/BBjGridExWidget">
    <img src="https://open.vscode.dev/badges/open-in-vscode.svg" alt="Open in Visual Studio Code" />
  </a>
</p>

A Feature-rich grid component for BBj Based on HTML and JavaScript. It works and loads quickly in GUI and BUI
, optimized for large data sets and uses the BBjHtmlView Leveraging Chromium engine in GUI.

<img style="border-radius: 0.25em;box-shadow:0 2px 4px -1px hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px hsla(214, 50%, 22%, 0.26)" src="https://user-images.githubusercontent.com/4313420/82667299-da6e0880-9c37-11ea-8c0e-1339a8d8b2d6.png" />

<img style="border-radius: 0.25em;box-shadow:0 2px 4px -1px hsla(214, 53%, 23%, 0.16), 0 3px 12px -1px hsla(214, 50%, 22%, 0.26)" src="https://user-images.githubusercontent.com/4313420/82667633-8879b280-9c38-11ea-9217-2cbe35bff94d.png" />

## ☑️ Included Features:

- Column setup and formatting
- Change column order with Drag & Drop 
- Freeze Columns to the left or right side
- Filtering / Searching by column or globally
- Conditional styling
- Column Groups
- Save and restore layout
- Themes
- Icons and Images
- Custom cell renderers
- User interface translations, customizable
- Multi-Selection, Single Selection, Checkbox Selection
- Basic Cell Editing (Work in progress, Goal: Complete editing support
 for BBj 20)

## Enhanced Grid:
- Additional functionality 
- Incremental surcharge to SAM
- contact your BASIS Sales Rep for details

### Features:

- Slider menu:
  * toggle column visibility
  * create row groups (hierarchy view)
  * define aggregation
  * define pivot tables
- Tree Data
- Status Bar showing row counts, selection, etc.
- Custom Context Menus
- Ad-hoc Charting
- Data Export

## 🚀 How to install 

* Clone the project locally , then add BBjGridExWidget to your paths
* [Use the plugins manager](https://www.bbj-plugins.com/en/get-started)

## 💻 Example
```BBJ
? 'HIDE'

use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
use com.basiscomponents.db.ResultSet
use com.basiscomponents.bc.SqlQueryBC

declare auto BBjTopLevelWindow wnd!
wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"Simple CD-Store Demo")
wnd!.setCallback(BBjAPI.ON_CLOSE,"byebye")
wnd!.setCallback(BBjAPI.ON_RESIZE,"resize")

gosub main
process_events

main:
  declare SqlQueryBC sbc!
  declare ResultSet rs!
  declare BBjGridExWidget grid!
  
  sbc! = new SqlQueryBC(BBjAPI().getJDBCConnection("CDStore"))
  rs! = sbc!.retrieve("SELECT  * FROM CDINVENTORY")

  grid! = new BBjGridExWidget(wnd!,100,0,0,800,600)
  grid!.setData(rs!)
return

resize:
  ev! = BBjAPI().getLastEvent()
  w=ev!.getWidth()
  h=ev!.getHeight()
  grid!.setSize(w,h)
return

byebye:
bye
```
## 🤝 How to Contribute

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the BBjGridExWidget project! 💪💜

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## 📝 License

Licensed under the [MIT License](https://github.com/BBj-Plugins/BBjGridExWidget/blob/master/LICENSE).

## 🔗 Documentation:

* [Pages](https://bbj-plugins.github.io/BBjGridExWidget/)
* [JavaDoc](https://bbj-plugins.github.io/BBjGridExWidget/javadoc)
