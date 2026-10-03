const API="http://127.0.0.1:5004/recommendations";

loadRecommendations();

function loadRecommendations(){

const state=document.getElementById("state").value;

const difficulty=document.getElementById("difficulty").value;

const distance=document.getElementById("distance").value;

let url=API+"?";

if(state!="")
url+="state="+encodeURIComponent(state)+"&";

if(difficulty!="")
url+="difficulty="+encodeURIComponent(difficulty)+"&";

if(distance!="")
url+="distance="+encodeURIComponent(distance);

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data);

        showRecommendations(data);

    });
}

function showRecommendations(data){

let html="";

data.forEach(t=>{

html+=`
<div class="col-md-4 mb-3">

<div class="card">

<div class="card-body">

<h5>${t.trail_name}</h5>

<p>${t.location}</p>

<p>${t.state}</p>

<p>${t.difficulty}</p>

<p>${t.distance} km</p>

<a href="trailDetails.html?id=${t.trail_id}"
class="btn btn-success">

View Details

</a>

</div>

</div>

</div>
`;

});

document.getElementById("recommendations").innerHTML=html;

}