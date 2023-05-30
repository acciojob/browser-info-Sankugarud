//your JS code here. If required.
let div = document.getElementById("browser-info");

let browserName = navigator.appVersion;
let version = navigator.appName;
// let version = " OPR/95.0.0.0";
// let print = alert("You are using " + browserName)
div.innerHTML = `You are using ${version} ${browserName}`