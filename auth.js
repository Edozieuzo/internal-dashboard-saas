function signup() {
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (!email.includes("@")) {
        alert("Enter a valid email address");
        return;
    }
    if (password.length < 4) {
        alert("Password must be at least 4 characters");
        return;
    }
    if (!email || !password || !username) {
        alert("Fill all fields");
        return;
    }
    const user = {email, password, username};
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) {
        alert("No account found, Sign Up");
        return;
    }
    if (email === user.email && password === user.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

function loadDashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    const loggedIn = localstorage.getItem("loggedIn")
    if (!loggedIn) {
        window.location.href = "login.html";
        return;
    }
document.getElementById("welcome").innerText = `Welcome, ${user.username}`;
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}