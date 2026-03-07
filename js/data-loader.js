fetch("data/players.json")
  .then(response => response.json())
  .then(players => {

    const lineupContainer = document.getElementById("team-lineup");
    if (!lineupContainer) return;

    const teamPlayers = players.filter(player => player.team === "Team Spirit");

    teamPlayers.forEach(player => {

      const card = document.createElement("a");
      card.href = "player.html";
      card.className = "lineup-player";

      card.innerHTML = `
        <img src="${player.photo}" alt="${player.name}">
        <span>${player.name}</span>
      `;

      lineupContainer.appendChild(card);

    });

});