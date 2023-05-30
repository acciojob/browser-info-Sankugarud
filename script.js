//your JS code here. If required.
let div = document.getElementById("browser-info");
function getBrowserInfo() {
    let userAgent = navigator.userAgent;
    let browserName = "Unknown";
    let version = "";

    // Check for different browsers and extract the name and version
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
        version = userAgent.match(/Chrome\/(\S+)/)[1];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/(\S+)/)[1];
    } // Add more browser checks here if needed

    return { browserName, version };
}
let browserInfo = getBrowserInfo();
 div.innerHTML = `You are using ${browserInfo.browserName} ${browserInfo.version}`;
	


