function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*---------------fonction d'affichage ---------------------------*/
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

const closeForm = document.querySelector("main div.bground div.content span.close")//le bouton(x)
const firstName = document.getElementById("first");//input Firstname
const boxFirst = document.getElementsByClassName("errorFirst");//texte erreur First
const lastName = document.getElementById("last");//input Lastname
const boxLast = document.getElementsByClassName("errorLast");//texte erreur Lastname
const eMail = document.getElementById("email");//input Email
const boxEmail = document.getElementsByClassName("errorEmail");//texte erreur Email
const birtDate = document.getElementById("birthdate");//input Birthday 
const boxBirt = document.getElementsByClassName("errorBirtdate");//texte erreur Birthday
const quantityTournament = document.getElementById("quantity");//input nombre de tournoi 
const boxQuantity = document.getElementsByClassName("errorQuantity");//texte erreur nombre de tournoi 
const locaNY = document.getElementById("location1");//input New York
const locaSF = document.getElementById("location2");//input San Francisco
const locaSea = document.getElementById("location3");//input Seattle
const locaChi = document.getElementById("location4");//input Chicago
const locaBos = document.getElementById("location5");//input Boston
const locaPor = document.getElementById("location6");//input Portland
const boxVille = document.getElementsByClassName("errorVille");//texte erreur ville
const conditionDutilisateur = document.getElementById("checkbox1");//input condition obligatoire
const boxCondition = document.getElementsByClassName("errorCondition");//texte erreur condition obligatoire
const preventEvent = document.getElementById("checkbox2");//input abonnement newsletter
const btnSendForm = document.getElementById("btn-sendForm");//bouton envoi
let quantityTourm = 0;// nombre de tournoi effectuer
let a= 0;//variable pour envoi du formulaire
let b= 0;//variable pour envoi du formulaire
let c= 0;//variable pour envoi du formulaire
let d= 0;//variable pour envoi du formulaire
let e= 0;//variable pour envoi du formulaire
let f= 0;//variable pour envoi du formulaire
let j= 1;//variable pour envoi du formulaire


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeForm.addEventListener('click',close);//ecouter evenement pour fermer le formulaire
firstName.addEventListener('input',first);//ecouter evenement Firstname
lastName.addEventListener('input',last);//ecouter evenement Lastname
eMail.addEventListener('input',email);//ecouter evenement Email
birtDate.addEventListener('input',birt);//ecouter evenement Birthday
quantityTournament.addEventListener('input',quantity);//ecouter evenement nombre de tournoi
locaNY.addEventListener('input',locat);//ecouter evenement New York
locaSF.addEventListener('input',locat);//ecouter evenement San Francisco
locaSea.addEventListener('input',locat);//ecouter evenement Seattle
locaChi.addEventListener('input',locat);//ecouter evenement Chicago
locaBos.addEventListener('input',locat);//ecouter evenement Boston
locaPor.addEventListener('input',locat);//ecouter evenement Portland
conditionDutilisateur.addEventListener('input', conditionD);//ecouter evenement condition obligatoire
preventEvent.addEventListener('input', conditionF);//ecouter evenement abonnement newsletter
btnSendForm.addEventListener('click', sendForm);//ecouter evenement bouton envoi


// launch modal form
//---------------------ouverture du formulaire------------------------
function launchModal() {
  modalbg.style.display = "block";
}
//------------------------fermeture du formulaire--------------------
function close(){
  const form=document.querySelector("main div.bground")
  form.style.display="none";
}
/*----------------------------fonction Firstname--------------------------------*/
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
/*----------------------------fonction Lastname--------------------------------*/
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
/*----------------------------fonction Email--------------------------------*/
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
/*----------------------------fonction birthday--------------------------------*/
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
/*----------------------------fonction nombre de tournoi--------------------------------*/
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
/*----------------------------fonction ville --------------------------------*/
function locat(evt){
  if(evt.target.checked){
    f=1;
    noneX(boxVille);
    
  }else{
    f=0;
    blockX(boxVille);
  }
}
/*----------------------------fonction condition obligatoire--------------------------------*/
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
/*----------------------------fonction abonnement newsletter--------------------------------*/
function conditionF(evt){
}
/*----------------------------fonction envoi du formulaire --------------------------------*/
function sendForm(evt){
  /* verifie la validiter de toutes les conditions */
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
    /*si tout est bon on lance ça */
    evt.preventDefault();
    console.log("envoyer");
    modalbg.style.display = "none";//fait disparaitre le formulaire 
    const fondConfirmation=document.getElementById("fond-confirmation");//cherche le message de confirmation
    fondConfirmation.style.display="block";//affiche le message de confirmation
    const btnCloseConfirmation=document.getElementById("btn-end");//cherche le bouton fermeture du message
    btnCloseConfirmation.addEventListener('click',closeConfirmation);//ecoute evenement du bouton fermeture
    /* -------------------fonction fermeture du message de confirmation-----------------*/
    function closeConfirmation(){
      console.log("merci")
      fondConfirmation.style.display="none";
    }
  }
}
