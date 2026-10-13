const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name-entry");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event){
event.preventDefault();

let isValid =true;
clearErrors();


if(nameInput.value.trim()===""){
  showError(nameInput, "Name can't be empty");
  isValid=false;
}


if(emailInput.value.trim()==="" || !/^\S+@\S+\.\S+$/.test(emailInput.value)){
  showError(emailInput, "Enter valid email address");
  isValid=false;
}


if(messageInput.value.trim()===""){
  showError(messageInput, "The message field shouldn't be empty");
isValid=false;
}


if(isValid){
  alert("Form submitted successfully!")
form.reset();
}
});


function showError(input, message){
  input.classList.add("input-error");
const errorElement= input.parentElement.querySelector(".error-message");
if(errorElement){
errorElement.textContent= message;
}}


function clearErrors(){
  const error= document.querySelectorAll(".error-message");
  error.forEach(function(error){
    error.textContent="";
  });

const input = document.querySelectorAll("input, textarea");
input.forEach(function(input){
  input.classList.remove("input-error");
});
}








