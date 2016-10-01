sap.ui.controller("pages.Master_Sidebar", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pages.Master_Sidebar
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pages.Master_Sidebar
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pages.Master_Sidebar
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pages.Master_Sidebar
*/
//	onExit: function() {
//
//	}
	
	onMasterItemPress: function(oEvent)
	{
		//alert("click");
		var detailId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
		//alert(detailId);
		sap.ui.getCore().byId("splitAppId").toDetail(detailId);//this.createId(detailId));
	}


});