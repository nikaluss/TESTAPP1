const API_URL = "http://localhost:5001";

async function register() {

    const response = await fetch(API_URL + "/register", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            fullname: document.getElementById("fullname").value,

            email: document.getElementById("email").value,

            username: document.getElementById("username").value,

            password: document.getElementById("password").value

        })

    });

    const data = await response.json();

    document.getElementById("message").innerHTML = data.message;

    if (data.status === "success") {

        setTimeout(function () {

            location.href = "login.html";

        }, 1500);

    }

}