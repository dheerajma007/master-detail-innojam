jQuery.sap.require("controls.RoundedTile");
sap.ui.jsview("pages.Detail_People", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf pages.Detail_People
	*/ 
	getControllerName : function() {
		return "pages.Detail_People";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf pages.Detail_People
	*/ 
	createContent : function(oController) {
		//console.log
 		var page = new sap.m.Page({
			title: "Title",
			enableScrolling: false,
			content: [
			
			]
		});
 		
 		var tile = new controls.RoundedTile({
 			icon: "sap-icon://{icon}",
 			iconColor: "{iconColor}",
 			bgColor: "{bgColor}",
 			title: "{title}",
 			borderColor: "{borderColor}"
 		});
 		var oContainer = new sap.m.TileContainer("idPeopleTileContainer", {
 			tiles: {
 				path: "/PeopleTiles",
 				template: tile
 		 		
 			}
 		});
 		page.addContent(oContainer);
 		return page;
	}

});