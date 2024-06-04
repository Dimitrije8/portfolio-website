function togglePortfolio() {
  var itemsToToggle = document.querySelectorAll(
    ".portfolio-items.recipe, .portfolio-items.agency, .portfolio-items.clipboard, .portfolio-items.fylo"
  );
  var button = document.querySelector(".btn-s");
  var hideButton = document.querySelector(".hide-btn");
  var currentState = button.getAttribute("data-state");

  itemsToToggle.forEach(function (item) {
    if (currentState === "more") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });

  if (currentState === "more") {
    button.style.display = "none";
    hideButton.style.display = "inline-block";
    button.setAttribute("data-state", "hide");
  } else {
    button.style.display = "flex";
    hideButton.style.display = "none";
    button.setAttribute("data-state", "more");
  }
}

/////////////////////////////////////////////
// Email JS

function validateAndSend() {
  // Provera da li su sva polja prazna
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    // Postavljamo crveni border na sva prazna polja forme
    document.getElementById("name").classList.add("error-border");
    document.getElementById("email").classList.add("error-border");
    document.getElementById("subject").classList.add("error-border");
    document.getElementById("message").classList.add("error-border");
  } else {
    // Ako su sva polja popunjena, šaljemo mejl
    sendMail();
  }
}

function sendMail() {
  (function () {
    emailjs.init("2pSTCOmZ3LVoVh-rK");
  })();

  var params = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_hlcd6fi";
  var templateID = "template_hdvs26u";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Show success message
      document.getElementById("success-message").style.display = "block";
      // Clear form inputs after a delay
      setTimeout(function () {
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#message").value = "";
        // Hide success message after clearing form inputs
        document.getElementById("success-message").style.display = "none";
        // Focus on the first input field
        document.querySelector("#name").focus();
      }, 3000); // Adjust the delay as needed
    })
    .catch();
}

// Dodavanje event listener-a koji će se aktivirati kada korisnik počne da kuća u polje
document.querySelectorAll("input, textarea").forEach(function (input) {
  input.addEventListener("input", function () {
    // Uklanjanje crvenog border-a
    this.classList.remove("error-border");
  });
});

/////////////////////////////////////////////////////
// Animacija
// Funkcija za proveru da li je element u vidokrugu
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addAnimationClass() {
  var elements = document.querySelectorAll(
    ".about-section, .skills-section, .education-section, .courses-section, .contact-section"
  );
  elements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("animate__animated", "animate__fadeInUp");
      element.classList.remove("hidden");
    }
  });
}

// Funkcija koja proverava da li je element u vidokrugu
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Događaj za proveru da li je element u vidokrugu prilikom skrolovanja
window.addEventListener("scroll", function () {
  addAnimationClass();
});

// Pokretanje provere za animaciju kada se stranica učita
window.addEventListener("DOMContentLoaded", function () {
  addAnimationClass();
});

///////////////////////////////////////////////
// JavaScript to toggle menu icons
// document.addEventListener("DOMContentLoaded", function () {
//   var menuIcon = document.querySelector(".menu-icon");
//   var closeIcon = document.querySelector(".close-icon");
//   var mobileNav = document.querySelector(".mobile-nav");
//   var mainNav = document.querySelector(".main-nav");

//   menuIcon.addEventListener("click", function () {
//     mobileNav.classList.add("open");
//     menuIcon.style.display = "none";
//     closeIcon.style.display = "block";
//     mainNav.style.borderBottomLeftRadius = "0";
//     mainNav.style.borderBottomRightRadius = "0"; // Dodajemo stil .main-nav elementu
//     mainNav.style.right = "0";

//     // Dodajemo stil .main-nav elementu
//   });

//   closeIcon.addEventListener("click", function () {
//     mobileNav.classList.remove("open");
//     menuIcon.style.display = "block";
//     closeIcon.style.display = "none";
//     mainNav.style.borderBottomLeftRadius = "41px";
//     mainNav.style.borderBottomRightRadius = "41px"; // Resetujemo stil .main-nav elementu
//     mainNav.style.right = "auto"; // Resetujemo stil .main-nav elementu
//   });
// });
///////////////2.)
document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var closeIcon = document.querySelector(".close-icon");
  var mobileNav = document.querySelector(".mobile-nav");
  var mainNav = document.querySelector(".main-nav");

  function adjustMobileNavWidth() {
    var mainNavWidth = mainNav.offsetWidth;
    mobileNav.style.width = mainNavWidth + "px";
  }

  // Adjust width on load and when window is resized
  window.addEventListener("resize", adjustMobileNavWidth);
  adjustMobileNavWidth();

  menuIcon.addEventListener("click", function () {
    mobileNav.classList.add("open");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    mainNav.style.borderBottomLeftRadius = "0";
    mainNav.style.borderBottomRightRadius = "0";
    adjustMobileNavWidth(); // Adjust width when menu is opened
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
    mainNav.style.borderBottomLeftRadius = "41px";
    mainNav.style.borderBottomRightRadius = "41px";
  });
});
