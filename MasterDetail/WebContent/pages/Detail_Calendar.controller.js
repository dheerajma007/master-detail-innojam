sap.ui.controller("pages.Detail_Calendar", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pages.Detail_Calendar
*/
	
	
//	onInit: function() {
//		
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pages.Detail_Calendar
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pages.Detail_Calendar
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pages.Detail_Calendar
*/
//	onExit: function() {
//
//	}
	
	onCreateTaskClick: function() {
		var selectedDate = sap.ui.getCore().getElementById(this.createId("idCalendar")).getSelectedDates()[0].getStartDate();
		//console.log(selectedDate);
		var nextPage = sap.ui.getCore().getElementById("idCreateTask");//sap.ui.view({id:"idCreateTask", viewName:"pages.Detail_CreateTask", type:sap.ui.core.mvc.ViewType.XML});
		nextPage.byId("idDate").setDateValue(selectedDate);
		sap.ui.getCore().getElementById("splitAppId").toDetail(nextPage);
		//console.log(sap.ui.getCore().getElementById("splitAppId"));
		//console.log(sap.ui.getCore().getElementById("idCreateTask"));
	}

});