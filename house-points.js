const Houses = ["Swarm", "Gator Nation", "Blue Tang", "Wolfpack"];

const HOUSECOLORS = {
    "Swarm": "rgba(255, 214, 109, 0.7)",
    "Blue Tang": "rgba(74, 183, 255, 0.7)",
    "Wolfpack": "rgba(112, 115, 115, 0.7)",
    "Gator Nation": "rgba(18, 178, 21, 0.7)"
};

function getHousePointsData(logs) {
    const types = new Set();

    logs.forEach(log => {

        if (log.Type) types.add(log.Type.trim());
    });

    return {
        types: Array.from(types).sort()
    };
}

function main(logs) {
    const container = document.getElementById("main");
    container.innerHTML = "";

    populateTypeSelect(logs, "All");

    const leaderboardWrapper = document.createElement("div");
    leaderboardWrapper.id = "leaderboard-wrapper";
    container.appendChild(leaderboardWrapper);
    createLeaderboard(logs, leaderboardWrapper);

    const bottomWrapper = document.createElement("div");
    bottomWrapper.id = "bottomWrapper";
    container.appendChild(bottomWrapper);

    const logWrapper = document.createElement("div");
    bottomWrapper.appendChild(logWrapper);
    createLogTable(logs, logWrapper);

    const chartsWrapper = document.createElement("div");
    chartsWrapper.id = "chartsWrapper";
    bottomWrapper.appendChild(chartsWrapper);
    createCharts(logs, chartsWrapper);

    const selectElement = document.getElementById("typeSelect");
    selectElement.onchange = () => {
        createLogTable(logs, logWrapper, selectElement.value);
    };

    const yearSelect = document.getElementById("yearSelect");
    yearSelect.onchange = () => {
        loadHousePointsData(yearSelect.value, main);
    };
}


// FUNCTIONS

function populateTypeSelect(logs, selectedType) {
    const typeSelect = document.getElementById("typeSelect");
    typeSelect.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All Types";
    typeSelect.appendChild(allOption);

    const types = getHousePointsData(logs).types;

    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });

    typeSelect.value = selectedType;
}

function createLeaderboard(logs, container = document.getElementById("main")) {
    const leaderboardWrapper = document.createElement("div");
    leaderboardWrapper.classList.add("table-wrapper");
    leaderboardWrapper.innerHTML = "";

    const leaderboardTable = document.createElement("table");
    leaderboardTable.id = "leaderboard-table";
    leaderboardTable.innerHTML = "";

    const leaderboardBody = document.createElement("tbody");
    leaderboardBody.id = "leaderboard-body";
    leaderboardBody.innerHTML = "";

    let columns = ["Rank", "House", "Total Points"];

    const typeColumns = getHousePointsData(logs).types;

    typeColumns.forEach(column => {
        columns.push(column);
    })

    console.log(columns)

    const allStats = getHouseStats(logs);

    const houseStats = Houses.map(house => ({
        name: house,
        ...allStats[house]
    }));

    houseStats.sort((a, b) => b.totalPoints - a.totalPoints);

    const leaderboardThead = document.createElement("thead");

    const leaderboardHeaderRow = document.createElement("tr");
    leaderboardHeaderRow.id = "tableHeader";
    leaderboardHeaderRow.innerHTML = "";

    columns.forEach(column => {
        const th = document.createElement("th");
        th.textContent = column;
        leaderboardHeaderRow.appendChild(th);
    });

    houseStats.forEach((house, index) => {
        const tr = document.createElement("tr");
        tr.classList.add("log-table-row");

        columns.forEach(col => {
            const td = document.createElement("td");
            switch (col) {
                case "Rank":
                    td.textContent = index + 1;

                    if (index + 1 === 1) {
                        tr.style.backgroundColor = "rgba(255, 215, 0, 0.5)";
                    } else if (index + 1 === 2) {
                        tr.style.backgroundColor = "rgba(192, 192, 192, 0.4)"; 
                    } else if (index + 1 === 3) {
                        tr.style.backgroundColor = "rgba(205, 127, 50, 0.3)"; 
                    }
                    break;
                case "House":
                    td.textContent = house.name;
                    break;
                case "Total Points":
                    td.textContent = house.totalPoints;
                    break;
                case "Intramurals":
                    td.textContent = house.intramuralsPoints;
                    highlightIfMax(td, houseStats, "intramuralsPoints");
                    break;
                case "Assembly":
                    td.textContent = house.assemblyPoints;
                    highlightIfMax(td, houseStats, "assemblyPoints");
                    break;
                case "Miscellaneous":
                    td.textContent = house.miscellaneousPoints;
                    highlightIfMax(td, houseStats, "miscellaneousPoints");
                    break;
                case "Pillar Day":
                    td.textContent = house.pillarPoints;
                    highlightIfMax(td, houseStats, "pillarPoints");
                    break;
                case "SA Event":
                    td.textContent = house.saPoints;
                    highlightIfMax(td, houseStats, "saPoints");
                    break;
                case "Exact Path":
                    td.textContent = house.exactPoints;
                    highlightIfMax(td, houseStats, "exactPoints");
                    break;
                case "Primacy 12":
                    td.textContent = house.primacy12Points;
                    highlightIfMax(td, houseStats, "primacy12Points");
                    break;
            }
            tr.appendChild(td);
        })
        leaderboardBody.appendChild(tr);
    })

    leaderboardThead.appendChild(leaderboardHeaderRow);

    leaderboardTable.appendChild(leaderboardThead);
    leaderboardTable.appendChild(leaderboardBody);
    leaderboardWrapper.appendChild(leaderboardTable);
    container.appendChild(leaderboardWrapper);
}

function highlightIfMax(td, houseStats, key) {
    const max = Math.max(...houseStats.map(h => h[key]));
    if (parseFloat(td.textContent) === max) {
        td.style.color = "rgba(80, 170, 20, 1)";
    }
}

function createLogTable(logs, container, selectedType = "All") {
    const existingWrapper = container.querySelector(".log-table-wrapper");
    if (existingWrapper) existingWrapper.remove();

    const logWrapper = document.createElement("div");
    logWrapper.classList.add("table-wrapper", "log-table-wrapper");
    logWrapper.innerHTML = "";

    const logTable = document.createElement("table");
    logTable.id = "log-table";
    logTable.innerHTML = "";

    const logBody = document.createElement("tbody");
    logBody.id = "log-body";
    logBody.innerHTML = "";

    const columns = ["Date", "Event", "Blue Tang", "Swarm", "Gator Nation", "Wolfpack"];

    const logThead = document.createElement("thead");

    const logHeaderRow = document.createElement("tr");
    logHeaderRow.id = "tableHeader";
    logHeaderRow.innerHTML = "";
    columns.forEach(column => {
        const th = document.createElement("th");
        th.textContent = column;
        logHeaderRow.appendChild(th);
    });

    let filteredLogs = logs;
    if (selectedType && selectedType !== "All") {
        filteredLogs = logs.filter(log => (log.Type || log.type) === selectedType);
    }

    const sortedLogs = filteredLogs.slice().sort((a, b) => {
        const dateA = new Date(a.Date || a.date);
        const dateB = new Date(b.Date || b.date);
        return dateB - dateA;
    });

    sortedLogs.forEach(log => {
        const tr = document.createElement("tr");
        tr.classList.add("log-table-row");

        columns.forEach(col => {
            const td = document.createElement("td");
            switch (col) {
                case "Date": 
                    const dateObj = new Date(log.Date || log.date);
                    td.textContent = dateObj.toLocaleDateString("en-US", {
                        month: "numeric",
                        day: "numeric"
                    });
                    break;
                case "Event": td.textContent = log.Event; break;
                case "Type": td.textContent = log.Type; break;
                case "Blue Tang": 
                    td.textContent = log["Blue Tang"]; 
                    td.style.background = HOUSECOLORS["Blue Tang"];
                    break;
                case "Swarm": 
                    td.textContent = log.Swarm; 
                    td.style.background = HOUSECOLORS["Swarm"];
                    break;
                case "Wolfpack": 
                    td.textContent = log.Wolfpack; 
                    td.style.background = HOUSECOLORS["Wolfpack"];
                    break;
                case "Gator Nation": 
                    td.textContent = log["Gator Nation"]; 
                    td.style.background = HOUSECOLORS["Gator Nation"];
                    break;
            }
            tr.appendChild(td);
        })
        logBody.appendChild(tr);
    })

    logThead.appendChild(logHeaderRow);

    logTable.appendChild(logThead);
    logTable.appendChild(logBody);
    logWrapper.appendChild(logTable);
    container.appendChild(logWrapper);
}

function createCharts(logs, container) {
    const existingWrapper = container.querySelector("#chart-wrapper");
    if (existingWrapper) existingWrapper.remove();

  const wrapper = document.createElement("div");
  wrapper.id = "chart-wrapper";

  const stats = getHouseStats(logs);
  const totalPointsData = Houses.map(h => stats[h].totalPoints);
  const backgroundColor = Houses.map(h => HOUSECOLORS[h] || "#ccc");

  const totalCanvas = document.createElement("canvas");
  totalCanvas.classList.add("chart")
  totalCanvas.id = "total-canvas";

  new Chart(totalCanvas, {
    type: "bar",
    data: {
      labels: Houses,
      datasets: [{
        label: "Total Points",
        data: totalPointsData,
        backgroundColor: backgroundColor,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: "Total Points per House" },
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 10 } }
      }
    }
  });
  wrapper.appendChild(totalCanvas);

  const cumulativeCanvas = document.createElement("canvas");
  cumulativeCanvas.classList.add("chart");
  cumulativeCanvas.id = "cumulative-canvas";

  const sortedLogs = logs
    .filter(log => log.Date || log.date)
    .slice()
    .sort((a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date));

  const cumulative = {};
  Houses.forEach(h => (cumulative[h] = 0));

  const dateLabels = [];
  const cumulativeData = Houses.map(() => []);

    const cumulativeDatasets = Houses.map((house, i) => ({
        label: house,
        data: cumulativeData[i],
        borderColor: HOUSECOLORS[house],
        backgroundColor: HOUSECOLORS[house],
        tension: 0.3,
        fill: false,
        borderWidth: 2,
        pointRadius: 1
    }));

  sortedLogs.forEach(log => {
    const date = new Date(log.Date || log.date);
    const dateLabel = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    dateLabels.push(dateLabel);

    Houses.forEach((house, i) => {
      const points = parseFloat(log[house]) || 0;
      cumulative[house] += points;
      cumulativeData[i].push(cumulative[house]);
    });
  });

  new Chart(cumulativeCanvas, {
    type: "line",
    data: {
      labels: dateLabels,
      datasets: cumulativeDatasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: "Cumulative House Points Over Time" },
        legend: { position: "bottom" }
      },
      scales: {
        x: {
          title: { display: true, text: "Date" },
          ticks: { autoSkip: true, maxTicksLimit: 10 }
        },
        y: {
          title: { display: true, text: "Total Points" },
          beginAtZero: true
        }
      },
      elements: {
        line: { tension: 0.3 },
        point: { radius: 0 }
      }
    }
  });

  wrapper.appendChild(cumulativeCanvas);

  const typeChartCanvas = document.createElement("canvas");
  typeChartCanvas.classList.add("chart");
  typeChartCanvas.id = "type-canvas";

  const types = getHousePointsData(logs).types;
  const typeColors = {
    "Assembly": "#7db4ff",
    "Intramurals": "#ffb84d",
    "Pillar Day": "#9b89b3",
    "SA Event": "#ff7f7f",
    "Miscellaneous": "#a7c957",
    "Exact Path": "#ffd166",
    "Primacy 12": "#70a1d7"
  };

  const datasets = types.map(type => ({
    label: type,
    data: Houses.map(house => {
      const s = stats[house];
      switch (type) {
        case "Assembly": return s.assemblyPoints;
        case "Miscellaneous": return s.miscellaneousPoints;
        case "SA Event": return s.saPoints;
        case "Pillar Day": return s.pillarPoints;
        case "Intramurals": return s.intramuralsPoints;
        case "Exact Path": return s.exactPoints;
        case "Primacy 12": return s.primacy12Points;
        default: return 0;
      }
    }),
    backgroundColor: typeColors[type] || "rgba(180,180,180,0.6)"
  }));

  new Chart(typeChartCanvas, {
    type: "bar",
    data: {
      labels: Houses,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: "Points Breakdown by Type" },
        legend: { position: "bottom" }
      },
      scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true }
      }
    }
  });
  wrapper.appendChild(typeChartCanvas);

  container.appendChild(wrapper);
}


function getHouseStats(logs) {
    const housesStats = {
        Swarm: {totalPoints: 0, assemblyPoints: 0, miscellaneousPoints: 0, saPoints: 0, pillarPoints: 0, intramuralsPoints: 0, exactPoints: 0, primacy12Points: 0},
        "Blue Tang": {totalPoints: 0, assemblyPoints: 0, miscellaneousPoints: 0, saPoints: 0, pillarPoints: 0, intramuralsPoints: 0, exactPoints: 0, primacy12Points: 0},
        "Gator Nation": {totalPoints: 0, assemblyPoints: 0, miscellaneousPoints: 0, saPoints: 0, pillarPoints: 0, intramuralsPoints: 0, exactPoints: 0, primacy12Points: 0},
        Wolfpack: {totalPoints: 0, assemblyPoints: 0, miscellaneousPoints: 0, saPoints: 0, pillarPoints: 0, intramuralsPoints: 0, exactPoints: 0, primacy12Points: 0},
    }

    logs.forEach(log => {
        Houses.forEach(house => {
            const points = parseFloat(log[house]) || 0;
            const stats = housesStats[house];
            stats.totalPoints += points;

            switch (log.type || log.Type) {
                case "Assembly":
                stats.assemblyPoints += points;
                    break;
                case "Miscellaneous":
                    stats.miscellaneousPoints += points;
                    break;
                case "SA Event":
                    stats.saPoints += points;
                    break;
                case "Pillar Day":
                    stats.pillarPoints += points;
                    break;
                case "Intramurals":
                    stats.intramuralsPoints += points;
                    break;
                case "Exact Path":
                    stats.exactPoints += points;
                    break;
                case "Primacy 12":
                    stats.primacy12Points += points;
                    break;
            }
        })
    });
    return housesStats;
}

function loadHousePointsData(year, callback) {
    let csvUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRMXMR13uMKs85VZrY8PoCDnR3Mnc6KVhUpz6V16cCt8y-MMP2MMuYonpTKFUFGfDvFGkcu279PlgPX/pub?output=csv&gid=${getGidForYear(year)}`

    cachedFetch(csvUrl)
        .then(response => response.text())
        .then(csvText => {
            const lines = csvText.trim().split("\n");
            const header = lines[0].trim().split(",");

            const logs = lines.slice(1).map(line => {
                const values = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
                const log = {};

                header.forEach((h, i) => {
                    let value = values[i]?.trim();

                    if (value?.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                    }
                    const num = parseFloat(value);
                    if (!isNaN(num) && ["Swarm", "Gator Nation", "Blue Tang", "Wolfpack"].includes(h)) {
                        log[h] = num;
                    } else {
                        log[h] = value;
                    }
                });
                return log;
            });

            if (callback) callback(logs);
        })
        .catch(err => console.error("Error loading data:", err));
}

function getGidForYear(year) {
    const gidMap = {
        2024: "1071412901",
        2025: "220836755",
    };
    return gidMap[year] || "220836755";
}

document.addEventListener("DOMContentLoaded", () => {
    const yearSelect = document.getElementById("yearSelect");
    loadHousePointsData(yearSelect.value, main);
});