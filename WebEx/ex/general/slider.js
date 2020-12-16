var imgs = document.querySelectorAll(".slider .imgs img");
var next = document.querySelector(".slider .buttons .nextbtn");
var prev = document.querySelector(".slider .buttons .prevbtn");
var current_slide = 0;

function sum(a, b) { return a + b; }

next.addEventListener("click", function() {    
    imgs[current_slide].style.opacity = 0;    
    if (current_slide == imgs.length - 1) {        
        current_slide = 0    
    } else {        
        current_slide++;    
    }    
    imgs[current_slide].style.opacity = 1;
});

prev.addEventListener("click", function() {    
    imgs[current_slide].style.opacity = 0;    
    if (current_slide == 0) {         current_slide = imgs.length - 1     } else {         current_slide--;     }    
    imgs[current_slide].style.opacity = 1;
});