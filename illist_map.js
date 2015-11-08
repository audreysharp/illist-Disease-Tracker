"use-strict";
var map;

require(["esri/map", "esri/request", "dojo/domReady!"], function (Map, esriRequest) {
          
    map = new Map("map",{
        basemap: "osm",
        center: [-78.70, 35.90], // longitude, latitude
        zoom: 11
    });
    
    $.ajax({
        url: 'api.reimaginebanking.com/merchants?key=5506a588e9361eda77734ba7f553fbb9',
        success: function(results){
            //do something 
        }
    });
    
});