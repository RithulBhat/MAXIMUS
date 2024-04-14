
// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.

let map: google.maps.Map;

let map;

function moveMap(){
  map.setCenter(document.getElementById("city").value);
}
