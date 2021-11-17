var circleX, circlyY;
var lastDate;
const INTERVAL = 12000;

function animate() {


    updateDateTime();

    let canvas = document.getElementById("circle"),
        context = canvas.getContext("2d");

    circleX = 200;
    circlyY = 200;

    var playAnimation = true;

    context.clearRect(0, 0, 400, 400);

    var d = new Date();

    var milli = d.getMilliseconds();
    var sec = d.getSeconds();
    var min = d.getMinutes();
    var hour = d.getHours();


    var circumferenceMilli = (2 * Math.PI) * (milli / 1000);
    var circumferenceSec = (2 * Math.PI) * (sec / 60);
    var circumferenceMin = (2 * Math.PI) * (min / 60);
    var circumferenceHour = (2 * Math.PI) * (hour / 24);


    // adjust angle by 90 degrees so hands point at correct angle
    circumferenceSec = circumferenceSec + 1.5 * Math.PI;
    circumferenceMin = circumferenceMin + 1.5 * Math.PI;
    circumferenceHour = circumferenceHour + 1.5 * Math.PI;
    circumferenceMilli = circumferenceMilli + 1.5 * Math.PI;


    context.beginPath();
    context.arc(circleX , circlyY, 186, 1.5 * Math.PI, circumferenceMilli, false);
    context.strokeStyle = "grey";
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.arc(circleX, circlyY, 155, 1.5 * Math.PI, circumferenceSec, false);
    context.strokeStyle = "#fff200";
    context.lineWidth = 50;
    context.stroke();

    context.beginPath();
    context.arc(circleX, circlyY, 100, 1.5 * Math.PI, circumferenceMin, false);
    context.strokeStyle = "#ffd64d";
    context.lineWidth = 50;
    context.stroke();

    context.beginPath();
    context.arc(circleX, circlyY, 45, 1.5 * Math.PI, circumferenceHour, false);
    context.strokeStyle = "#e29537";
    context.lineWidth = 50;
    context.stroke();


}


animate();
setInterval(animate, 2000);


function updateDateTime() {
    document.getElementById("date").innerText = getCurrentDate();

}

function getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = addLeadingZeros(date.getMonth()+1, 2);
    let day = addLeadingZeros(date.getDate(), 2);
    return day+"."+month+"."+year;
}

function addLeadingZeros(n, outputLength) {
    let res = ''+n;
    while (res.length < outputLength) res = "0"+res;
    return res;
}