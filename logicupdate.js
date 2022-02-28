// Creating the map object
const myMap = L.map("map", {
    center: [43.804, -120.554],
    zoom: 7
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
const link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

// Getting our GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data), {
        style: (feature) 
    }.addTo(myMap);

});
