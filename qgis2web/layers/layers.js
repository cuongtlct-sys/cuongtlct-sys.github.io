ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11335691.132629, 2259703.420458, 11903997.684307, 2551856.840664]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Export_SonLa_1 = new ol.format.GeoJSON();
var features_Export_SonLa_1 = format_Export_SonLa_1.readFeatures(json_Export_SonLa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_SonLa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_SonLa_1.addFeatures(features_Export_SonLa_1);
var lyr_Export_SonLa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_SonLa_1, 
                style: style_Export_SonLa_1,
                popuplayertitle: 'Export_SonLa',
                interactive: true,
                title: '<img src="styles/legend/Export_SonLa_1.png" /> Export_SonLa'
            });
var lyr_S2B_MSIL2A_20251126_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'S2B_MSIL2A_20251126<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/S2B_MSIL2A_20251126_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11488588.534783, 2340505.936666, 11691768.934016, 2515285.642831]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_Export_SonLa_1.setVisible(true);lyr_S2B_MSIL2A_20251126_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Export_SonLa_1,lyr_S2B_MSIL2A_20251126_2];
lyr_Export_SonLa_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Export_SonLa_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Export_SonLa_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Export_SonLa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});