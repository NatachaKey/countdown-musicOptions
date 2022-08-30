


const button = document.querySelector("#myButton");
const myAudio=document.querySelector('#myAudio');
const images =[
"https://img.icons8.com/ios-filled/100/FFFFFF/play-button-circled--v1.png",
"https://img.icons8.com/ios-filled/100/FFFFFF/pause--v1.png"
]

button.addEventListener("click", ()=>{
    

    if (audio.paused){
        document.querySelector("#myAudio").play();
        playMusic();
}
    else {
        document.querySelector("#myAudio").pause();
        stopMusic();
}
})

function playMusic(){
    document.querySelector("#myImage").src=images[1];
}

function stopMusic(){
    document.querySelector("#myImage").src=images[0];
}




function vacationCountdown(){
    const vacationDate=new Date("August 13,2023 00:00");
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