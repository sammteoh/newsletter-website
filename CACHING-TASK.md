# Task: Add Client-Side Caching for Google Sheets Data

## Background

The site fetches all data from published Google Sheets CSV endpoints on every page load. There is no caching — navigating between pages or changing a dropdown (year/unit) re-fetches the same data. This makes the site feel slow, especially on pages like Intramurals that trigger 3 separate fetches.

## Goal

Add a `localStorage`-based cache so that repeated fetches for the same data return instantly instead of hitting Google Sheets every time.

**Cache TTL:** 10 minutes (600,000 ms). After 10 minutes, the next request re-fetches fresh data.

---

## Step 1: Create `cache.js`

Create a new file called `cache.js` in the project root with this function:

```js
function cachedFetch(url, ttlMs = 600000) {
    const key = 'cache_' + url;
    const cached = localStorage.getItem(key);
    if (cached) {
        const { text, ts } = JSON.parse(cached);
        if (Date.now() - ts < ttlMs) {
            return Promise.resolve(new Response(text));
        }
    }
    return fetch(url).then(response => response.text().then(text => {
        try { localStorage.setItem(key, JSON.stringify({ text, ts: Date.now() })); } catch (e) {}
        return new Response(text);
    }));
}
```

**How it works:**
- Takes a URL and optional TTL (defaults to 10 min)
- Checks `localStorage` for a cached response keyed by URL
- If found and not expired, returns the cached text wrapped in a `Response` (so the calling code doesn't need to change its `.then(response => response.text())` chain)
- If missing or expired, fetches from Google Sheets, stores the result + timestamp, then returns it
- The `try/catch` around `localStorage.setItem` handles the case where storage is full — it just skips caching silently

---

## Step 2: Add `<script src="cache.js"></script>` to Every HTML Page

Add this script tag **before all other script tags** in every HTML file:

- `index.html`
- `article.html`
- `features.html`
- `school-updates.html`
- `intramurals.html`
- `sports.html`
- `distance-challenge.html`
- `house-points.html`
- `staff.html`
- `writer-page.html`
- `about.html`

Example — in `index.html`, change:

```html
    <script src="articles.js"></script>
    <script src="main.js"></script>
```

to:

```html
    <script src="cache.js"></script>
    <script src="articles.js"></script>
    <script src="main.js"></script>
```

---

## Step 3: Replace `fetch()` Calls with `cachedFetch()`

In each of the following files, find the `fetch(csvUrl)` call and replace `fetch` with `cachedFetch`. The rest of the `.then()` chain stays the same.

### `articles.js` (line ~2674)

```js
// BEFORE
return fetch(csvUrl)

// AFTER
return cachedFetch(csvUrl)
```

### `writers.js` (look for the fetch call inside `loadWritersData`)

```js
// BEFORE
const response = await fetch(csvUrl);

// AFTER
const response = await cachedFetch(csvUrl);
```

### `dc-main.js` (line ~1233)

```js
// BEFORE
fetch(csvUrl)

// AFTER
cachedFetch(csvUrl)
```

### `sports-main.js` (line ~882)

```js
// BEFORE
fetch(csvUrl)

// AFTER
cachedFetch(csvUrl)
```

### `house-points.js` (line ~498)

```js
// BEFORE
fetch(csvUrl)

// AFTER
cachedFetch(csvUrl)
```

That's it — 5 one-word replacements. The `.then()` chains after each `fetch` stay exactly the same because `cachedFetch` returns a `Response` object just like `fetch` does.

---

## How to Verify

1. Open the site in a browser and open **DevTools → Network** tab
2. Load the homepage — you should see a network request to `docs.google.com`
3. Navigate to another page that loads articles (e.g., Features) — the `docs.google.com` request should **NOT** appear (served from cache)
4. Open **DevTools → Application → Local Storage** — you should see entries starting with `cache_https://docs.google.com/...`
5. On the Distance Challenge page, switch the year dropdown back and forth — previously loaded years should load instantly
6. To test expiry: temporarily change the TTL to `10000` (10 seconds) in `cache.js`, load a page, wait 10 seconds, reload — it should re-fetch

---

## Notes

- This doesn't change any data processing logic, only how the CSV text is retrieved
- If something looks broken, check the browser console for errors — the most likely issue would be `cachedFetch is not defined`, which means `cache.js` wasn't included before the other scripts on that page
- To force a fresh fetch during development, run `localStorage.clear()` in the browser console
