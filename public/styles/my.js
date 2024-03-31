const day = ["dawn","morning","noon","evening","dusk","night"]

let curTime = document.querySelector("#hour").innerHTML

if(curTime>19){
    let src = "/images/day/"+day[5]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>17){
    let src = "/images/day/"+day[4]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>=13){
    let src = "/images/day/"+day[3]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>11){
    let src = "/images/day/"+day[2]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>6){
    let src = "/images/day/"+day[1]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>4){
    let src = "/images/day/"+day[0]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}

function myFunction() {
    alert("WeatherBuddy is a realtime weather tracking app developed with the help of OpenWeather API, Link:https://openweathermap.org/appid");
  }