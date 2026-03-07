const params = new URLSearchParams(window.location.search);
const teamId = params.get("id");

console.log("Team ID:", teamId);

fetch("data/teams.json")
.then(res => res.json())
.then(teams => {

console.log("Teams:", teams);

const team = teams.find(t => t.id === teamId);

if(!team){
    console.log("Team not found");
    return;
}

document.getElementById("team-name").textContent = team.name;
const countryEl = document.getElementById("team-country");
countryEl.innerHTML = `<img src="${team.flag}" class="flag"> ${team.country}`;
document.getElementById("team-ranking").textContent = "#" + team.ranking;
document.getElementById("team-logo").src = team.logo;

});