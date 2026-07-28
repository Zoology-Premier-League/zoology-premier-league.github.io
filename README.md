# ZPL Football Tournament 2026 Website

This is the official, static, data-driven website for the Zoology Premier League (ZPL) Football Tournament 2026.

## Features
- **100% Static**: No backend, no databases, extremely fast to load.
- **Data-Driven**: All content is loaded dynamically via JSON files using Vanilla JavaScript.
- **Modern UI/UX**: Dark mode sports theme with neon green highlights and smooth glassmorphism animations.
- **Responsive Design**: Looks perfect on mobile, tablets, and desktop displays.
- **No Build Steps**: You don't need Node, npm, React, or any compilers. Just open the files in a browser!

## Project Structure
```
/
├── index.html            - Homepage (Hero, Live Match, Latest Results)
├── teams.html            - Team Names (Rosters, Captains, Logos)
├── standings.html        - Group Standing (Points Tables)
├── knockout.html         - Knockout Stage (Bracket, Champion)
│
├── assets/
│   ├── css/
│   │   └── style.css     - Main styling
│   ├── js/
│   │   ├── main.js       - Global logic & homepage data
│   │   ├── teams.js      - Logic for teams.html
│   │   ├── standings.js  - Logic for standings.html
│   │   └── knockout.js   - Logic for knockout.html
│   ├── images/           - General images
│   ├── logos/            - Team logos go here
│   └── background/       - Homepage hero background image goes here
│
├── data/                 - ALL EDITABLE CONTENT LIVES HERE
│   ├── settings.json     - Titles, description, background image path, footer info
│   ├── matches.json      - Live match and latest results
│   ├── teams.json        - Team names, logos, players
│   ├── standings.json    - Points table data
│   └── knockout.json     - Quarterfinals, semi-finals, finals bracket
│
├── README.md             - This document
└── USER_MANUAL.md        - Guide for updating the website
```

## How It Works
When a user visits a page (e.g. `index.html`), the browser downloads the HTML, CSS, and JS. The JavaScript (`assets/js/main.js`) then makes an asynchronous `fetch()` request to the `data/` folder to grab the JSON files. The JS then automatically creates the HTML elements dynamically and inserts them into the page.

Because it relies on the `fetch()` API, **opening the HTML files directly from your computer (e.g., `file:///...`) might cause a CORS error in some browsers.** For local testing, it is recommended to use a simple local server (like the VSCode "Live Server" extension, or running `python -m http.server` in the terminal).

## Deployment (GitHub Pages)
Since this is a static website, it is completely compatible with GitHub Pages.
1. Commit all files to a GitHub repository.
2. Go to Repository Settings > Pages.
3. Select the `main` branch as the source and click Save.
4. The website will be live in a few minutes! No configuration required.

## Customization
Please read the **`USER_MANUAL.md`** for a step-by-step guide on how to update match scores, add teams, change the background image, and update the standings. Everything can be updated purely by editing the files in the `data/` folder. No coding knowledge is required to maintain the tournament data!
