var timer;

var alarm=new Audio("alarm.mp3");

// Interval of Timer
function Interval(){
    let sec=document.getElementById("sec")

    timer=setInterval(() => {
        if(sec.value>0){
            sec.value--
        }

        if(sec.value==0){
            alarm.play()
            clearInterval(timer)
        }
    }, 1000);
}

function startTimer(){
    Interval()
    document.getElementById("start").disabled=true
}

function pauseTimer(){
    clearInterval(timer)
    document.getElementById("start").disabled=false
}