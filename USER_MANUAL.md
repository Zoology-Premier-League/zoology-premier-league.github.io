# User Manual - Updating the ZPL Website

Welcome to the ZPL Football Tournament 2026 website! This guide will explain how you can update every part of the website **without knowing how to code**. 

All the editable data lives inside the **`data/`** folder. By simply opening and changing the text in these JSON files, the website will automatically update itself.

---

### 1. Change Today's Match
**File to edit:** `data/matches.json`
Look for the `"liveMatch"` section. Update the `"name"`, `"logo"`, `"score"`, `"date"`, `"time"`, and `"venue"`.

### 2. Update Live Scores
**File to edit:** `data/matches.json`
Inside `"liveMatch"`, change the number next to `"score"` for either `teamA` or `teamB`.

### 3. Change Match Status
**File to edit:** `data/matches.json`
Inside `"liveMatch"`, change `"status"` to one of the following exact words:
- `"Upcoming"`
- `"Live"`
- `"Finished"`

### 4. Edit Team Names
**File to edit:** `data/teams.json`
Find the team you want to edit. Change the text inside the quotation marks for `"name"`.
*Example: `"name": "New Team Name"`*

### 5. Add Players
**File to edit:** `data/teams.json`
Find the team. In the `"players"` list, add a new name inside quotation marks, separated by a comma.
*Example: `["John Doe", "Mike Smith", "New Player Name"]`*

### 6. Remove Players
**File to edit:** `data/teams.json`
Find the team. Simply delete the name and the surrounding quotation marks from the `"players"` list. Be careful with commas!

### 7. Change Team Captain
**File to edit:** `data/teams.json`
Change the text next to `"captain"`. Make sure the captain's name exactly matches a name in the `"players"` list so they get the "(C)" tag next to their name.

### 8. Replace Team Logos
Place your new logo image in the `assets/logos/` folder.
**File to edit:** `data/teams.json`
Update the `"logo"` path to point to your new file.
*Example: `"logo": "assets/logos/my_new_logo.png"`*
(Make sure to also update the logos in `matches.json` for live matches!)

### 9. Replace Homepage Background Image
Place your new background image in the `assets/background/` folder.
**File to edit:** `data/settings.json`
Update `"backgroundImage"` to the new file name.
*Example: `"backgroundImage": "assets/background/new-bg.jpg"`*

### 10. Update Standings
**File to edit:** `data/standings.json`
Locate the team in "Group A" or "Group B". Change the numbers for:
- `"played"` (Matches Played)
- `"won"` (Wins)
- `"drawn"` (Draws)
- `"lost"` (Losses)
- `"gf"` (Goals For)
- `"ga"` (Goals Against)
- `"gd"` (Goal Difference)
- `"points"` (Points)
*Note: The website will automatically sort the table based on Points and Goal Difference for you!*

### 11. Edit Knockout Bracket
**File to edit:** `data/knockout.json`
Here you can fill in the bracket.
Update the `"name"` and `"score"` for teams under `"quarterFinals"`, `"semiFinals"`, and `"final"`. If a team hasn't been decided yet, leave the name as `"TBD"` and the score as `null` (without quotes).

### 12. Change Tournament Title
**File to edit:** `data/settings.json`
Change the `"title"` and `"subtitle"` properties. This will update the homepage hero section and the browser tab titles.

### 13. Edit Footer
**File to edit:** `data/settings.json`
Under `"footer"`, you can edit the `"department"`, `"committee"`, `"contact"` info, `"facebook"` link, and `"copyright"` text.

### 14. Add a New Team in the Future
**File to edit:** `data/teams.json`
Copy an entire team block (from the `{` to the `}`), add a comma after the last team block, and paste the new block. Update the `id`, `name`, `logo`, `captain`, and `players` for the new team.
Then, add the new team into `data/standings.json` in their respective group.

### 15. Deploy Changes to GitHub Pages
Since the website runs entirely on GitHub pages, once you edit the JSON files or upload new images, all you need to do is **Commit and Push** your changes to your GitHub repository. Within 1-2 minutes, the live website will automatically update to reflect your changes!
