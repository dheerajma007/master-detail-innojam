sap.ui.controller("pages.Detail_ChatRoom", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pages.Detail_ChatRoom
*/
	onInit: function() {
		var chatRoomData = {
				"ChatRoomTiles" : [
				                   {
				                	   "icon" : "lab",
				                	   "number" : "3",
				                	   "title" : "Group 1",
				                	   "info" : "Discussion on temperature",
				                   },
				                   {
				                	   "icon" : "lab",
				                	   "number" : "5",
				                	   "title" : "Group 2",
				                	   "info" : "Rainfall discussion",
				                   }]
		};
		var oModel1 = new sap.ui.model.json.JSONModel();
		oModel1.setData(chatRoomData);
		//this.getView().setModel(oModel1);
		sap.ui.getCore().getElementById("idTileContainer").setModel(oModel1);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pages.Detail_ChatRoom
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pages.Detail_ChatRoom
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pages.Detail_ChatRoom
*/
//	onExit: function() {
//
//	}
	
	onChatTilePress: function(oEvent)
	{
		console.log('Pressed Tile');
	}

});