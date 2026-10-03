const username = localStorage.getItem("username");

if (!username) {

    location.href = "login.html";

}

document.getElementById("username").innerHTML = username;

function logout() {

    localStorage.clear();

    location.href = "login.html";

}