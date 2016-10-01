sap.ui.jsview("Detail_Write", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Detail_Write
	*/ 
	getControllerName : function() {
		return "Detail_Write";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Detail_Write
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Write",
			//id: "detail3Id",
			content: [
			
			]
		});
	}

});