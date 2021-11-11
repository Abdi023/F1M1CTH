function changeMe() {
    let hidme= document.getElementById("hidme");
    hidme.style.backgroundColor="red";
}



function changeus() {
    let enons=document.getElementsByClassName("enons");// komen meer dan 1 uit
    for(var i = 0; i <enons.length;i++) {
        enons[i].style.backgroundColor="green";
    }
}

function changeus1() {
    let enons1=document.getElementsByClassName("enons1");// komen meer dan 1 uit
    for(var i = 0; i <enons1.length;i++) {
        enons1[i].style.backgroundColor="blue";
    }
}