// fade transition

function openSite(){

let start = document.getElementById("startPage");
let main = document.getElementById("mainSite");

start.classList.remove("show");

setTimeout(function(){

start.style.display="none";

main.style.display="flex";
window.scrollTo(0, 0);

setTimeout(function(){

main.classList.add("show");

},50);

},500);

}


// countdown timer

var timer = setInterval(function(){

var now = new Date().getTime();

var distance = birthday - now;

var days = Math.floor(distance/(1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
var seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

},1000);

function openHelloPage() {
  document.getElementById("mainSite").style.display = "none";
  document.getElementById("helloPage").style.display = "flex";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("helloPage").classList.add("show");
  }, 50);
}

function backToMainFromHello() {
  document.getElementById("helloPage").classList.remove("show");
  document.getElementById("helloPage").style.display = "none";
  document.getElementById("mainSite").style.display = "flex";
  window.scrollTo(0, 0);
  
  // Reset gift and photos
  let gift = document.querySelector(".gift-wrapper");
  if(gift) gift.classList.remove("open");
  let hint = document.getElementById("fullscreenHint");
  if(hint) hint.style.display = "none";
  let photos = document.querySelectorAll(".pop-photo");
  photos.forEach((photo) => {
    photo.style.transform = "translate(-50%, -50%) scale(0)";
    photo.style.opacity = "0";
    photo.classList.remove("flipped", "launched");
  });
}

function triggerPhotos(element) {
  if(element.classList.contains("open")) return;
  
  element.classList.add("open");
  
  // Show fullscreen hint
  let hint = document.getElementById("fullscreenHint");
  if(hint) {
    hint.style.display = "block";
  }
  
  // Wait for the intense shake to finish before exploding lid
  setTimeout(() => {
    let photos = document.querySelectorAll(".pop-photo");
    
    // Pop them into their grid slots!
    photos.forEach((photo, index) => {
      setTimeout(() => {
        photo.classList.add("launched");
        
        // Flip the card shortly after it drops in!
        setTimeout(() => {
          photo.classList.add("flipped");
        }, 500); 
      }, index * 100); // Stagger the cascade pop down
    });
  }, 900); // 800ms shake + 100ms sync
}

function backToStart() {
  document.getElementById("mainSite").classList.remove("show");
  document.getElementById("mainSite").style.display = "none";
  document.getElementById("startPage").style.display = "flex";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("startPage").classList.add("show");
  }, 50);
}

// Photo Modal Functions
document.addEventListener("DOMContentLoaded", () => {
  const photoContainer = document.getElementById("photoContainer");
  if (photoContainer) {
    photoContainer.addEventListener("click", (e) => {
      let card = e.target.closest(".flip-card");
      if (card && card.classList.contains("flipped")) {
        let img = card.querySelector("img");
        if (img) {
          openPhoto(img.src);
        }
      }
    });
  }
});

function openPhoto(src) {
  let modal = document.getElementById("photoModal");
  let modalImg = document.getElementById("modalImage");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closePhoto() {
  let modal = document.getElementById("photoModal");
  modal.style.display = "none";
}

function openFourthPage() {
  document.getElementById("helloPage").style.display = "none";
  document.getElementById("fourthPage").style.display = "flex";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("fourthPage").classList.add("show");
  }, 50);
}

function backToHelloFromFourth() {
  document.getElementById("fourthPage").classList.remove("show");
  document.getElementById("fourthPage").style.display = "none";
  document.getElementById("helloPage").style.display = "flex";
  window.scrollTo(0, 0);
}

function openFifthPage() {
  document.getElementById("fourthPage").style.display = "none";
  document.getElementById("fifthPage").style.display = "flex";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("fifthPage").classList.add("show");
  }, 50);
}

function backToFourthFromFifth() {
  document.getElementById("fifthPage").classList.remove("show");
  document.getElementById("fifthPage").style.display = "none";
  document.getElementById("fourthPage").style.display = "flex";
  window.scrollTo(0, 0);
}

function goToStartFromFifth() {
  document.getElementById("fifthPage").classList.remove("show");
  document.getElementById("fifthPage").style.display = "none";
  document.getElementById("startPage").style.display = "flex";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("startPage").classList.add("show");
  }, 50);
}
