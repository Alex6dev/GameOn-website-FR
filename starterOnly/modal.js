function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function get (classe, message){
  

}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeForm = document.querySelector("main div.bground div.content span.close")//chercher le bouton(x)
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birtDate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const locaNY = document.getElementById("location1");
const locaSF = document.getElementById("location2");
const locaSea = document.getElementById("location3");
const locaChi = document.getElementById("location4");
const locaBos = document.getElementById("location5");
const locaPor = document.getElementById("location6");
const conditionDutilisateur = document.getElementById("checkbox1");
const preventEvent = document.getElementById("checkbox2");
const btnSendForm = document.getElementById("btn-sendForm");
let a= 0;
let b= 0;
let c=0;
let d=0;


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
//conditionDutilisateur.addEventListener('input', conditionD);
preventEvent.addEventListener('input', conditionF);
btnSendForm.addEventListener('click', sendForm)
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
    let truevalFirstName = valFirstName;
    a=1; 
    firstName.style.border="none";
    let elt=document.getElementsByClassName("errorFirst");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="none";
    }
     
  }else{
    a=0;
    firstName.style.border="2px solid #e54858";
    console.log('pas bon')
    let elt=document.getElementsByClassName("errorFirst");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="block";
    }
  }
}

function last(evt){
  const valLastName= evt.target.value ;
  const regex1= new RegExp('^[a-zA-Z]{3,}')
  if (regex1.test(valLastName)){
    const truevalLastName = valLastName;
    b=1;
    lastName.style.border="none";
    let elt=document.getElementsByClassName("errorLast");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="none";
    }
    
  }else{
    b=0;
    lastName.style.border="2px solid #e54858";
    let elt=document.getElementsByClassName("errorLast");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="block";
    }
    
  }
}
function email(evt){
  const Email= evt.target.value ;
  const regex2= new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$')
  if (regex2.test(Email)){
    const truevalEmail = Email;
    c=1;
    eMail.style.border="none";
    let elt=document.getElementsByClassName("errorEmail");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="none";
    }
  }else{
    c=0;
    eMail.style.border="2px solid #e54858";
    let elt=document.getElementsByClassName("errorEmail");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="block";
    }
    /*indiquer qu'il c'est tromper*/
  }
}
function birt(evt){
  const birthdate= evt.target.value ;
  const regex3= new RegExp('[0-9]')
  if (regex3.test(birthdate)){
    const truevalbirthdate = birthdate;
    d=1;
    birtDate.style.border="none";
    let elt=document.getElementsByClassName("errorBirtdate");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="none";
    }
  }else{
    d=0;
    birtDate.style.border="2px solid #e54858";
    let elt=document.getElementsByClassName("errorBirtdate");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="block";
    }
  }
}
function quantity(evt){
  const quantityTourm= evt.target.value ;
  const regex3= new RegExp('[0-9]')
  if (regex3.test(quantityTourm)){
    const truevalQuantity = quantityTourm;
    quantityTournament.style.border="none";
    let elt=document.getElementsByClassName("errorQuantity");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="none";
    }
  }else{
    quantityTournament.style.border="2px solid #e54858";
    let elt=document.getElementsByClassName("errorQuantity");
    for(var i=0; i<elt.length;i+=1){
      elt[i].style.display="block";
    }
  }
}
function locat(evt){
  const location= evt.target.value ;
}
function conditionF(evt){
  const conditionC = evt.target.value;
  
}
/*function conditionD(evt){
  const conditionV= evt.target.value;
  if (conditionV.checked==true){
    console.log("c'est true")
  }
  if(conditionV.checked==false){
    console.log("c'est false")
  }
}*/
function sendForm(evt){
  const clickbtn=evt.target.value;
  
  if(a===1 && b===1 && c===1 && d===1){
    console.log(" envoyer")
  }else{
    console.log('pas envoyer')
    evt.preventDefault();

  }

}