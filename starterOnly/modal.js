function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector("main div.bground div.content span.close")//chercher le bouton(x)


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeForm.addEventListener('click',function(){
  const form=document.querySelector("main div.bground")
  form.style.display="none";
});
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


