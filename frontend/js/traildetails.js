const BASE_URL="http://127.0.0.1:5002";

const params=new URLSearchParams(window.location.search);

const id=params.get("id");

fetch(BASE_URL+"/trails/"+id)

.then(res=>res.json())

.then(trail=>{

document.getElementById("trailCard").innerHTML=`

<div class="card shadow">

<div class="card-body">

<h2>${trail.trail_name}</h2>

<hr>

<p>

<b>Location :</b>

${trail.location}

</p>

<p>

<b>State :</b>

${trail.state}

</p>

<p>

<b>Difficulty :</b>

${trail.difficulty}

</p>

<p>

<b>Distance :</b>

${trail.distance} km

</p>

<p>

<b>Duration :</b>

${trail.duration}

</p>

<p>

<b>Elevation :</b>

${trail.elevation} m

</p>

<p>

<b>Status :</b>

${trail.status}

</p>

<p>

${trail.description}

</p>

</div>

</div>

`;

});