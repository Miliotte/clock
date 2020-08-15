console.log("teste");

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 -23
    var m = date.getMinutes(); // 0- 59
    var s = date.getSeconds(); // 0 - 59

    var time = h + ":" + m + ":" + s;
    document.getElementById("MyclockDisplay").innerText = time;
    document.getElementById("MyclockDisplay").textContent = time;
}   
console.log(showTime)

showTime ();