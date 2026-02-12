# The Primacy Times

The official school newsletter website for The Primacy Collegiate Academy, founded in August 2024.

## Project Structure

This is a static HTML/CSS/JS site with no build tools or frameworks. All data is fetched client-side from a published Google Spreadsheet.

```
├── index.html              # Homepage (latest articles)
├── features.html           # Feature articles page
├── school-updates.html     # School updates page
├── intramurals.html        # Intramurals scoreboard & articles
├── sports.html             # Sports rankings & stats
├── distance-challenge.html # Distance challenge leaderboard
├── house-points.html       # House points tracker
├── staff.html              # Staff articles
├── about.html              # About page with formulas
├── article.html            # Individual article view
├── writer-page.html        # Individual writer profile
│
├── style.css               # Main site styles
├── sports-style.css        # Sports page styles
├── dc-style.css            # Distance challenge styles
├── house-points-style.css  # House points styles
│
├── articles.js             # Fetches articles from Google Sheets & renders them
├── main.js                 # Core site logic (navigation, rendering, filtering)
├── writers.js              # Writer profile data
├── intramurals.js          # Intramurals data & logic
├── sports-main.js          # Sports rankings logic
├── sports-index.js         # Sports page initialization
├── dc-main.js              # Distance challenge calculations & charts
├── dc-index.js             # Distance challenge initialization
├── house-points.js         # House points tracking logic
│
├── data-2024.csv           # Distance challenge data (2024, legacy/backup)
├── data-2025.csv           # Distance challenge data (2025, legacy/backup)
├── sports-data-2025.csv    # Sports results data (2025, legacy/backup)
│
├── header/                 # Site logos (light/dark mode)
├── feature/                # Feature article images
├── school-updates/         # School update images
├── editorial/              # Editorial images
├── extracurricular/        # Extracurricular article images
├── intramurals/            # Intramurals images
├── spiritual-thought/      # Spiritual thought images
└── writers/                # Writer profile photos
```

## Google Sheets as Data Source

The site pulls live data from a single published Google Spreadsheet. Different pages read from different sheet tabs (GIDs) within the same workbook:

- **Articles** — `articles.js` fetches article content (title, author, date, issue, category, body HTML, image links) from a sheet tab at runtime.
- **Distance Challenge** — `dc-main.js` fetches weekly distance data per student.
- **Sports** — `sports-main.js` fetches match results and scores.
- **House Points** — `house-points.js` fetches house point tallies.

All sheets are published via **File > Share > Publish to web** in Google Sheets, which exposes them as CSV at URLs like:
```
https://docs.google.com/spreadsheets/d/e/{SPREADSHEET_ID}/pub?output=csv&gid={SHEET_GID}
```

To update content, edit the Google Spreadsheet directly — changes appear on the site automatically (with a short cache delay from Google).

### Article Images

Article images can be provided in two ways:
1. **Local files** in the category folder (e.g., `feature/issue-12-gods-timing.jpg`). Filenames follow the pattern `issue-{number}-{title-slug}.{ext}`.
2. **Google Drive links** in the spreadsheet's image column. The JS automatically converts Drive share URLs to direct image URLs.

## Adding a New Article

1. Add a new row to the articles sheet in Google Sheets with all required columns: `title`, `author`, `date`, `issue`, `category`, `subcategory`, `type`, `content`.
2. Either provide a Google Drive image link in the `image` column, or place an image file in the appropriate category folder following the naming convention.

## Updating Distance Challenge / Sports Data

Edit the corresponding sheet tab in the Google Spreadsheet. For a new school year, create a new tab and update the GID mapping in the relevant JS file (`dc-main.js`, `sports-main.js`, etc.).

## Adding a New Writer

Add the writer's profile info to `writers.js` and place their photo in the `writers/` folder.

## Deployment

This is a static site — serve the files directly with any web server or static hosting platform (e.g., GitHub Pages, Netlify). No build step required.
