// document.querySelector("#.top-box")

const day = ["dawn","morning","noon","evening","dusk","night"]

let curTime = document.querySelector("#hour").innerHTML

if(curTime>20){
    let src = "/images/day/"+day[5]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>18){
    let src = "/images/day/"+day[4]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>14){
    let src = "/images/day/"+day[3]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>12){
    let src = "/images/day/"+day[2]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>7){
    let src = "/images/day/"+day[1]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}else if(curTime>4){
    let src = "/images/day/"+day[0]+".jpg"
    document.querySelector("#top-box").setAttribute("style",`background-image: url(${src})`)
}

