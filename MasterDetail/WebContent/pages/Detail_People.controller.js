sap.ui.controller("pages.Detail_People", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pages.Detail_People
*/
	onInit: function() {
		//console.log('People Detail');
		var peopleData = {
				"PeopleTiles" : [
				                   {
				                	   	"icon": "customer",
				            			"iconColor": "#333333",
				            			"bgColor": "rgb(255, 255, 255)",
				            			"title": "Sumant",
				            			"borderColor": "5px solid #dddddd", //"rgb(57, 123, 110)",
				                   },
				                   {
				                	   	"icon": "person-placeholder",
				            			"iconColor": "#333333",
				            			"bgColor": "rgb(255, 255, 255)",
				            			"title": "Sathish",
				            			"borderColor": "rgb(57, 123, 110)",
				                   },
				                   {
				                	   	"icon": "manager",
				            			"iconColor": "#333333",
				            			"bgColor": "rgb(255, 255, 255)",
				            			"title": "Partha",
				            			"borderColor": "rgb(57, 123, 110)",
				                   },
				                   {
				                	   	"icon": "manager",
				            			"iconColor": "#333333",
				            			"bgColor": "rgb(255, 255, 255)",
				            			"title": "Dheeraj",
				            			"borderColor": "rgb(57, 123, 110)",
				                   }]
		};
		var oModel1 = new sap.ui.model.json.JSONModel();
		oModel1.setData(peopleData);
		//this.getView().setModel(oModel1);
		sap.ui.getCore().getElementById("idPeopleTileContainer").setModel(oModel1);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pages.Detail_People
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pages.Detail_People
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pages.Detail_People
*/
//	onExit: function() {
//
//	}
	
	onPersonTilePress: function(){
		console.log('Pressed');
	}

});