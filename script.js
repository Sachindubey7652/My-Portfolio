//   typing Animation
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typing", {
        strings: ["Java Developer", "Web Developer", "DB Administrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

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


