const houseRankHistory = {}; 

// ---------------- FUNCTIONS -------------------

function getSportsMetaData(games) {
    const sports = new Set();
    const houses = new Set();
    const players = new Set();

    games.forEach(game => {
        if (game.Sport) sports.add(game.Sport.trim());

        if (game.House1) houses.add(game.House1.trim());
        if (game.House2) houses.add(game.House2.trim());

        const allPlayers = [
            ...(game.Stars1 || []),
            ...(game.Stars2 || []),
            ...(game.Sub1 || []),
            ...(game.Sub2 || [])
        ]

        allPlayers.forEach(player => {
            if (player && player.trim() !== "") players.add(player.trim());
        });
    });

    return {
        sports: Array.from(sports).sort(),
        houses: Array.from(houses).sort(),
        players: Array.from(players).sort(),
    };
}

function filterStudents(games, playerName, sport = null) {
    const filtered = games.filter(game => {
        const allPlayers = [
            ...(game.Stars1 || []),
            ...(game.Stars2 || []),
            ...(game.Sub1 || []),
            ...(game.Sub2 || [])
        ];
        const matchPlayer = allPlayers.includes(playerName);
        const matchSport = sport ? game.Sport.toLowerCase() === sport.toLowerCase() : true;
        return matchPlayer && matchSport;
    });

    return filtered;
}

function filterHouses(games, house, sport = null) {
    const filtered = games.filter(g => {
        const matchHouse = g.House1 === house || g.House2 === house;
        const matchSport = sport ? g.Sport.toLowerCase() === sport.toLowerCase() : true;
        return matchHouse && matchSport;
    });

    return filtered;
}

function formatPlayers(list, label) {
  if (!list || !list.length) return "";
  return `
    <div class="player-group">
      <strong>${label}</strong>
      ${list.map(p => `<div class="player-name">${p}</div>`).join("")}
    </div>
  `;
}
// ---------------- STUDENT FUNCTIONS ---------------------

function getPlayerStats(games, playerName, sport = null) {
    filtered = filterStudents(games, playerName, sport);

    const totalGames = filtered.length;

    let wins = 0;
    let losses = 0;
    let totalPoints = 0;
    let pointDiff = 0;

    filtered.forEach(g => {
        if (g.Stars1.includes(playerName) || g.Sub1.includes(playerName)) {
            totalPoints += g.Points1;
            pointDiff += g.Points1 - g.Points2;
            if (g.Outcome1.toLowerCase() === "win") wins++;
            if (g.Outcome1.toLowerCase() === "loss") losses++;
        }
        if (g.Stars2.includes(playerName) || g.Sub2.includes(playerName)) {
            totalPoints += g.Points2;
            pointDiff += g.Points2 - g.Points1;
            if (g.Outcome2.toLowerCase() === "win") wins++;
            if (g.Outcome2.toLowerCase() === "loss") losses++;
        }
    });

    const winRate = totalGames === 0 ? "0%" : ((wins / totalGames) * 100).toFixed(1) + "%";
    const avgPoints = totalGames === 0 ? 0 : (totalPoints / totalGames).toFixed(1);
    const avgPointDiff = totalGames === 0 ? 0 : (pointDiff / totalGames).toFixed(1);
    const score = getPlayerRanking(games, playerName, sport).score.toFixed(1);

    return {
    player: playerName,
    sport: sport || "All",
    totalGames: totalGames,
    wins: wins,
    losses: losses,
    winRate: winRate,
    avgPoints: avgPoints,
    avgPointDiff: avgPointDiff,
    score: score
    };
}

// ---------------- HOUSE FUNCTIONS -----------------------


function getHouseStats(games, houseName, sport = null) {
    const filtered = filterHouses(games, houseName, sport);

    const totalGames = filtered.length;

    let wins = 0;
    let losses = 0;
    let totalPoints = 0;
    let pointDiff = 0;

    filtered.forEach(g => {
        if (g.House1 === houseName) {
            totalPoints += g.Points1;
            pointDiff += g.Points1 - g.Points2;
            if (g.Outcome1.toLowerCase() === "win") wins++;
            if (g.Outcome1.toLowerCase() === "loss") losses++;
        }
        if (g.House2 === houseName) {
            totalPoints += g.Points2;
            pointDiff += g.Points2 - g.Points1;
            if (g.Outcome2.toLowerCase() === "win") wins++;
            if (g.Outcome2.toLowerCase() === "loss") losses++;
        }
    });

    const winRate = totalGames === 0 ? "0%" : ((wins / totalGames) * 100).toFixed(1) + "%";
    const avgPoints = totalGames === 0 ? 0 : (totalPoints / totalGames).toFixed(1);
    const avgPointDiff = totalGames === 0 ? 0 : (pointDiff / totalGames).toFixed(1);
    const score = getHouseRanking(games, houseName, sport).score.toFixed(1);

    return {
    house: houseName,
    sport: sport || "All",
    score: score,
    totalGames: totalGames,
    wins: wins,
    losses: losses,
    winRate: winRate,
    avgPoints: avgPoints,
    avgPointDiff: avgPointDiff
    };
}

// RANKING

function getPlayerRanking(games, playerName, sport = null) {
    filtered = filterStudents(games, playerName, sport);

    let totalScore = 0;
    let totalPoints = 0;

    filtered.forEach(g => {
        let isStar = false;
        let isSub = false;
        let winLossPoints = 0;
        let pointDiff = 0;

         if ((g.Stars1 || []).includes(playerName)) {
                isStar = true;
                winLossPoints = g.Outcome1.toLowerCase() === "win" ? 1 :
                                g.Outcome1.toLowerCase() === "loss" ? -1 : 0;
                pointDiff = g.Points1 - g.Points2;
                totalPoints += g.Points1;
            } else if ((g.Sub1 || []).includes(playerName)) {
                isSub = true;
                winLossPoints = g.Outcome1.toLowerCase() === "win" ? 1 :
                                g.Outcome1.toLowerCase() === "loss" ? -1 : 0;
                pointDiff = g.Points1 - g.Points2;
                totalPoints += g.Points1;
            } else if ((g.Stars2 || []).includes(playerName)) {
                isStar = true;
                winLossPoints = g.Outcome2.toLowerCase() === "win" ? 1 :
                                g.Outcome2.toLowerCase() === "loss" ? -1 : 0;
                pointDiff = g.Points2 - g.Points1;
                totalPoints += g.Points2;
            } else if ((g.Sub2 || []).includes(playerName)) {
                isSub = true;
                winLossPoints = g.Outcome2.toLowerCase() === "win" ? 1 :
                                g.Outcome2.toLowerCase() === "loss" ? -1 : 0;
                pointDiff = g.Points2 - g.Points1;
                totalPoints += g.Points2;
            }

        const multiplier = isStar ? 1 : 0.7;

        totalPoints = totalPoints === 0 ? 1 : totalPoints;

        totalScore += (winLossPoints + (pointDiff / totalPoints)) * multiplier;
    });

    return { score: totalScore }
}

function getAllPlayerRankings(games, sport = null) {
    const filteredGames = sport && sport !== "All"
        ? games.filter(g => g.Sport === sport)
        : games;

    const activePlayers = new Set();
    filteredGames.forEach(g => {
        [...(g.Stars1 || []), ...(g.Sub1 || []), ...(g.Stars2 || []), ...(g.Sub2 || [])]
            .forEach(p => activePlayers.add(p));
    });

    const playerRankings = Array.from(activePlayers).map(player => ({
        player,
        score: getPlayerRanking(filteredGames, player, sport).score
    }));

    playerRankings.sort((a, b) => b.score - a.score);
    playerRankings.forEach((p, i) => {
        p.rank = i + 1;
    });

    return playerRankings;
}


function getPlayerRank(games, playerName, sport = null) {
    const allRankings = getAllPlayerRankings(games, sport);
    const result = allRankings.find(p => p.player === playerName);
    return result ? result.rank : null;
}


function getHouseRanking(games, house, sport = null) {
    filtered = filterHouses(games, house, sport);

    let totalScore = 0;
    let totalPoints = 0;

    filtered.forEach(g => {
        let winLossPoints = 0;
        let pointDiff = 0;

         if (g.House1 === house) {
                winLossPoints = g.Outcome1.toLowerCase() === "win" ? 1 :
                                g.Outcome1.toLowerCase() === "loss" ? -1 : 0;
                pointDiff = g.Points1 - g.Points2;
                totalPoints += g.Points1;
            } else if (g.House2 === house) {
                winLossPoints = g.Outcome2.toLowerCase() === "win" ? 1 :
                                g.Outcome2.toLowerCase() === "loss" ? -1 : 0;
                pointDiff = g.Points2 - g.Points1;
                totalPoints += g.Points2;
            }

        totalPoints = totalPoints === 0 ? 1 : totalPoints;

        totalScore += (winLossPoints + (pointDiff / totalPoints));
    });

    return { score: totalScore }
}

function getAllHouseRankings(games, sport = null) {
    const houses = getSportsMetaData(games).houses;

    const houseRankings = houses.map(house => ({
        house,
        score: getHouseRanking(games, house, sport).score
    }));

    houseRankings.sort((a, b) => b.score - a.score);

    houseRankings.forEach((h, i) => {
        h.rank = i + 1;
    });

    return houseRankings;
}

function getHouseRank(games, house, sport = null) {
    const allRankings = getAllHouseRankings(games, sport);
    const result = allRankings.find(h => h.house === house);
    return result ? result.rank : null;
}

// LOAD THE TABLE

function buildStudentStatsTable(games, studentName) {
    const container = document.getElementById("statsContainer");
    container.innerHTML = "";

    const { sports } = getSportsMetaData(games);

    const playerStats = sports.map(sport => getPlayerStats(games, studentName, sport))
        .filter(stat => stat.totalGames > 0);

    if (playerStats.length === 0) {
        container.innerHTML = `<p>No games found for ${studentName}</p>`;
        return;
    }

    const outerWrapper = document.createElement("div");
    outerWrapper.classList.add("student-wrapper", "slide-in");

    const wrapper = document.createElement("div");
    wrapper.classList.add("table-wrapper");

    const table = document.createElement("table");
    table.classList.add("student-stats-table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
        <th>Sport</th>
        <th>Rank</th>
        <th>Total Games</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>Win Rate</th>
        <th>Avg Points</th>
        <th>Avg Point Diff</th>
        <th>Score</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    playerStats.forEach(stat => {
        const tr = document.createElement("tr");
        tr.classList.add("table-row")
        tr.innerHTML = `
            <td>${stat.sport}</td>
            <td>${getPlayerRank(games, studentName, stat.sport)}</td>
            <td>${stat.totalGames}</td>
            <td>${stat.wins}</td>
            <td>${stat.losses}</td>
            <td>${stat.winRate}</td>
            <td>${stat.avgPoints}</td>
            <td>${stat.avgPointDiff}</td>
            <td>${stat.score}</td>
        `;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    wrapper.appendChild(table);

    const summary = document.createElement("div");
    summary.classList.add("student-summary", "slide-in");
    summary.innerHTML = `
        <h3>${studentName} — Overall Stats</h3>
    `;

    const overall = getPlayerStats(games, studentName);
    const overallTable = `
        <table class="student-overall-table">
            <tr><th>Total Games</th><td>${overall.totalGames}</td></tr>
            <tr><th>Wins</th><td>${overall.wins}</td></tr>
            <tr><th>Losses</th><td>${overall.losses}</td></tr>
            <tr><th>Win Rate</th><td>${overall.winRate}</td></tr>
            <tr><th>Avg Points</th><td>${overall.avgPoints}</td></tr>
            <tr><th>Avg Point Diff</th><td>${overall.avgPointDiff}</td></tr>
            <tr><th>Score</th><td>${overall.score}</td></tr>
        </table>
    `;
    summary.innerHTML += overallTable;

    outerWrapper.appendChild(summary);
    outerWrapper.appendChild(wrapper);

    container.appendChild(outerWrapper);

    setTimeout(() => {
        document.querySelectorAll(".slide-in").forEach(el => el.classList.add("visible"));
    }, 100);

}

function buildHouseStatsTable(games, houseName) {
    const container = document.getElementById("statsContainer");
    container.innerHTML = "";

    const { sports } = getSportsMetaData(games);

    const houseStats = sports.map(sport => getHouseStats(games, houseName, sport))
        .filter(stat => stat.totalGames > 0);

    if (houseStats.length === 0) {
        container.innerHTML = `<p>No games found for ${houseName}</p>`;
        return;
    }

    const outerWrapper = document.createElement("div");
    outerWrapper.classList.add("student-wrapper", "slide-in");

    const wrapper = document.createElement("div");
    wrapper.classList.add("table-wrapper", "slide-in");

    const table = document.createElement("table");
    table.classList.add("student-stats-table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
        <th>Sport</th>
        <th>Rank</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>Win Rate</th>
        <th>Avg Points</th>
        <th>Avg Point Diff</th>
        <th>Score</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    houseStats.forEach(stat => {
        const tr = document.createElement("tr");
        tr.classList.add("table-row")
        tr.innerHTML = `
            <td>${stat.sport}</td>
            <td>${getHouseRank(games, houseName, stat.sport)}</td>
            <td>${stat.wins}</td>
            <td>${stat.losses}</td>
            <td>${stat.winRate}</td>
            <td>${stat.avgPoints}</td>
            <td>${stat.avgPointDiff}</td>
            <td>${stat.score}</td>
        `;

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    wrapper.appendChild(table);

    const summary = document.createElement("div");
    summary.classList.add("student-summary", "slide-in");
    summary.innerHTML = `
        <h3>${houseName} — Overall Stats</h3>
    `;

    const overall = getHouseStats(games, houseName);
    const overallTable = `
        <table class="student-overall-table">
            <tr><th>Total Games</th><td>${overall.totalGames}</td></tr>
            <tr><th>Wins</th><td>${overall.wins}</td></tr>
            <tr><th>Losses</th><td>${overall.losses}</td></tr>
            <tr><th>Win Rate</th><td>${overall.winRate}</td></tr>
            <tr><th>Avg Points</th><td>${overall.avgPoints}</td></tr>
            <tr><th>Avg Point Diff</th><td>${overall.avgPointDiff}</td></tr>
            <tr><th>Score</th><td>${overall.score}</td></tr>
        </table>
    `;
    summary.innerHTML += overallTable;

    outerWrapper.appendChild(summary);
    outerWrapper.appendChild(wrapper);

    container.appendChild(outerWrapper);

    setTimeout(() => {
        document.querySelectorAll(".slide-in").forEach(el => el.classList.add("visible"));
    }, 100);

}

// REAL HOME TABLE

function createHomeTable(games, selectedSport) {
    const mainContainer = document.getElementById("sports-page-main-container");
    mainContainer.innerHTML = "";

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "sports-button-container";

    const container = document.createElement("div");
    container.id = "sports-main-container"
    container.innerHTML = "";

    const leftContainer = document.createElement("div");
    leftContainer.id = "left-container";

    const rightContainer = document.createElement("div");
    rightContainer.id = "right-container";

    const houseRankContainer = document.createElement("div");
    houseRankContainer.id = "house-rank-container";

    const playerRankContainer = document.createElement("div");
    playerRankContainer.id = "player-rank-container";

    const gamesContainer = document.createElement("div");
    gamesContainer.id = "games-container";

    const settingsContainer = document.createElement("div");
    settingsContainer.id = "settings-container";

// BUTTON CONTAINER

    const sportSelect = document.createElement("select");
    sportSelect.id = "sport-select";

    const allOption = document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All Sports";
    sportSelect.appendChild(allOption);

    const { sports } = getSportsMetaData(games);

    sports.forEach(sport => {
        const option = document.createElement("option");
        option.value = sport;
        option.textContent = sport;
        sportSelect.appendChild(option);
    });

    sportSelect.value = selectedSport;

    buttonContainer.appendChild(sportSelect);
    mainContainer.appendChild(buttonContainer);

// GAMES CONTAINER

    games.sort((a, b) => new Date(b.Date) - new Date(a.Date));

    const filteredGames = selectedSport === "All"
        ? games.slice(0, 12)
        : games.filter(game => game.Sport === selectedSport);

    filteredGames.forEach((game, index) => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const gamesTable = document.createElement("table");
        gamesTable.classList.add("game-summary");
        gamesTable.innerHTML = `
            <thead>
                <tr>
                    <th colspan="5">${game.Sport} - ${game.Date}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="house-1-row clickable">
                    <td class="house-1">${game.House1}</td>
                    <td class="vs">-</td>
                    <td class="score">${game.Points1}</td>
                </tr>
                <tr class="details-row house-1-details" style="display: none;">
                    <td colspan="5">
                        <table class="players-table">
                            <tbody>
                                <tr>
                                    <td>${formatPlayers(game.Stars1, "")}${formatPlayers(game.Sub1, "Substitutes:")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr class="house-2-row clickable">
                    <td class="house-2">${game.House2}</td>
                    <td class="vs">-</td>
                    <td class="score">${game.Points2}</td>
                </tr>
                <tr class="details-row house-2-details" style="display: none;">
                    <td colspan="5">
                        <table class="players-table">
                            <tbody>
                                <tr>
                                    <td>${formatPlayers(game.Stars2, "")}${formatPlayers(game.Sub2, "Substitute")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        `;

    gamesTable.querySelector(".house-1-row").addEventListener("click", () => {
        const detailsRow = gamesTable.querySelector(".house-1-details");
        detailsRow.style.display = detailsRow.style.display === "none" ? "table-row" : "none";
    })

    gamesTable.querySelector(".house-2-row").addEventListener("click", () => {
        const detailsRow = gamesTable.querySelector(".house-2-details");
        detailsRow.style.display = detailsRow.style.display === "none" ? "table-row" : "none";
    })

    if (game.Outcome1 === "Win") {
        gamesTable.querySelector(".house-1-row").style.backgroundColor = "rgba(255, 215, 0, 0.5)";
    } else if (game.Outcome2 === "Win") {
        gamesTable.querySelector(".house-2-row").style.backgroundColor = "rgba(255, 215, 0, 0.5)";
    }

    gameCard.appendChild(gamesTable);
    gamesContainer.appendChild(gameCard);
    })

// HOUSE RANK TABLE

    const houseTable = document.createElement("table");
    houseTable.id = "houseRankTable";
    houseTable.innerHTML = "";

    const houseBody = document.createElement("tbody");
    houseBody.id = "houseRankBody";
    houseBody.innerHTML = "";

    const houses = getSportsMetaData(games).houses;

    const houseColumns = ["Rank", "House", "Score", "Wins", "Losses", "Win Rate", "Avg Points", "Avg Point Diff"];

    const houseHeadRow = document.createElement("tr");
    houseHeadRow.id = "tableHeader";
    houseHeadRow.innerHTML = "";
    houseColumns.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col;
        houseHeadRow.appendChild(th);
    });

    const allHouseStats = houses.map(house =>
        getHouseStats(games, house, selectedSport === "All" ? null : selectedSport)
    );

    allHouseStats.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

    allHouseStats.forEach((stats, index) => {
        const tr = document.createElement("tr");
        tr.classList.add("rank-table-row");

        if (index === 0) tr.style.backgroundColor = "rgba(255, 215, 0, 0.5)";    

        houseColumns.forEach(col => {
            const td = document.createElement("td");
            switch (col) {
                case "Rank": td.textContent = index + 1; break;
                case "House": td.textContent = stats.house; break;
                case "Score": td.textContent = stats.score; break;
                case "Total Games": td.textContent = stats.totalGames; break;
                case "Wins": 
                    td.textContent = stats.wins; 
                    if (stats.wins > stats.losses) td.style.color = "rgb(80, 170, 20)";
                    break;
                case "Losses": 
                    td.textContent = stats.losses; 
                    if (stats.losses > stats.wins) td.style.color = "rgb(238, 75, 43)";
                    break;
                case "Win Rate": 
                    td.textContent = stats.winRate; 
                    
                    const winRateNum = parseFloat(stats.winRate);
                    if (winRateNum > 50) td.style.color =  "rgb(80, 170, 20)";
                    else if (winRateNum < 50) td.style.color = "rgb(238, 75, 43)";
                    break;

                case "Avg Points": td.textContent = stats.avgPoints; break;
                case "Avg Point Diff": 
                    td.textContent = stats.avgPointDiff; 
                    
                    const avgPointDiff = parseFloat(stats.avgPointDiff);
                    if (avgPointDiff > 0) td.style.color =  "rgb(80, 170, 20)";
                    else if (avgPointDiff < 0) td.style.color = "rgb(238, 75, 43)";       
                    break;
            }
            tr.appendChild(td);
            tr.addEventListener("click", () => {
                showHouseStatsPage(stats.house);
            });
        });
        houseBody.appendChild(tr);
    });

    const thead = document.createElement("thead");
    thead.appendChild(houseHeadRow);
    houseTable.appendChild(thead);
    houseTable.appendChild(houseBody);


// PLAYER RANK TABLE

    const playerTable = document.createElement("table");
    playerTable.id = "playerRankTable";
    playerTable.innerHTML = "";
    
    const tbody = document.createElement("tbody");
    tbody.id = "playerRankBody";
    tbody.innerHTML = "";

    const players = new Set();
    filteredGames.forEach(game => {
        [...(game.Stars1 || []), ...(game.Sub1 || []), ...(game.Stars2 || []), ...(game.Sub2 || [])]
            .forEach(player => players.add(player));
    });

    const columns = ["Rank", "Player", "Score", "Total Games", "Wins", "Losses", "Win Rate", "Avg Points", "Avg Point Diff"];

    const theadRow = document.createElement("tr");
    theadRow.id = "tableHeader";
    theadRow.innerHTML = "";
    columns.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col;
        th.style.cursor = "pointer";
        th.onclick = function() { sortTableByColumn(col, this); };
        theadRow.appendChild(th);
    });

    const allPlayerStats = Array.from(players).map(playerName =>
        getPlayerStats(filteredGames, playerName, selectedSport === "All" ? null : selectedSport)
    );

    allPlayerStats.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

    allPlayerStats.forEach((stats, index) => {
        const tr = document.createElement("tr");
        tr.classList.add("rank-table-row");

        if (index === 0) tr.style.backgroundColor = "rgba(255, 215, 0, 0.5)";    
        else if (index === 1) tr.style.backgroundColor = "rgba(192, 192, 192, 0.4)"; 
        else if (index === 2) tr.style.backgroundColor = "rgba(205, 127, 50, 0.3)";

        columns.forEach(col => {
            const td = document.createElement("td");
            switch (col) {
                case "Rank": td.textContent = index + 1; break;
                case "Player": td.textContent = stats.player; break;
                case "Score": td.textContent = stats.score; break;
                case "Total Games": td.textContent = stats.totalGames; break;
                case "Wins": 
                    td.textContent = stats.wins; 
                    if (stats.wins > stats.losses) td.style.color = "rgb(80, 170, 20)";
                    break;
                case "Losses": 
                    td.textContent = stats.losses; 
                    if (stats.losses > stats.wins) td.style.color = "rgb(238, 75, 43)";
                    break;
                case "Win Rate": 
                    td.textContent = stats.winRate; 
                    
                    const winRateNum = parseFloat(stats.winRate);
                    if (winRateNum > 50) td.style.color =  "rgb(80, 170, 20)";
                    else if (winRateNum < 50) td.style.color = "rgb(238, 75, 43)";
                    break;

                case "Avg Points": td.textContent = stats.avgPoints; break;
                case "Avg Point Diff": 
                    td.textContent = stats.avgPointDiff; 
                    
                    const avgPointDiff = parseFloat(stats.avgPointDiff);
                    if (avgPointDiff > 0) td.style.color =  "rgb(80, 170, 20)";
                    else if (avgPointDiff < 0) td.style.color = "rgb(238, 75, 43)";       
                    break;
            }
            tr.appendChild(td);
            tr.addEventListener("click", () => {
                showStatsPage(stats.player);
            });
        });
        tbody.appendChild(tr); 
    });

    playerTable.appendChild(theadRow);
    playerTable.appendChild(tbody);

    houseRankContainer.appendChild(houseTable);
    playerRankContainer.appendChild(playerTable);

    rightContainer.appendChild(houseRankContainer);
    rightContainer.appendChild(playerRankContainer);
    leftContainer.appendChild(gamesContainer);

    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    mainContainer.appendChild(container);

    houseRankContainer.classList.add("slide-in");
    playerRankContainer.classList.add("slide-in");
    gamesContainer.classList.add("slide-in");

    sportSelect.addEventListener("change", (e) => {
        const selectedSport = e.target.value;
        createHomeTable(games, selectedSport);
    });

    setTimeout(() => {
        document.querySelectorAll(".slide-in").forEach(el => el.classList.add("visible"));
    }, 100);
}

let currentSort = { column: null, ascending: true };

function sortTableByColumn(columnName, thElement) {
    const table = thElement.closest("table");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    const headerCells = Array.from(thElement.parentElement.children);
    const colIndex = headerCells.findIndex(th => th.textContent === columnName);
    if (colIndex === -1) return;

    let defaultAscending = columnName === "Rank";

    if (currentSort.column === columnName) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort = { column: columnName, ascending: defaultAscending };
    }

    rows.sort((a, b) => {
        const aText = a.children[colIndex].textContent.trim();
        const bText = b.children[colIndex].textContent.trim();

        const aNum = parseFloat(aText);
        const bNum = parseFloat(bText);

        let result;
        if (!isNaN(aNum) && !isNaN(bNum)) {
            result = aNum - bNum;
        } else {
            result = aText.localeCompare(bText);
        }

        return currentSort.ascending ? result : -result;
    });

    rows.forEach(row => tbody.appendChild(row));
}


function showHomePage() {
    document.getElementById("sports-page-main-container").style.display = "grid";
    document.getElementById("statsPage").style.display = "none";
    document.getElementById("sport-select").style.display = "flex";
    document.getElementById("statsContainer").innerHTML = "";
}

function showStatsPage(studentName) {
  document.getElementById("sports-page-main-container").style.display = "none";
  document.getElementById("statsPage").style.display = "block";
  document.getElementById("sport-select").style.display = "none";
  buildStudentStatsTable(games, studentName);
}

function showHouseStatsPage(houseName) {
  document.getElementById("sports-page-main-container").style.display = "none";
  document.getElementById("statsPage").style.display = "block";
  document.getElementById("sport-select").style.display = "none";
  buildHouseStatsTable(games, houseName);
}

document.getElementById("backButton").addEventListener("click", showHomePage);

// STORE THE GAMES

function loadSportsData(year, callback) {
    fetch(`sports-data-${year}.csv`)
        .then(response => response.text())
        .then(csvText => {
            const lines = csvText.trim().split("\n");
            const header = lines[0].trim().split(",");

            const games = lines.slice(1).map(line => {
                const values = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
                const game = {};

                header.forEach((h, i) => {
                    let value = values[i]?.trim();

                    if (value?.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                    }
                    const num = parseFloat(value);
                    if (!isNaN(num) && ["Points1", "Points2"].includes(h)) {
                        game[h] = num;
                    }
                    else if (["Stars1", "Stars2", "Sub1", "Sub2"].includes(h)) {
                        game[h] = value ? value.split(",").map(v => v.trim()) : [];
                    }
                    else {
                        game[h] = value;
                    }
                });

                return game;
            });

            if (callback) callback(games);
        })
        .catch(err => console.error("Error loading data:", err));
}