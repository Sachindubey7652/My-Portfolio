//   typing Animation
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typing", {
        strings: ["Java Developer", "Web Developer", "DB Administrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});
function updateGreetingAndTime() {
    const greetingElement = document.getElementById("greeting");
    const timeElement = document.getElementById("current-time");

    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    let greeting;
    if (hour < 12) {
        greeting = "Good Morning 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon ☀️";
    } else {
        greeting = "Good Evening 🌙";
    }

    greetingElement.textContent = `${greeting}, Welcome To My Portfolio!`;

    // Format time as HH:MM:SS
    const timeString = `${hour.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    timeElement.textContent = `Current Time: ${timeString}`;
}

// Initial update
updateGreetingAndTime();

// Update every second
setInterval(updateGreetingAndTime, 1000);
let  tablinks = document.getElementsByClassName("tab-links");
let  tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let Sidemenu= document.getElementById("sidemenu");
function openmenu(){
    Sidemenu.style.right="0";
}
function closemenu(){
    Sidemenu.style.right="-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwXNpZNSmeIGd0agBr13nVDJ2Cu26V8lC6NT2Hb-vAu9sIP7zYWDha40rwi6B7zyNTg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message Sent Successfully."
       setTimeout(function(){
        msg.innerHTML=""
       },5000)
       form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })

  const btn = document.getElementById("seeMoreBtn");
  const hiddenProjects = document.querySelectorAll(".hidden-project");
  let isExpanded = false;
  
  btn.addEventListener("click", function (e) {
    e.preventDefault();
  
    hiddenProjects.forEach(project => {
      project.classList.toggle("show");
    });
  
    // Toggle button text
    btn.textContent = isExpanded ? "See More" : "See Less";
  
    // Flip the state
    isExpanded = !isExpanded;
  });
  
  const menuButton = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('nav ul');
  
  menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('show');
  });
  