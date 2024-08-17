var btn = document.getElementById("btn-location");
var heading = document.createElement('h1');
var body = document.body;
function gotLocation(position) {
    let leti = position.coords.latitude;
    let lon = position.coords.longitude;
  heading.innerHTML=`Latitude : ${leti}  and Longitude : ${lon} `;
  body.appendChild(heading);
  
}

function failedToGet() {
  console.log("There was some issue");
}

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
  
});

