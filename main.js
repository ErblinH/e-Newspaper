
var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("MbajtesiImazheve");
    slides[slideIndex].style.opacity=1;

    captionText=document.querySelector(".captionHolder .captionText");
    
    captionText.innerText=captionText.innerText+slides[slideIndex].querySelector(".captionText").innerText;
    captionText.className="captionText "+"slideTextFromBottom";
    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".shigjetaMajtas,.shigjetaDjathtas");
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
    }

     dots[slideIndex].classList.add("active");
}

initGallery();

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
            slides[i].className = "MbajtesiImazheve";
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
function changeBackground(){
    var time=new Date().getHours();
    if(time>=18)
    {
       var k= document.getElementsByTagName('html')[0];
       k.setAttribute('style','background-image:url("images/night.jpg")')
    }
    else{var k= document.getElementsByTagName('html')[0];console.log(k)
    k.setAttribute('style','background-image:url("#")')}
}
changeBackground();