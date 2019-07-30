<% 
	var regex = (/\.(.*)$/i);
	var style = "width: 20px; height: 20px; vertical-align: middle; padding-right: 5px;";
	
	if( regex.test(params.value) ) { 
		print('<img src="__FILE_ICON" style="' + style + '" />' +  params.value)
	} else {
		print('<img src="__FOLDER_ICON" style="' + style + '" />' +  params.value)
	}  
 %>
		