window.onscroll = function(){myFunction()};

var header = document.getElementById("stickyHeader");
var currencyIcon = document.getElementsByClassName("currencyIcon");
var heading = document.getElementsByClassName("secHeading");
var sticky = header.offsetTop;
    sticky = sticky - 50;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    addClass("fas","currencyIcon", "smCurrencyIcon");
    addClass("ancHeading","secHeading", "smlHeading");

  } else {
    header.classList.remove("sticky");
    removeClass("fas","currencyIcon", "smCurrencyIcon");
    removeClass("ancHeading","secHeading", "smlHeading");
  }
}

function addClass(terget, currentClass, changedClass){
  var classArray = header.getElementsByClassName(terget);

  for(var i = 0; i< classArray.length; i++){
    if(classArray[i].classList.contains(currentClass)){
      classArray[i].classList.remove(currentClass);
      classArray[i].classList.add(changedClass);
    }   
  }
}
function removeClass(terget,currentClass, changedClass){
  var classArray = header.getElementsByClassName(terget);
  for(var i = 0; i< classArray.length; i++){
    if(!(classArray[i].classList.contains(currentClass))){
      classArray[i].classList.remove(changedClass );
      classArray[i].classList.add(currentClass);
    }   
  }
}



// changeClass("currencyIcon");

//     // console.log(classArray);
    // if (classArray.length) { 
    //   console.log("hmm")
    // }else{
    //   console.log("no")
    // }


     
     //     for(var i = 0; i <classArray.length; i++ ){
     //      if(classArray[i]){
     //        classArray[i].classList.remove("currencyIcon");
     //        classArray[i].classList.add("smCurrencyIcon");
     //    }
     // }else{
     //     for(var i = 0; i <classArray.length; i++ ){
     //        classArray[i].classList.remove("smCurrencyIcon");
     //        classArray[i].classList.add("currencyIcon");
     //    }
     // }
     