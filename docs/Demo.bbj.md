Demo.bbj
========

A SQL Database Browser with BBjGridExWidget

First of all, add a use statement
```
use ::BBjGridExWidget/BBjGridExWidget.bbj::BBjGridExWidget
```

```
use com.basiscomponents.bc.SqlQueryBC
? 'HIDE'

declare auto BBjTopLevelWindow wnd!
declare auto BBjListButton lb_db!
declare auto BBjListButton lb_tbl!
declare auto BBjToolButton btn_fit!
```

Let's always declare our Grid Widget:
```
declare BBjGridExWidget grid!
```

```
wnd! = BBjAPI().openSysGui("X0").addWindow(10,10,800,600,"BBj Grid Ex Demo")

wnd!.addStaticText(200,5,10,60,25,"Database:")

lb_db!      = wnd!.addListButton(201,65,5,160,250,"")
              wnd!.addStaticText(202,270,10,60,25,"Table:")
lb_tbl!     = wnd!.addListButton(203,310,5,160,250,"")
btn_query!  = wnd!.addButton(204,500,5,100,25,"Query")
btn_fit!    = wnd!.addToolButton(205,765,5,25,25,"[/]")

grid! = new BBjGridExWidget(wnd!,100,0,35,800,563)

lb_db!      .setCallback(BBjAPI.ON_LIST_SELECT,"loadTables")
btn_query!  .setCallback(BBjAPI.ON_BUTTON_PUSH,"doQuery")
wnd!        .setCallback(BBjAPI.ON_CLOSE,"byebye")
wnd!        .setCallback(BBjAPI.ON_RESIZE,"resize")

btn_fit!.setToggleable(1)
btn_fit!.setCallback(BBjAPI.ON_TOOL_BUTTON_PUSH,"toggleFitToGrid")

if (info(3,6)<>"5") then
    wnd!.setCallback(BBjAPI.ON_KEYPRESS,"onWinKeypress")
fi
 

gosub loadDatabases
gosub doQuery

rem disable the selection by default to avoid a backdoor if this demo is installed
rem enable to get the full db browsing functionality
rem lb_db!.setEnabled(0)


process_events

loadData:

return
   

byebye:
    bye
    
resize:
    ev! = BBjAPI().getLastEvent()
    grid!.setSize(ev!.getWidth(),ev!.getHeight()-35)
return
   
loadDatabases:
    j=0
    i=0
    x$ = sqllist(-1)
    while x$>""
        db$=x$(1,pos($0a$=x$)-1)
        x$=x$(pos($0a$=x$)+1)
        lb_db!.addItem(db$)
        if db$="ChileCompany" then
                j=i
        fi
        i=i+1
    wend
    lb_db!.selectIndex(j)
    gosub loadTables
return    

loadTables:
    lb_tbl!.removeAllItems()
    db$ = lb_db!.getSelectedItem()
    sqlopen (1)db$
    x$=sqltables(1)
    sqlclose(1)
    j=0
    i=0
    while x$>""
        tbl$=x$(1,pos($0a$=x$)-1)
        x$=x$(pos($0a$=x$)+1)
        lb_tbl!.addItem(tbl$)
        if tbl$="CUSTOMER" then
                j=i
        fi
        i=i+1
    wend    
    lb_tbl!.selectIndex(j)
return
    
doQuery:
    db$ = lb_db!.getSelectedItem()
    tbl$ = lb_tbl!.getSelectedItem()
    if (db$>"" and tbl$>"") then
    
```

note that up to BBj 17, the BBjAPI().getJDBCConnection could not be used with basiscomponents:
```    
        if rev<"REV 17.10" then
             url! = "jdbc:basis:localhost?DATABASE=ChileCompany&SSL=false"
             con! = java.sql.DriverManager.getConnection(url!, "admin", "admin123")
        else
            bc! = new SqlQueryBC(BBjAPI().getJDBCConnection(db$))
        fi
        
```

That's all we need to get a result set that works with the grid:
```                
        rs! = bc!.retrieve("SELECT * FROM "+tbl$) 
```

...and set it as data:
```                 
        grid!.setData(rs!)
```
```        
    fi
return
```

this is toggling the "fit to grid" functionality in the widget:
``` 
toggleFitToGrid:
    declare auto BBjToolButtonPushEvent toogle_ev!
    toggle_ev! = BBjAPI().getLastEvent()
    if btn_fit!.isSelected() then
        grid!.setFitToGrid(1)
    else
        grid!.setFitToGrid(0)
    fi
return

``` 

Hidden Easter Egg: get the Console in the Java FX WebView:
``` 
onWinKeypress:
    declare auto BBjKeypressEvent key_ev!
    key_ev! = BBjAPI().getLastEvent()
    if key_ev!.getKeyCode() = 342 then
       grid!.showDeveloperConsole()
    fi
return
```