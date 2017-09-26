/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/


class AgGridPrototype {

    /**
     * AgGridPrototype Class
     * 
     * Create basic ag-gris demo
     * 
     * @param {HTMLElement} container 
     * @param {String} license 
     * @param {Array} data 
     * @param {Object} options 
     */
    constructor(container, license, data, options) {

        this.data = data;
        this.license = license;
        this.container = container;
        this.gridOptions = options || {};
        
        if (agGrid.LisenseManager){
        	this.grid = agGrid.LicenseManager.setLicenseKey(this.license);
        }
        
        this.grid_api = "";
    }

    /** Build the grid options */
    setup() {

        var options = JSON.parse(JSON.stringify(this.gridOptions));
        
        for (var i in options.columnDefs){
    			options.columnDefs[i].cellStyle = cellRenderer;
    	}
        
        options.onSelectionChanged = function (e) {
            var r = e.api.getSelectedRows();
            var nodes = e.api.getSelectedNodes();
            var n=[];
            for (var i in nodes){
            	var node_i = nodes[i];
            	n.push(node_i.id);
            }
            sendBBjEvent({'type':'grid-select-row','rows':r,'nodes':n});
        };

        options.onRowDoubleClicked = function (e) {
        	sendBBjEvent({'type':'grid-row-doubleclick','rows':e.data,'nodes':e.rowIndex});
        }; 
        
        options.rowData = this.data;
        
        options.getDocument = function(){
        	return $doc;
        };
        
        options.getNodeChildDetails = function(rowItem) {
            if (rowItem.__node__children) {
                return {
                    group: true,

                    expanded: false,
                    // provide ag-Grid with the children of this group
                    children: rowItem.__node__children,
                    // the key is used by the default group cellRenderer
                    key: rowItem.__node__name
                };
            } else {
                return null;
            }
        };

        
        var grid = new agGrid.Grid(this.container, options);
        
    }


}


function cellRenderer(params) {
	var cdef = params.column.colDef.cellStyleDefaults || {};
	
	var meta={};
	
	if (params.data.meta)
		meta = params.data.meta[params.column.colId] || {};

	var colStyle = {}; 
	
	if (meta["FGCOLOR"]) 
		colStyle.color = meta["FGCOLOR"];
	else
		if (cdef["FGCOLOR"])
			colStyle["color"] = cdef["FGCOLOR"];
	
	if (meta["BGCOLOR"]) 
		colStyle["background-color"] = meta["BGCOLOR"];
	else
		if (cdef["BGCOLOR"])
			colStyle["background-color"] = cdef["BGCOLOR"];

	if (meta["ALIGN"]) 
		colStyle["text-align"] = meta["ALIGN"];
	else
		if (cdef["ALIGN"])
			colStyle["text-align"] = cdef["ALIGN"];
	
	if (colStyle.color || colStyle["background-color"] || colStyle["text-align"]){
		return colStyle;
	}
	else {
		return null;
    }
	

};

function setData(json, options) {

	var license = 'ag-Grid_Evaluation_License_Not_For_Production_1Devs11_October_2017__MTUwNzY3NjQwMDAwMA==c5333f4e176c2db097a653f3f412ae15';

	var container = $doc.getElementById('grid');
    
		
    container.innerHTML='';
    
    var theGrid = new AgGridPrototype(container, license, json, options);
    theGrid.setup();

    $doc.theGrid = theGrid;
    


        
}

function cellStyleFunc(params){
	console.log(params);
}
function loadData(url) {

   /*
    
    	  var xhttp = new XMLHttpRequest();
    	  
    	  xhttp.onreadystatechange=function() {
    		  
    	    if (this.readyState == 4 && this.status == 200) {
    	    	setData(JSON.parse(this.responseText));
    	      
    	    }
    	  };
    	  xhttp.open("GET", url);
    	  xhttp.send();

    return;
    */
    
    
    fetch(url)
    .then(function (response) {
        return response.json();
    },
    function(error) {
    	alert(error);
    })
    .then(function (json) {
    	setData(json);
    });
}


function sendBBjEvent(payload){
//	console.log("sending event to BBj:");
//	console.log(payload);
	var d = $doc.getElementById('eventTransporterDiv');
	var event = new Event('click');
	event.payload=payload;
	d.dispatchEvent(event);
}

function postEvent(ev){
    window.basisDispatchNativeEvent(ev);
}