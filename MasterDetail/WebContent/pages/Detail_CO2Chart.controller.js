sap.ui.controller("pages.Detail_CO2Chart", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pages.Detail_CO2Chart
*/
	onInit: function() {
		var oVizFrame = this.getView().byId("idcolumn");
		
      
		var oModel = new sap.ui.model.json.JSONModel();
		var data = {
				'Population' : [
					            {"Year": "2010","Value": "158626687"},
					            {"Year": "2011","Value": "531160986"},
					            {"Year": "2012","Value": "915105168"},
					            {"Year": "2013","Value": "1093786762"},
					            {"Year": "2014","Value": "1274018495"},
					           ]};
		/*
				'CO2Analysis' : [
		            {"Country": "India","Value": "50"},
		            {"Country": "USA","Value": "60"},
		            {"Country": "UK","Value": "30"},
		            {"Country": "Russia","Value": "20"},
		            {"Country": "Australia","Value": "60"},
		            {"Country": "Africa","Value": "60"},
		            {"Country": "China","Value": "30"},
		            {"Country": "Japan","Value": "50"},
		           ]};*/
		oModel.setData(data);
		
		//var OData = new sap.ui.model.odata.ODataModel("proxy/https/team19a54129c7e.hana.ondemand.com/team_19/team_19.xsodata/CO?$format=json",true ,"team19_2","Qazwsx@123");
		//var OData = new sap.ui.model.json.JSONModel("proxy/https/team19a54129c7e.hana.ondemand.com/team_19/team_19.xsodata/CO?$format=json",true ,"team19_2","Qazwsx@123");
		////OData = new sap.ui.model.json.JSONModel(OData);
		//console.log(OData);
		//console.log(OData);
		

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [{
				name : 'Year',
				value : "{Year}"}],
			               
			measures : [{
				name : 'Population',
				value : '{Value}'} ],
			             
			data : {
				path : "/Population"
			/*dimensions : [{
				name : 'Country',
				value : "{Country}"}],
			               
			measures : [{
				name : 'CO2 Level',
				value : '{Value}'} ],
			             
			data : {
				path : "/CO2Analysis"*/
			}
		});		
		oVizFrame.setDataset(oDataset);
		oVizFrame.setModel(oModel);
		//oVizFrame.setModel(OData);
		oVizFrame.setVizType('column');
		
		
//      4.Set Viz properties
		oVizFrame.setVizProperties({
            plotArea: {
            	colorPalette : d3.scale.category20().range()
                }});
		
		var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "valueAxis",
		      'type': "Measure",
		      'values': ["Population"]
		    }), 
		    feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "categoryAxis",
		      'type': "Dimension",
		      'values': ["Year"]
		    });
		oVizFrame.addFeed(feedValueAxis);
		oVizFrame.addFeed(feedCategoryAxis);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pages.Detail_CO2Chart
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pages.Detail_CO2Chart
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pages.Detail_CO2Chart
*/
//	onExit: function() {
//
//	}

});