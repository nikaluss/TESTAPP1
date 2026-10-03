const API_URL = "http://127.0.0.1:5001";


async function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;


    try {

        const response = await fetch(API_URL + "/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                username: username,
                password: password

            })

        });


        const data = await response.json();


        console.log(data);


        if (data.status === "success") {

            localStorage.setItem(
                "AccountID",
                data.user.AccountID
            );

            localStorage.setItem(
                "username",
                data.user.Username
            );
            localStorage.setItem(
                "token",
                data.token
            );
            localStorage.setItem(
            "role",
            data.user.Role
        );

 window.location = "dashboard.html";


        }
        else {


            document.getElementById("message").innerHTML =
            data.message;


        }


    }
    catch(error) {


        console.log(error);


        document.getElementById("message").innerHTML =
        "Cannot connect to Account Service";


    }

}