const button = document.querySelector("#myButton");

button.addEventListener("click", function(){
    document.querySelector("#myAudio").play();
})

button.addEventListener("dblclick", function(){
    document.querySelector("#myAudio").pause();
})

function vacationCountdown(){
    const vacationDate=new Date("August 13,2022 00:00");
    const now= new Date();
    const diff= vacationDate-now;

const msInSecond=1000;
const msInMinute= 60*1000;
const msInHour=60*60*1000;
const msInDay=24*60*60*1000;

const displayDay= Math.floor(diff/msInDay);
document.querySelector(".days").textContent=displayDay;
console.log(displayDay)


const displayHour= Math.floor((diff%msInDay)/msInHour);
document.querySelector(".hours").textContent= displayHour;

const displayMinute= Math.floor((diff%msInHour)/msInMinute);
document.querySelector(".minutes").textContent=displayMinute;

const displaySecond= Math.floor((diff%msInMinute)/msInSecond);
document.querySelector(".seconds").textContent= displaySecond;


if(diff<=0){
    document.querySelector(".days").textContent=0;
    document.querySelector(".hours").textContent=0;
    document.querySelector(".minutes").textContent=0;
    document.querySelector(".seconds").textContent=0;
    clearInterval(timerID);
    vacationTime();
}

}


let timerID= setInterval(vacationCountdown, 1000);


function vacationTime() {
    const heading= document.querySelector("h1");
    heading.textContent="It's time! Where is my bikini?";
    heading.classList.add("headingChanged");

}