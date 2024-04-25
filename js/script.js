const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");190028
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;




// Retrieve the "See More" button and the hidden projects
const seeMoreBtn = document.getElementById('seeMoreBtn');
const hiddenProjects = document.getElementById('hiddenProjects');

// Event listener for the "See More" button
seeMoreBtn.addEventListener('click', function() {
  // Toggle the display of the hidden projects
  if (hiddenProjects.style.display === 'none') {
    hiddenProjects.style.display = 'grid';
    seeMoreBtn.style.display = 'none'; 
  }
});

// sending mails

function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name && email && message) {
    if (email.match(emailRegex)) {
      var params = {
        name: name,
        email: email,
        message: message,
      };
      const serviceID = "service_inen6ca";
      const templateID = "template_ffgcir8";

      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Thanks for your message ✨😊! I will get back to you soon!");
        })
        .catch((err) => console.log(err));
    } else {
      alert("✔ Please use a valid email address,so I can reply back ");
    }
  } else {
    alert("Please fill in all the required fields.");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
})




const hiddenElements = document.querySelectorAll('.AOS');
hiddenElements.forEach((el) => observer.observe(el));