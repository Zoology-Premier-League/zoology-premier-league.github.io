// assets/js/knockout.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('knockout-page')) {
        loadKnockout();
    }
});

async function loadKnockout() {
    try {
        const response = await fetch('data/knockout.json');
        const data = await response.json();
        
        renderRound('sf-container', data.semiFinals);
        renderRound('f-container', [data.final]);
        
        const champContainer = document.getElementById('champion-container');
        if(champContainer && data.champion.name !== 'TBD') {
            champContainer.innerHTML = `
                <div class="card fade-in" style="text-align: center; border-color: gold; box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);">
                    <h2 style="color: gold;">🏆 CHAMPION 🏆</h2>
                    <h3 style="font-size: 2rem;">${data.champion.name}</h3>
                </div>
            `;
        }
        
    } catch (error) {
        console.error("Error loading knockout:", error);
    }
}

function renderRound(containerId, matches) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    matches.forEach(match => {
        let scoreA = match.teamA.score !== null ? match.teamA.score : '-';
        let scoreB = match.teamB.score !== null ? match.teamB.score : '-';
        
        let classA = match.teamA.score !== null && match.teamB.score !== null && match.teamA.score > match.teamB.score ? 'winner' : '';
        let classB = match.teamB.score !== null && match.teamA.score !== null && match.teamB.score > match.teamA.score ? 'winner' : '';

        container.innerHTML += `
            <div class="matchup fade-in">
                <div class="matchup-team ${classA}">
                    <span>${match.teamA.name}</span>
                    <span>${scoreA}</span>
                </div>
                <div class="matchup-team ${classB}">
                    <span>${match.teamB.name}</span>
                    <span>${scoreB}</span>
                </div>
                <div style="font-size: 0.75rem; text-align: center; color: var(--text-secondary); padding: 5px;">
                    ${match.date}
                </div>
            </div>
        `;
    });
}
