//your JS code here. If required.
let div = document.getElementById("browser-info");

 function browserinfo(){
	let browserName = navigator.userAgent;
	 div.innerHTML = `You are using ${browserName}`
}
	browserinfo();


