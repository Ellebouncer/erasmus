

function menuIconClick() {
    changeVisibility("mainTitle", "block");
    changeVisibility("mam", "grid");
    //changeVisibility("menuimageleft", "block");
    //changeVisibility("menuimageright", "block");
    changeVisibility("toppbackgroundaddonbelow", "block");
    changeIcon();
    changeMenuBackground();
}

function changeVisibility(ElemID, dispType) {
    let elem = document.getElementById(ElemID);
    let elemStyle = window.getComputedStyle(elem);

    if (elemStyle.getPropertyValue('display') == dispType) {
        elem.style.display = "none";
    }
    else {
        elem.style.display = dispType;
    }
}

function changeIcon() {
    let elem = document.getElementById("menuicon");
    var elemSrc = elem.src;

    if (elemSrc.indexOf('menuicon.png') >= 0) {
        elem.src = "./menucloseicon.png";
        document.body.style.overflowY = "hidden";
    }
    else {
        elem.src = "./menuicon.png";
        document.body.style.overflowY = "auto";
    }
}

function changeMenuBackground() {
    let elem = document.getElementById("menu");
    let elemStyle = window.getComputedStyle(elem);
    let micopic = document.getElementById("menuicon").src;
    let viewportwidth = document.documentElement.clientWidth;

    var noColour = "rgba(0, 0, 0, 0)";
    var transparentGrey = "#4848484a";


    if (viewportwidth > 1000) {
        if (micopic.indexOf('menucloseicon.png') >= 0) {
            elem.style.background = transparentGrey;
        }
        else {
            elem.style.background = noColour;
        }
    }
    else {
        elem.style.background = "#7fa75a";
    }
}





































window.onload = function(){
    var ELASCLICKED = 0;
    document.querySelector(".footerh3").onclick = function() {ELASCLICK()};

    function ELASCLICK() {
        let ELAS = document.querySelector(".footerh3");
        let ELASAS = document.querySelector(".footerh2");
        ELASCLICKED += 1;
        if (ELASCLICKED == 20) {
            ELAS.textContent = "David Esberg";
            ELASAS.textContent = "Shoutout to:";
        }
        if (ELASCLICKED == 25) {
            ELAS.textContent = "Elias Eriksson";
            ELASAS.textContent = "Created by:";
        }
        if (ELASCLICKED == 100) {
            ELAS.textContent = "Ellebouncer#0591";
            ELASAS.textContent = "Created by:";
        }
    }
};