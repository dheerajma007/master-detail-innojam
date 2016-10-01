sap.ui.jsview("Detail_ProjectDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Detail_ProjectDetail
	*/ 
	getControllerName : function() {
		return "Detail_ProjectDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Detail_ProjectDetail
	*/ 
	createContent : function(oController) {
 		var page = new sap.m.Page({
			title: "Project Details",
			id: "id1",
			content: [
			
			]
		});
 		var label2 = new sap.ui.commons.Label({
			text: "Last Name"
		});
 		
 		page.addContent(label2);
 		
 		return page;
	}

});