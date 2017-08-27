var vNext = document.getElementById("Next");
var vImage = document.getElementById("image");
var vPrev = document.getElementById("Prev");

var vImages = ["karma.jpg","mamut.jpg","squirel.jpg","tripa.jpg"];

vImageIdx = 0;

vPrev.onclick = function(){
    // set image to highest index when moving past 0
    if(vImageIdx == 0){
      vImageIdx = vImages.length - 1;
    }
    else{
      vImageIdx--;
    }
    vImage.setAttribute("src", vImages[vImageIdx]);
  }

  vNext.onclick = function(){
    // set image index to 0 when moving past max index
    if(vImageIdx == vImages.length - 1){
      vImageIdx = 0;
    }
    else{
      vImageIdx++;
    }
    vImage.setAttribute("src", vImages[vImageIdx]);
  }