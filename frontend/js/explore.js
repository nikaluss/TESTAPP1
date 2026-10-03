const BASE_URL = "http://127.0.0.1:5002";

loadTrails();

function loadTrails() {

    fetch(BASE_URL + "/trails")

        .then(res => res.json())

        .then(showTrails);

}

function searchTrails() {

    let state = document.getElementById("state").value;

    let difficulty = document.getElementById("difficulty").value;

    let distance = document.getElementById("distance").value;

    let url = BASE_URL + "/trails/search?";

    if (state != "")
        url += "state=" + encodeURIComponent(state) + "&";

    if (difficulty != "")
        url += "difficulty=" + encodeURIComponent(difficulty) + "&";

    if (distance != "")
        url += "maxDistance=" + distance;

    fetch(url)

        .then(res => res.json())

        .then(showTrails);

}

function showTrails(data) {

    let html = "";

    data.forEach(trail => {

        html += `

<div class="col-md-4">

<div class="card mb-4 shadow">

<div class="card-body">

<h4>${trail.trail_name}</h4>

<p>

<b>Location</b><br>

${trail.location}

</p>

<p>

Difficulty : ${trail.difficulty}<br>

Distance : ${trail.distance} km

</p>

<button
class="btn btn-success"

onclick="viewTrail(${trail.trail_id})">

View Details

</button>

</div>

</div>

</div>

`;

    });

    document.getElementById("trailList").innerHTML = html;

}

function viewTrail(id) {

    window.location = "trailDetails.html?id=" + id;

}