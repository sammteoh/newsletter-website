function createHouseDistanceRankTable() {
    const data = rankCategories("House", "totalDistance");

    const columns = [
        { label: "", key: "rank" },
        { label: "House", key: "name" },
        { label: "Distance", key: "metricValue" },
    ];

    const houseDistanceContainer = document.createElement("div");
    houseDistanceContainer.classList.add("house-rank-table-container");
    houseDistanceContainer.id = "house-distance-container";

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.classList.add("house-rank-table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    columns.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col.label;
        th.style.padding = "13px 12px";
        th.style.textAlign = col.key === "rank" ? "right" : "left";
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    data.forEach(rowData => {
        const row = document.createElement("tr");
        if (rowData.rank === 1) {
            row.style.backgroundColor = "rgba(255, 215, 0, 0.5)";
        }

        columns.forEach(col => {
            const td = document.createElement("td");
            td.style.padding = "13px 12px";

            if (col.key === "metricValue") {
                const val = parseFloat(rowData.improvement);

                const distanceSpan = document.createElement("span");
                distanceSpan.textContent = parseFloat(rowData[col.key]).toFixed(2) + " km ";

                const improvementSpan = document.createElement("span");
                improvementSpan.textContent = (val >= 0 ? "+" : "") + val.toFixed(1) + "%";
                improvementSpan.style.color = val >= 0 ? "rgb(80, 170, 20)" : "rgb(238, 75, 43)";

                td.appendChild(distanceSpan);
                td.appendChild(improvementSpan);
            } else if (col.key === "improvement") {
                const val = parseFloat(rowData[col.key]);
                td.textContent = val.toFixed(1) + "%";
                td.style.color = val >= 0 ? "green" : "red";
            } else if (col.key === "rank") {
                td.textContent = rowData.rank;
                td.style.textAlign = "right";
            } else {
                td.textContent = rowData[col.key];
            }

            row.appendChild(td);
        });

        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    houseDistanceContainer.appendChild(table);

    return houseDistanceContainer;
}

function createStudentDistanceRankTable() {
    const topStudents = rankHomeTable(students).slice(0, 5);
    

    const columns = [
        { label: "", key: "rank"},
        { label: "Name", key: "name" }, 
        { label: "Distance", key: "totalDistance" }, 
    ];

    const studentDistanceContainer = document.createElement("div");
    studentDistanceContainer.classList.add("house-rank-table-container");
    studentDistanceContainer.id = "house-distance-container";

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.classList.add("house-rank-table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    columns.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col.label;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    topStudents.forEach(rowData => {
        const row = document.createElement("tr");

        if (rowData.rank === 1) {
            row.style.backgroundColor = "rgba(255, 215, 0, 0.5)";
        } else if (rowData.rank === 2) {
            row.style.backgroundColor = "rgba(192, 192, 192, 0.4)"; 
        } else if (rowData.rank === 3) {
            row.style.backgroundColor = "rgba(205, 127, 50, 0.3)"; 
        }

        columns.forEach(col => {
            const td = document.createElement("td");
            td.style.padding = "13px 12px";

            if (col.key === "name") {
                value = rowData[col.key]; 
                td.textContent = value;  
            } else if (col.key === "totalDistance") {
                const val = parseFloat(rowData.improvement);

                const distanceSpan = document.createElement("span");
                distanceSpan.textContent = parseFloat(rowData[col.key]).toFixed(2) + " km ";

                const improvementSpan = document.createElement("span");
                improvementSpan.textContent = (val >= 0 ? "+" : "") + val.toFixed(1) + "%";
                improvementSpan.style.color = val >= 0 ? "rgb(80, 170, 20)" : "rgb(238, 75, 43)";

                td.appendChild(distanceSpan);
                td.appendChild(improvementSpan);
            } else if (col.key === "rank") {
                let rankText = rowData.rank;

                if (rowData.previousRank != null) {
                    if (rowData.rank < rowData.previousRank) {
                        rankText = "▲ " + rowData.rank;
                        td.style.color = "rgba(80, 170, 20, 1)";
                    } else if (rowData.rank > rowData.previousRank) {
                        rankText = "▼ " + rowData.rank;
                        td.style.color = "rgba(238, 75, 43, 1)";
                    }
                }     
                td.textContent = rankText;
                td.style.textAlign = "right";

            } else {
                td.textContent = rowData[col.key];
            }
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    studentDistanceContainer.appendChild(table);

    return studentDistanceContainer;
}



function createGameCard(game) {
    const gameCard = document.createElement("div");
    gameCard.classList.add("intramurals-game-card");

    const house1Winner = game.Points1 > game.Points2;
    const house2Winner = game.Points2 > game.Points1;

    const gamesTable = document.createElement("table");
    gamesTable.classList.add("game-summary");
    gamesTable.innerHTML = `
        <thead>
            <tr>
                <th colspan="5">${game.Sport} - ${game.Date}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="house-1-row" style="background-color: ${house1Winner ? 'rgba(255, 215, 0, 0.5)' : 'transparent'}">
                <td class="house-1">${game.House1}</td>
                <td class="vs">-</td>
                <td class="score">${game.Points1}</td>
            </tr>
            <tr class="house-2-row" style="background-color: ${house2Winner ? 'rgba(255, 215, 0, 0.5)' : 'transparent'}">
                <td class="house-2">${game.House2}</td>
                <td class="vs">-</td>
                <td class="score">${game.Points2}</td>
            </tr>
        </tbody>
    `;

    gameCard.appendChild(gamesTable);

    return gameCard;
}

function createHouseRankTable(selectedSport) {
    const houseRankTableContainer = document.createElement("div");
    houseRankTableContainer.classList.add("house-rank-table-container");

    const sportTitleContainer = document.createElement("div");
    sportTitleContainer.innerHTML = `<p class="title">${selectedSport}</p>`

    const houseTable = document.createElement("table");
    houseTable.classList.add("house-rank-table");
    houseTable.id = "houseRankTable";
    houseTable.innerHTML = "";

    const houseBody = document.createElement("tbody");
    houseBody.id = "houseRankBody";
    houseBody.innerHTML = "";

    const houses = getSportsMetaData(games).houses;

    const houseColumns = ["", "House", "Wins", "Losses"];

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
                case "": td.textContent = index + 1; break;
                case "House": td.textContent = stats.house; break;
                case "Total Games": td.textContent = stats.totalGames; break;
                case "Wins": 
                    td.textContent = stats.wins; 
                    if (stats.wins > stats.losses) td.style.color = "rgb(80, 170, 20)";
                    break;
                case "Losses": 
                    td.textContent = stats.losses; 
                    if (stats.losses > stats.wins) td.style.color = "rgb(238, 75, 43)";
                    break;
            }
            tr.appendChild(td);
        });
        houseBody.appendChild(tr);
    });

    const thead = document.createElement("thead");
    thead.appendChild(houseHeadRow);
    houseTable.appendChild(thead);
    houseTable.appendChild(houseBody);

    houseRankTableContainer.appendChild(sportTitleContainer);
    houseRankTableContainer.appendChild(houseTable);

    return houseRankTableContainer;
}

function renderIntramuralsPage() {   
    games.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    
    const container = document.getElementById("intramurals-page");
    if (!container) return; 

    container.classList.add("main-container");
    container.innerHTML = "";

    const updatesContainer = document.createElement("div");
    updatesContainer.id = "intramurals-updates-container";

    const firstRowContainer = document.createElement("div");
    firstRowContainer.classList.add("row-container")

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("intramurals-left-container");

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("intramurals-right-container");

    const gameRow = document.createElement("div");
    gameRow.id = "recent-games-row";

    const secondRowContainer = document.createElement("div");
    secondRowContainer.classList.add("second-row-container");

    const secondLeftContainer = document.createElement("div");
    secondLeftContainer.classList.add("intramurals-left-container");

    const secondRightContainer = document.createElement("div");
    secondRightContainer.classList.add("intramurals-right-container");

    const thirdRowContainer = document.createElement("div");
    thirdRowContainer.classList.add("section-five-article-container");

    const loggedDate = getMostRecentDistanceDate();

    // CREATE UPDATES SECTION

    const { topStudents } = createTopStudents(3, s => s.totalDistance);

    const updatesRow = document.createElement("div");
    updatesRow.id = "top-runners-row";

    const dcSnapshot = document.createElement("div");
    dcSnapshot.classList.add("runner-card");

    dcSnapshot.innerHTML = `
        <p>
            <strong>Last Updated</strong>
            <span class="logged-date">${loggedDate}</span>
        </p>
    `

    updatesRow.appendChild(dcSnapshot);

    topStudents.forEach(student => {
        const card = document.createElement("div");
        card.classList.add("runner-card");

        const improvement = student.improvement;
        const improvementColor = improvement >= 0 ? "rgba(80, 170, 20, 1)" : "rgba(238, 75, 43, 1)";
  
        card.innerHTML = `
            <p>
                <strong>${student.name}</strong>
                <span class="distance">${student.totalDistance.toFixed(2)} km</span>
                <span class="improvement" style="color: ${improvementColor};">
                    ${improvement >= 0 ? "+" : ""}${improvement.toFixed(1)}%
                </span>
            </p>
        `;

        updatesRow.appendChild(card);
    });

    const fullOverview = document.createElement("div");
    fullOverview.classList.add("runner-card");

    fullOverview.innerHTML = `
        <p><a href="distance-challenge.html" class="full-overview-link">
            Full Overview →
        </a></p>
    `;

    updatesRow.appendChild(fullOverview);
    updatesContainer.appendChild(updatesRow);

    // CREATE FIRST ROW

    const filteredArticles = sortedArticles.filter(article => article.category === "Intramurals");
    const featureArticle = filteredArticles[0];
    const featureArticleContainer = document.createElement("div");
    featureArticleContainer.classList.add("feature-article-container");

    const featureArticleCard = document.createElement("div")
    featureArticleCard.classList.add("feature-article-card");
    featureArticleCard.classList.add("article-card");

    featureArticleCard.innerHTML = `
        ${featureArticle.image ? `<img src="${featureArticle.image}" alt="${featureArticle.title}" class="image">` : ""}
        <h3><a href="article.html?id=${featureArticle.id}">${featureArticle.title}</a></h3>
        <p><em>${featureArticle.author} • ${featureArticle.date}</em></p>
        <p>${sliceWords(featureArticle.content, 20)}</p>            
    `

    featureArticleContainer.appendChild(featureArticleCard);

    featureArticleContainer.addEventListener("click", () => {
        window.location.href = `article.html?id=${featureArticle.id}`;
    });

    const sideArticles = filteredArticles.slice(2, 5);
    const sideArticlesContainer = document.createElement("div");
    sideArticlesContainer.classList.add("side-articles-container");

    sideArticles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("side-article-card");
        articleCard.classList.add("article-card");
        articleCard.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
            <p>${sliceWords(article.content, 15)}</p>            
        `

        articleCard.addEventListener("click", () => {
            window.location.href = `article.html?id=${article.id}`;
        });

        sideArticlesContainer.appendChild(articleCard);
    })
    
    leftContainer.appendChild(featureArticleContainer);
    leftContainer.appendChild(sideArticlesContainer);

    // HOUSE TABLE

    const mostRecentSports = [...new Set(games.map(g => g.Sport))].slice(0, 2);
     
    mostRecentSports.forEach(sport => {
        const houseTable = createHouseRankTable(sport)
        rightContainer.appendChild(houseTable);
    })
    
    firstRowContainer.appendChild(leftContainer);
    firstRowContainer.appendChild(rightContainer);

    // GAME CARD

    const recentGames = games.slice(0, 5);

    recentGames.forEach(game => {
        const gameCard = createGameCard(game);
        gameRow.appendChild(gameCard);
    })

    // SECOND ROW

    const secondFeatureArticle = filteredArticles[1];
    const secondFeatureArticleContainer = document.createElement("div");
    secondFeatureArticleContainer.classList.add("feature-article-container");

    const secondFeatureArticleCard = document.createElement("div")
    secondFeatureArticleCard.classList.add("feature-article-card");
    secondFeatureArticleCard.classList.add("article-card");

    secondFeatureArticleCard.innerHTML = `
        ${secondFeatureArticle.image ? `<img src="${secondFeatureArticle.image}" alt="${secondFeatureArticle.title}" class="image">` : ""}
        <h3><a href="article.html?id=${secondFeatureArticle.id}">${secondFeatureArticle.title}</a></h3>
        <p><em>${secondFeatureArticle.author} • ${secondFeatureArticle.date}</em></p>
        <p>${sliceWords(secondFeatureArticle.content, 20)}</p>            
    `

    secondFeatureArticleContainer.appendChild(secondFeatureArticleCard);

    secondFeatureArticleContainer.addEventListener("click", () => {
        window.location.href = `article.html?id=${secondFeatureArticle.id}`;
    });

    const secondSideArticles = filteredArticles.slice(5, 8);
    const secondSideArticlesContainer = document.createElement("div");
    secondSideArticlesContainer.classList.add("side-articles-container");

    secondSideArticles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("side-article-card");
        articleCard.classList.add("article-card");
        articleCard.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
            <p>${sliceWords(article.content, 15)}</p>            
        `

        articleCard.addEventListener("click", () => {
            window.location.href = `article.html?id=${article.id}`;
        });

        secondSideArticlesContainer.appendChild(articleCard);
    })
    
    secondLeftContainer.appendChild(secondFeatureArticleContainer);
    secondLeftContainer.appendChild(secondSideArticlesContainer);

    const houseDistanceTable = createHouseDistanceRankTable();
    const studentDistanceTable = createStudentDistanceRankTable();
    secondRightContainer.appendChild(houseDistanceTable);
    secondRightContainer.appendChild(studentDistanceTable);

    secondRowContainer.appendChild(secondLeftContainer);
    secondRowContainer.appendChild(secondRightContainer);

    // THIRD ROW

    const thirdRowArticles = filteredArticles.slice(8, 13);
    thirdRowArticles.forEach(article => {
        thirdRowContainer.appendChild(createArticleCard(article, "five-section-article"));
    })


    container.appendChild(updatesContainer);
    container.appendChild(firstRowContainer);
    container.appendChild(gameRow);
    container.appendChild(secondRowContainer);
    container.appendChild(thirdRowContainer);

    container.addEventListener("click", e => {
        const card = e.target.closest(".article-card");
        if (!card) return;
        const link = card.querySelector("h3 a");
        if (link) window.location.href = link.href;
    });

}

function loadAllData(year, callback) {
    let sportsLoaded = false;
    let distanceLoaded = false;

    loadData(year, "full year", data => {
        distanceData = data;
        distanceLoaded = true;
        if (sportsLoaded) callback();
    });

    loadSportsData(year, loadedGames => {
        games = loadedGames;
        sportsLoaded = true;
        if (distanceLoaded) callback();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadAllData(2025, renderIntramuralsPage);
});
