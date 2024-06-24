// --------------------------------------------------Sidebar------------------------------------------
function openNav() {
    const sidePanel = document.getElementById("mysidepanel");
    if (sidePanel) {
      sidePanel.style.left = "0";
    } else {
      console.error("sidepanel not found");
    }
  }
  function closeNav() {
    const sidePanel = document.getElementById("mysidepanel");
    if (sidePanel) {
      sidePanel.style.left = "-320px";
    }
  }
  
  // ---------------------------------------------------value accordion------------------------------------
  
  const accordionItem = document.querySelectorAll(".value__accordion-item");
  
  accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector(".value__accordion-header");
  
    accordionHeader.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-open");
  
      toggleItem(item);
  
      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });
  
  const toggleItem = (item) => {
    const accordionContent = item.querySelector(".value__accordion-content");
  
    if (item.classList.contains("accordion-open")) {
      accordionContent.removeAttribute("style");
      item.classList.remove("accordion-open");
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
    }
  };
  
  // ---------------------------------------------------swiper------------------------------------
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  // --------------- Back to Top btn -------------------------
  
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTop").style.display = "block";
    } else {
      document.getElementById("backToTop").style.display = "none";
    }
  }
  
  function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
      behavior: "smooth",
    });
  }
  //backend for newsletter
  
  // Get a reference to the database
  const database = firebase.database();
  const form = document.querySelector("#newsletter");
  
  // Add submit event listener
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // Get input field value
    const email = document.querySelector("#email").value;
  
    // Save data to Firebase
    database.ref("newsletter").push({
      email,
    });
    alert("You are successfully subscribed.");
  });
  // Assuming you have Firebase initialized and configured
  function login(event) {
    event.preventDefault();
    var email = document.getElementById('emaill').value;
    var password = document.getElementById('passwordl').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("hello")
        // You can redirect to another page or perform other actions here
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }
  function register() {
    var regEmail = document.getElementById("emailr").value;
    var regPassword = document.getElementById("passwordr").value;
    var regName = document.getElementById("namer").value;
  
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
      .then(function(userCredential) {
        // Registration successful
      //  alert("Registration successful! You will now be redirected to the login page.");
       // window.location.href = "index.html";
        
        // Get the user's unique ID
        var user2 = userCredential.user;
        var userId2 = user2.uid;
        var userEmail2 = user2.email;
        localStorage.setItem('userEmail', userEmail2);
        // Create a new data node in the Firebase Realtime Database with the email as the key
        var database = firebase.database();
        var usersRef = database.ref('users');
        usersRef.child(userId2).set({
          email: regEmail,
          name: regName,
          userId: userId2
        });
      })
      .catch(function(error) {
        // Handle registration error
        alert("Error: " + error.message);
      });
  }