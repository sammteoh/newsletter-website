loadSportsData(2025, (loadedGames) => {
    games = loadedGames;
    createHomeTable(games, "All");
});
