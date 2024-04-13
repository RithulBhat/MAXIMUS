$(document).ready(function() {
    $('a').click(function(event) {
      event.preventDefault();
      $(this).hide("slow");
    });
  });

// Define the moveMap function to move the Google Map Embedded to the area specified by the zip code
function moveMap() {
    // Retrieve the zip code entered by the user from the input field
    var zipCode = document.getElementById("zipCode").value;
    
    // Construct the URL for the Google Map Embedded with the new location based on the zip code
    var mapURL = "https://maps.google.com/maps?q=" + zipCode + "&output=embed";
    
    // Update the iframe src attribute to load the new map with the specified location
    document.getElementById("mapFrame").src = mapURL;
}
