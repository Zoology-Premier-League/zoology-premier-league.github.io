// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadGlobalSettings();
    if (document.getElementById('home-page')) {
        loadHomeData();
    }
});

// Navigation Mobile Menu Toggle
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Set active nav link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Fetch global settings
async function loadGlobalSettings() {
    try {
        const response = await fetch('data/settings.json');
        const settings = await response.json();
        
        // Update Title & Subtitle
        document.querySelectorAll('.site-title').forEach(el => el.textContent = settings.title);
        document.querySelectorAll('.site-subtitle').forEach(el => el.textContent = settings.subtitle);
        
        // Update description if present
        const descEl = document.getElementById('tournament-description');
        if (descEl) descEl.textContent = settings.description;

        // Update background
        const heroEl = document.getElementById('hero');
        if (heroEl && settings.backgroundImage) {
            heroEl.style.backgroundImage = `url('${settings.backgroundImage}')`;
        }

        // Update Footer
        document.getElementById('footer-department').textContent = settings.footer.department;
        document.getElementById('footer-committee').textContent = settings.footer.committee;
        document.getElementById('footer-contact').textContent = settings.footer.contact;
        document.getElementById('footer-copyright').innerHTML = `&copy; ${settings.footer.copyright}`;
        document.getElementById('footer-facebook').href = settings.footer.facebook;
        document.title = settings.title;
        
    } catch (error) {
        console.error("Error loading settings:", error);
    }
}

// Load Home Page Data (Matches)
async function loadHomeData() {
    try {
        const response = await fetch('data/matches.json');
        const data = await response.json();
        
        renderLiveMatch(data.liveMatch);
        renderLatestResults(data.latestResults);
    } catch (error) {
        console.error("Error loading matches:", error);
    }
}

function renderLiveMatch(match) {
    const container = document.getElementById('live-match-container');
    if (!container) return;

    let scoreHTML = `<div class="vs">VS</div>`;
    if (match.status === 'Live' || match.status === 'Finished') {
        scoreHTML = `<div class="score">${match.teamA.score} - ${match.teamB.score}</div>`;
    }

    let statusClass = 'status-upcoming';
    if(match.status === 'Live') statusClass = 'status-live';
    if(match.status === 'Finished') statusClass = 'status-finished';

    container.innerHTML = `
        <div class="match-teams">
            <div class="team">
                <img src="${match.teamA.logo}" alt="${match.teamA.name}" class="team-logo" onerror="this.src='assets/logos/placeholder.png'">
                <div class="team-name">${match.teamA.name}</div>
            </div>
            ${scoreHTML}
            <div class="team">
                <img src="${match.teamB.logo}" alt="${match.teamB.name}" class="team-logo" onerror="this.src='assets/logos/placeholder.png'">
                <div class="team-name">${match.teamB.name}</div>
            </div>
        </div>
        <div class="match-info">
            <span>📅 ${match.date}</span>
            <span>⏰ ${match.time}</span>
            <span>📍 ${match.venue}</span>
        </div>
        <div class="match-status ${statusClass}">${match.status}</div>
    `;
}

function renderLatestResults(results) {
    const container = document.getElementById('latest-results-container');
    if (!container) return;

    container.innerHTML = '';
    results.forEach(result => {
        container.innerHTML += `
            <div class="card result-card fade-in">
                <div class="result-date" style="text-align: center; color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
                    ${result.date} - ${result.status}
                </div>
                <div class="result-team">
                    <div class="result-team-info">
                        <img src="${result.teamA.logo}" alt="Logo" class="result-logo" onerror="this.src='assets/logos/placeholder.png'">
                        <span>${result.teamA.name}</span>
                    </div>
                    <strong style="font-size: 1.5rem;">${result.teamA.score}</strong>
                </div>
                <div class="result-team" style="margin-top: 1rem;">
                    <div class="result-team-info">
                        <img src="${result.teamB.logo}" alt="Logo" class="result-logo" onerror="this.src='assets/logos/placeholder.png'">
                        <span>${result.teamB.name}</span>
                    </div>
                    <strong style="font-size: 1.5rem;">${result.teamB.score}</strong>
                </div>
            </div>
        `;
    });
}
