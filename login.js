function login(event) {
    event.preventDefault();
  
    var email = document.getElementById('emaill').value;
    var password = document.getElementById('passwordl').value;
  
    // Sign in the user with the provided email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // If successful, get the signed-in user
            var user = userCredential.user;
  
            // Save email in browser's local storage
            localStorage.setItem('loggedInUserEmail', email);
            
            // Display a success message in the console
            console.log("Login successful");
  
            // Redirect to index.html
            window.location.href = "dashboard.html";
        })
        .catch(function(error) {
            console.error("Error:", error);
            alert("Error: " + error.message);
        });
  }
  
  function register(event) {
    event.preventDefault();
    var regEmail = document.getElementById("emailr").value.toLowerCase(); // Convert email to lowercase
    var regPassword = document.getElementById("passwordr").value;
    var regName = document.getElementById("namer").value;
  
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
        .then(function(userCredential) {
            // Registration successful
            // Get the user's unique ID
            var user2 = userCredential.user;
            var userId2 = user2.uid;
            var userEmail2 = user2.email;
            localStorage.setItem('loggedInUserEmail', userEmail2);
  
            // Create a new data node in the Firebase Realtime Database with the email as the key
            var database = firebase.database();
            var usersRef = database.ref('users');
            usersRef.child(regEmail.replace('.', ',')).set({
                email: regEmail,
                name: regName
            }, function(error) {
                if (error) {
                    console.error("Error writing data:", error);
                } else {
                    console.log("Data successfully saved.");
                    window.location.href = "dashboard.html"; // Redirect after data is saved
                }
            });
        })
        .catch(function(error) {
            // Handle registration error
            alert("Error: " + error.message);
        });
  }