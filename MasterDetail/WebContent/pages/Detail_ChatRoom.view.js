sap.ui.jsview("pages.Detail_ChatRoom", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf pages.Detail_ChatRoom
	*/ 
	getControllerName : function() {
		return "pages.Detail_ChatRoom";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf pages.Detail_ChatRoom
	*/ 
	createContent : function(oController) {
 		var page = new sap.m.Page({
			title: "Chat Room",
			enableScrolling: false,
			content: [
			
			]
		});
 		var tile = new sap.m.StandardTile({
 			icon: "sap-icon://{icon}",
 			number: "{number}",
 			title: "{title}",
 			info: "{info}",
 			press: function(oEvent)
 			{
 				console.log(oEvent.getSource().getTitle());
 				var nextPage = sap.ui.getCore().getElementById("idChatWindow");//sap.ui.view({id:"idCreateTask", viewName:"pages.Detail_CreateTask", type:sap.ui.core.mvc.ViewType.XML});
 				//nextPage.byId("idDate").setDateValue(selectedDate);
 				sap.ui.getCore().getElementById("splitAppId").toDetail(nextPage);
 			}
 		});
 		
 		
 		var oContainer = new sap.m.TileContainer("idTileContainer", {
 			tiles: {
 				path: "/ChatRoomTiles",
 				template: tile
 		 		
 			}
 		});
 		
 		/*var tile = new sap.m.StandardTile({
 			icon: "sap-icon://lab",
 			number: "3",
 			title: "Some title",
 			info: "Info",
 				press: function()
 				{
 					console.log('Pressedddd');
 				}
 		});
 		var oContainer = new sap.m.TileContainer({
 			
 		});
 		oContainer.addTile(tile);*/
 		page.addContent(oContainer);
 		return page;
	}

});