function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function block(border, texte){
  border.style.border="2px solid #e54858";
  let elt=texte;
  for(var i=0; i<elt.length;i+=1){
    elt[i].style.display="block";
  }
}
function blockX(texte){
  let elt=texte;
  for(var i=0; i<elt.length;i+=1){
    elt[i].style.display="block";
  }
}
function none(border,texte){
  border.style.border="none";
  let elt=texte;
  for(var i=0; i<elt.length;i+=1){
    elt[i].style.display="none";
  }
}
function noneX(texte){
  let elt=texte;
  for(var i=0; i<elt.length;i+=1){
    elt[i].style.display="none";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeForm = document.querySelector("main div.bground div.content span.close")//chercher le bouton(x)
const firstName = document.getElementById("first");
const boxFirst = document.getElementsByClassName("errorFirst");
const lastName = document.getElementById("last");
const boxLast = document.getElementsByClassName("errorLast");
const eMail = document.getElementById("email");
const boxEmail = document.getElementsByClassName("errorEmail");
const birtDate = document.getElementById("birthdate");
const boxBirt = document.getElementsByClassName("errorBirtdate");
const quantityTournament = document.getElementById("quantity");
const boxQuantity = document.getElementsByClassName("errorQuantity");
const ville= document.getElementsByClassName("checkbox-icon");
const locaNY = document.getElementById("location1");
const locaSF = document.getElementById("location2");
const locaSea = document.getElementById("location3");
const locaChi = document.getElementById("location4");
const locaBos = document.getElementById("location5");
const locaPor = document.getElementById("location6");
const boxVille = document.getElementsByClassName("errorVille");
const conditionDutilisateur = document.getElementById("checkbox1");
const boxCondition = document.getElementsByClassName("errorCondition")
const preventEvent = document.getElementById("checkbox2");
const btnSendForm = document.getElementById("btn-sendForm");
let quantityTourm = 0;
let a= 0;
let b= 0;
let c= 0;
let d= 0;
let e= 0;
let f= 0;
let j= 1;





// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeForm.addEventListener('click',close);
firstName.addEventListener('input',first);
lastName.addEventListener('input',last);
eMail.addEventListener('input',email);
birtDate.addEventListener('input',birt);
quantityTournament.addEventListener('input',quantity);
locaNY.addEventListener('input',locat);
locaSF.addEventListener('input',locat);
locaSea.addEventListener('input',locat);
locaChi.addEventListener('input',locat);
locaBos.addEventListener('input',locat);
locaPor.addEventListener('input',locat);
conditionDutilisateur.addEventListener('input', conditionD);
preventEvent.addEventListener('input', conditionF);
btnSendForm.addEventListener('click', sendForm);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function close(){
  const form=document.querySelector("main div.bground")
  form.style.display="none";
}
function first(evt){
  const valFirstName= evt.target.value ;
  const regex1= new RegExp('^[a-zA-Z]{3,}')
  if (regex1.test(valFirstName)){
    a=1;
    none(firstName,boxFirst)
  }else{
    a=0;
    block(firstName,boxFirst)
  }
}

function last(evt){
  const valLastName= evt.target.value ;
  const regex1= new RegExp('^[a-zA-Z]{3,}')
  if (regex1.test(valLastName)){
    b=1;
    none(lastName,boxLast);
    
  }else{
    b=0;
    block(lastName,boxLast);
    
  }
}
function email(evt){
  const Email= evt.target.value ;
  const regex2= new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$')
  if (regex2.test(Email)){
    c=1;
    none(eMail,boxEmail);
  }else{
    c=0;
    block(eMail,boxEmail)
  }
}
function birt(evt){
  const birthdate= evt.target.value ;
  const regex3= new RegExp('[0-9]')
  if (regex3.test(birthdate)){
    d=1;
    none(birtDate,boxBirt)
  }else{
    d=0;
    block(birtDate,boxBirt)
  }
}
function quantity(evt){
  quantityTourm= evt.target.value ;
  const regex3= new RegExp('[0-9]')
  if (regex3.test(quantityTourm)){
    e=1;
    none(quantityTournament,boxQuantity)
  }else{
    e=0;
    block(quantityTournament,boxQuantity)
  }

  if(quantityTourm==0){
    f=1;
  }else{
    f=0;
  }
}
function locat(evt){
  if(evt.target.checked){
    f=1;
    noneX(boxVille);
    
  }else{
    f=0;
    blockX(boxVille);
  }
}
function conditionD(evt){
  const conditionV= evt.target;
  if (conditionV.checked){
    j=1;
    noneX(boxCondition);

  }else{
    j=0;
    blockX(boxCondition);
  }
}
function conditionF(evt){
}
function sendForm(evt){
  
  if(a!=1){
    block(firstName,boxFirst);
    evt.preventDefault();
  }else if(b!=1){
    block(lastName,boxLast);
    evt.preventDefault();
  }else if(c!=1){
    block(eMail,boxEmail);
    evt.preventDefault();
  }else if(d!=1){
    block(birtDate,boxBirt);
    evt.preventDefault();
  }else if(e!=1){
    block(quantityTournament,boxQuantity);
    evt.preventDefault();
  }else if(f!=1){
    blockX(boxVille);
    evt.preventDefault();
  }else if(j!=1){
    blockX(boxCondition);
    evt.preventDefault();
  }else{
    evt.preventDefault();
    console.log("envoyer");
    modalbg.style.display = "none";
    const fondConfirmation=document.getElementById("fond-confirmation");
    fondConfirmation.style.display="block";
    const btnCloseConfirmation=document.getElementById("btn-end");
    btnCloseConfirmation.addEventListener('click',closeConfirmation);
    function closeConfirmation(){
      console.log("merci")
      fondConfirmation.style.display="none";
    }
  }
}
