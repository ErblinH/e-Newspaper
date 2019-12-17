var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;

    captionText=document.querySelector(".captionHolder .captionText");
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

<<<<<<< HEAD
    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    dots = [];
    var dotsContainer=document.getElementById("dotsContainer");

    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
=======
    dots = [];
    var dotsContainer=document.getElementById("dotsContainer");

    for(var i =0; i<slides.length; i++){
    	var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
>>>>>>> 37fb209855f93e3523de2a207008306b419aa95c
    }

     dots[slideIndex].classList.add("active");
}

initGallery();
<<<<<<< HEAD

function plusSlides(n){
    moveSlide(slideIndex+n);
}

function moveSlide(n){
    var i, current, next;
    var moveSlideAnimClass = {
        forCurrent:"",
        forNext:""
    };
var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }
    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }
}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },5000);
}
setTimer();
=======
>>>>>>> 37fb209855f93e3523de2a207008306b419aa95c
