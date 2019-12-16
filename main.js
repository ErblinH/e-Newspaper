var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;

    captionText=document.querySelector(".captionHolder .captionText");
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

    dots = [];
    var dotsContainer=document.getElementById("dotsContainer");

    for(var i =0; i<slides.length; i++){
    	var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
    }

     dots[slideIndex].classList.add("active");
}

initGallery();
