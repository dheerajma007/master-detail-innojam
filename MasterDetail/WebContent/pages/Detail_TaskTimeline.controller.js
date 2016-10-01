sap.ui.controller("pages.Detail_TaskTimeline", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pages.Detail_TaskTimeline
*/
	onInit: function() {
		var timelineData = {
				"TimelineItems" : [
				                   {
				                	   "dateTime" : "Date(1407049200000)",
				                	   "text" : "First Task",
				                	   "userName" : "Sathish",
				                	   "title" : "Some Titile",
				                	   "icon" : "sap-icon://notes"
				                   },
				                   {
				                	   "dateTime" : "Date(1407049200000)",
				                	   "text" : "Second Task",
				                	   "userName" : "Sumant",
				                	   "title" : "Some Titile 2",
				                	   "icon" : "sap-icon://notes"
				                   }]
		};
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(timelineData);
		//console.log(sap.ui.getCore().getElementById(this.createId("idTaskTimeline")));
		sap.ui.getCore().getElementById(this.createId("idTaskTimeline")).setModel(oModel);
		//this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pages.Detail_TaskTimeline
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pages.Detail_TaskTimeline
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pages.Detail_TaskTimeline
*/
//	onExit: function() {
//
//	}

});