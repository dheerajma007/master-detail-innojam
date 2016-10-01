/**
 * @author Jon Jouret
 */

jQuery.sap.declare("controls.RoundedTile");
jQuery.sap.includeStyleSheet("controls/roundedTile.css");
jQuery.sap.require("sap.m.StandardTile");

sap.m.StandardTile.extend("controls.RoundedTile", {
	metadata : {
		properties : {
			// Icon color property with default value to standard UI5 blue
			iconColor : {
				type : "string",
				defaultValue : "#007cc0"
			},
			// Background color property with default value to white
			bgColor : {
				type : "string",
				defaultValue : "rgb(255, 255, 255)"
			},
			// Border color property with default value to standard UI5 blue
			borderColor : {
				type : "string",
				defaultValue : "#007cc0"
			}
		}
	}
});
