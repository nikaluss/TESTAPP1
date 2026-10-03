const API = "http://127.0.0.1:5002/trails";

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// Edit Mode
if(id){

    document.getElementById("pageTitle").innerHTML="Edit Trail";

    fetch(API+"/"+id)

    .then(res=>res.json())

    .then(trail=>{

        document.getElementById("trail_id").value=trail.trail_id;
        document.getElementById("trail_name").value=trail.trail_name;
        document.getElementById("location").value=trail.location;
        document.getElementById("state").value=trail.state;
        document.getElementById("difficulty").value=trail.difficulty;
        document.getElementById("distance").value=trail.distance;
        document.getElementById("duration").value=trail.duration;
        document.getElementById("elevation").value=trail.elevation;
        document.getElementById("description").value=trail.description;
        document.getElementById("image_url").value=trail.image_url;
        document.getElementById("status").value=trail.status;

    });

}

//------------------------------------
// SAVE
//------------------------------------

function saveTrail(){

    const trail={

        trail_name:document.getElementById("trail_name").value,
        location:document.getElementById("location").value,
        state:document.getElementById("state").value,
        difficulty:document.getElementById("difficulty").value,
        distance:document.getElementById("distance").value,
        duration:document.getElementById("duration").value,
        elevation:document.getElementById("elevation").value,
        description:document.getElementById("description").value,
        image_url:document.getElementById("image_url").value,
        status:document.getElementById("status").value

    };

    //--------------------------------
    // UPDATE
    //--------------------------------

    if(id){

        fetch(API+"/"+id,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(trail)

        })

        .then(res=>res.json())

        .then(data=>{

            alert(data.message);

            window.location="adminTrails.html";

        });

    }

    //--------------------------------
    // INSERT
    //--------------------------------

    else{

        fetch(API,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(trail)

        })

        .then(res=>res.json())

        .then(data=>{

            alert(data.message);

            window.location="adminTrails.html";

        });

    }

}