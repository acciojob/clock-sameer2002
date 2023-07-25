//your JS code here. If required.
function showTime() {
	let timer = document.getElementById('timer');
const currentTime = new Date();
const date = currentTime.getDate();
const month = currentTime.getMonth()+1;
const year = currentTime.getFullYear();
let hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
let dayLevel = "AM"
if(hours>12){
	hours-=12;
	dayLevel = "PM"
}	
 let text = `${month}/${date}/${year}, ${hours}:${minutes}:${seconds} ${dayLevel}`;
timer.innerText = text;
}
setInterval(showTime,1000);