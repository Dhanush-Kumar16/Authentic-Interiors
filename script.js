let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header-2");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};


let countDate = new Date('march 30, 2024 00:00:00').getTime();
function CountDown(){
  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % (day)) / (hour));
  let m = Math.floor((gap % (hour)) / (minute));
  let s = Math.floor((gap % (minute)) / (second));


  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h; 
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;


}

setInterval(function(){
  CountDown();
},1000)

document.addEventListener('DOMContentLoaded', function () {
  // Get the "More" button
  var showMoreBtn = document.getElementById('showMoreBtn');
  // Get the container for hidden product boxes
  var hiddenBoxes = document.querySelector('.hidden-boxes');

  // Add event listener to the "More" button
  showMoreBtn.addEventListener('click', function () {
      // Toggle the visibility of hidden product boxes
      hiddenBoxes.classList.toggle('show-hidden-boxes');
      // Change the text of the button based on its current state
      if (showMoreBtn.textContent === 'More..') {
          showMoreBtn.textContent = 'Less';
      } else {
          showMoreBtn.textContent = 'More..';
      }
  });
});


// JavaScript for controlling the modal behavior
// and conditional content loading

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the page loads, show the modal
window.addEventListener('load', function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const popupBox = document.querySelector('.popup-box');
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  popupBox.classList.remove('show');
});

// Show the pop-up box
popupBox.classList.add('show');

//contact form
function Send(){

          
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var contact = document.getElementById("Contact").value;
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;

  var body = "Name: " + name + "<br/> Email:" + email + "<br/> Contact Number:" + contact + "<br/> Message:" + mess;
   
  console.log(body);
   Email.send({
    SecureToken : "87b751d2-1f11-4cdb-99ff-f04db3afe610",
    To: 'authenticinteriors123@gmail.com',
    From: "venkeykoppula143@gmail.com",
    Subject : sub,
    Body : body
   }).then(
       message =>{
           if(message=='OK'){

               swal("Successfull", "Your Data Successfull Received", "success");
           }
           else{

               swal("Something Wrong", "Your Data is not Received", "error");
           }
       }
     );
}

