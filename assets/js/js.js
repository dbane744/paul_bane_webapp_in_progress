// Leaflet
if($('body').is('.Visit-Us-Page')){
    streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGFuaWVsYmFuZSIsImEiOiJjam5zMnFvMXAwZGlwM3JwajdhODBrOG91In0.XN9QaS0Wwb5XLHRY67Axwg'
    })

    satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiZGFuaWVsYmFuZSIsImEiOiJjam5zMnFvMXAwZGlwM3JwajdhODBrOG91In0.XN9QaS0Wwb5XLHRY67Axwg'
    })

    var map = L.map('mapid', { layers: [satellite, streets] }).setView([53.959077, -1.081444], 15);
 
    var baseMaps = {
        "Satellite": satellite,
        "Streets": streets
    };

    L.control.layers(baseMaps).addTo(map);

    var marker = L.marker([53.959077, -1.081444]).addTo(map);
    marker.bindPopup("<b>York market stall</b><br>Find Paul here!").openPopup();
}

// BaguetteBox
$(function () {
    if($('body').is('.Gallery-Page')){
    baguetteBox.run('.testgallery', {
        captions: false,
        animation: 'fadeIn'
    });
}
});



