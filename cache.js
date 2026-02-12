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