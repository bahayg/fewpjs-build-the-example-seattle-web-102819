// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modalDiv = document.getElementById("modal");
modalDiv.className = "hidden";

// document.addEventListener("DOMContentLoaded", function() {


// })

// const likeClass = document.getElementsByCclassName("like-glyph")
// EMPTY_HEART.addEventListener("click", funtion(){
//   mimicServerCall()
// })










// document.addEventListener("DOMContentLoaded", function (){
//   const like = document.querySelector(".like-glyph")
//       like.addEventListener("click", function(){
//         mimicServerCall()
        
//   })

// })

// mimicServerCall()
// .then(function(serverMessage){

// if (key.innerHTML == EMPTY_HEART) {
//   key.innerHTML = FULL_HEART
//   key.style.color = "red"
// }
// else {
//   key.innerHTML = EMPTY_HEART
//   key.style.color = ""
// }})
// .catch(function(error){
//   document.getElementById("modal").className = "";
//   setTimeout(function() {
//   document.getElementById("modal").className = "hidden"
//   }, 3000)



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
