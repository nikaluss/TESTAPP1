window.onload = function(){

    loadUser();

};



function loadUser(){

const role = localStorage.getItem("role");

console.log("Current role:", role);


if(role && role.toLowerCase()=="admin"){

    document.getElementById("adminMenu")
    .style.display="block";

}

    let username =
    localStorage.getItem("username");


    if(username)
    {

        document.getElementById("username").innerHTML =
        username;

    }

    else
    {

        // User not logged in

        window.location="login.html";

    }

}




function logout(){


    localStorage.removeItem("username");

    localStorage.removeItem("AccountID");

    localStorage.removeItem("token");


    window.location="login.html";


}