function signup() {
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    localStorage.setItem("user",JSON.stringify({email, password, username}));
    window.location.href = "dashboard.html"
}
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getitem("user"));
    if (user && email === user.email && password === user.password) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials")
    }
}

function loadDashboard() {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
        window.location.href = "login.html";
        return;
    }
document.getElementById("welcome").innerText = 'welcome, ${user.username}';
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}