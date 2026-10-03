const API_URL = "http://127.0.0.1:5002";


// Load profile when page opens

window.onload = function(){

    loadProfile();

};



function loadProfile(){


    // temporary AccountID
    // later get from JWT token

    const accountID = localStorage.getItem("AccountID");


    if(!accountID){

        document.getElementById("message").innerHTML =
        "No account information found";

        return;

    }



    fetch(API_URL + "/profile/" + accountID)


    .then(response => response.json())


    .then(data => {


        console.log(data);


        if(data.status === "success"){


            let p = data.profile;


            document.getElementById("accountID").value =
            p.AccountID;


            document.getElementById("username").value =
            p.Username;


            document.getElementById("fullname").value =
            p.FullName;


            document.getElementById("email").value =
            p.Email;


            document.getElementById("role").value =
            p.Role;


        }

        else{

            document.getElementById("message").innerHTML =
            data.message;

        }


    })


    .catch(error => {


        console.log(error);


        document.getElementById("message").innerHTML =
        "Cannot connect to Account Service";


    });


}




function updateProfile(){


    const accountID =
    document.getElementById("accountID").value;



    const fullname =
    document.getElementById("fullname").value;



    const email =
    document.getElementById("email").value;



    fetch(API_URL + "/profile/" + accountID, {


        method:"PUT",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify({


            fullname:fullname,

            email:email


        })


    })


    .then(response => response.json())


    .then(data => {


        document.getElementById("message").innerHTML =
        data.message;


    })


    .catch(error => {


        console.log(error);


    });


}