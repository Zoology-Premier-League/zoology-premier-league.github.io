// assets/js/teams.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('teams-page')) {
        loadTeams();
    }
});

async function loadTeams() {
    try {
        const response = await fetch('data/teams.json');
        const teams = await response.json();
        const container = document.getElementById('teams-container');
        
        container.innerHTML = '';
        teams.forEach(team => {
            const playersList = team.players.map(p => {
                if (p === team.captain) {
                    return `<li><span class="captain">${p} (C)</span></li>`;
                }
                return `<li>${p}</li>`;
            }).join('');

            container.innerHTML += `
                <div class="card fade-in">
                    <div class="team-card-header">
                        <img src="${team.logo}" alt="${team.name}" class="team-logo" style="width: 60px; height: 60px;" onerror="this.src='assets/logos/placeholder.png'">
                        <h3>${team.name}</h3>
                    </div>
                    <h4>Squad:</h4>
                    <ul class="player-list">
                        ${playersList}
                    </ul>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading teams:", error);
    }
}
