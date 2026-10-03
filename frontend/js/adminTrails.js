const API="http://127.0.0.1:5002/trails";

loadTrails();

function newTrail() {
    window.location = "trailForm.html";
}

function editTrail(id) {
    window.location = "trailForm.html?id=" + id;
}

function loadTrails(){

fetch(API)

.then(res=>res.json())

.then(showTrails);

}

function showTrails(data){

let html="";

data.forEach(t=>{

html+=`

<tr>

<td>${t.trail_id}</td>

<td>${t.trail_name}</td>

<td>${t.location}</td>

<td>${t.difficulty}</td>

<td>

<button
class="btn btn-warning btn-sm"
onclick="editTrail(${t.trail_id})">

Edit

</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteTrail(${t.trail_id})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("tbody").innerHTML=html;

}

function deleteTrail(id){

if(!confirm("Delete this trail?"))
return;

fetch(API+"/"+id,{
method:"DELETE"
})

.then(res=>res.json())

.then(data=>{

alert(data.message);

loadTrails();

});

}