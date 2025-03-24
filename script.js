
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;

    if (localStorage.getItem(username)) {
        alert("❌ Username already taken! Try a different one.");
    } else {
        let userData = { name, mobile, email, username, password };
        localStorage.setItem(username, JSON.stringify(userData));
        alert("✅ Sign Up Successful! You can now log in.");
        window.location.href = "index.html"; // Redirect to login page
    }
});


document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = localStorage.getItem(username);
    
    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            localStorage.setItem("loggedIn", username);
            window.location.href = "home.html"; // Redirect to home
        } else {
            alert("❌ Incorrect Password!");
        }
    } else {
        alert("❌ User not found! Please sign up.");
    }
});


document.getElementById("logout")?.addEventListener("click", function() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
});

// Protect Home Page (Redirect if Not Logged In)
if (window.location.pathname.includes("home.html") && !localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
}


function goBack() {
    window.location.href = "home.html"; // Redirect back to home page
}


document.addEventListener("DOMContentLoaded", function () {
    // Retrieve stored users
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.length > 0) {
        let lastUser = users[users.length - 1]; // Get the last registered user

        document.getElementById("user-name").textContent = lastUser.name;
        document.getElementById("user-email").textContent = lastUser.email;
        document.getElementById("user-contact").textContent = lastUser.contact;
        document.getElementById("user-joined").textContent = lastUser.joined;
    } else {
        document.getElementById("user-name").textContent = "No user found";
    }
});





document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("uploadModal");
    let scanNowBtn = document.getElementById("scanNowBtn");
    let closeBtn = document.querySelector(".close");
    let galleryUpload = document.getElementById("galleryUpload");
    let captureImage = document.getElementById("captureImage");
    let fileInput = document.getElementById("fileInput");
    let cameraInput = document.getElementById("cameraInput");

    // Show modal when Scan Now is clicked
    scanNowBtn.onclick = function () {
        modal.style.display = "block";
    };

    // Close modal when 'X' is clicked
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Upload from Gallery
    galleryUpload.onclick = function () {
        fileInput.click(); // Opens file picker
    };

    // Capture Image using Camera
    captureImage.onclick = function () {
        cameraInput.click(); // Opens camera
    };

    // Hide modal when clicking outside the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
