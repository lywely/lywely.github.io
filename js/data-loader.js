async function loadTeams() {
    const response = await fetch("/data/teams.json");
    const teams = await response.json();

    console.log(teams);
}

loadTeams();