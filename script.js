//your JS code here. If required.
let div = document.getElementById("browser-info");

let browserName = navigator.appVersion;
let version = navigator.appName;

div.innerHTML = `You are using ${version} ${browserName}`
document.body.append(div);