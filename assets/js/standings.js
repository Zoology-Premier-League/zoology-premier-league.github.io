// assets/js/standings.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('standings-page')) {
        loadStandings();
    }
});

async function loadStandings() {
    try {
        const response = await fetch('data/standings.json');
        const data = await response.json();
        const container = document.getElementById('standings-container');
        
        container.innerHTML = '';
        
        data.groups.forEach(group => {
            // Sort teams by points (descending), then Goal Difference (descending)
            group.teams.sort((a, b) => {
                if (b.points !== a.points) return b.points - a.points;
                return b.gd - a.gd;
            });

            let rows = '';
            group.teams.forEach((team, index) => {
                rows += `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="team-cell"><strong>${team.name}</strong></td>
                        <td>${team.played}</td>
                        <td>${team.won}</td>
                        <td>${team.drawn}</td>
                        <td>${team.lost}</td>
                        <td>${team.gf}</td>
                        <td>${team.ga}</td>
                        <td>${team.gd}</td>
                        <td><strong>${team.points}</strong></td>
                    </tr>
                `;
            });

            container.innerHTML += `
                <h3 style="margin-top: 2rem; color: var(--primary-color);">${group.name}</h3>
                <div class="card table-container fade-in">
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th>P</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading standings:", error);
    }
}
