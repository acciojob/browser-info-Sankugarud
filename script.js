//your JS code here. If required.
let div = document.getElementById("browser-info");

let browserName = navigator.userAgent;
// let print = alert("You are using " + browserName)
div.innerHTML = "You are using " + browserName;