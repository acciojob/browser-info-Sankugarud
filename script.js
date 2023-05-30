//your JS code here. If required.
let div = document.getElementById("browser-info");

let browserName = navigator.userAgent;
let version = navigator.appName;

div.innerHTML = `You are using ${browserName}`
document.body.append(div);