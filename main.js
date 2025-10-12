const params = new URLSearchParams(window.location.search);
const articleId = params.get('id');
const recentMonths = ["October", "September"];
const today = new Date();

const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

const jobOrder = ["Editor-in-Chief", "Communications Director", "Editor", "Sponsor"];

const dateElement = document.getElementById("current-date");
dateElement.textContent = formattedDate;

function sliceWords(text, number) {
  const words = text.split(/\s+/);
  return words.length > number
    ? words.slice(0, number).join(" ") + "..."
    : text;
}

function sortWritersByJob(writersList, selectedYear) {
    return writersList.slice().sort((a, b) => {
        const aJob = a.job?.find(j => j[0] === selectedYear)?.[1] || "";
        const bJob = b.job?.find(j => j[0] === selectedYear)?.[1] || "";

        return jobOrder.indexOf(aJob) - jobOrder.indexOf(bJob);
    });
}

function createArticleCard(article, className = "featured-article", wordLimit = 20, includeImage = true) {
    const card = document.createElement("div");
    card.classList.add(className);
    card.classList.add("article-card");

    const imageHTML = includeImage && article.image
        ? `<img src="${article.image}" alt="${article.title}" class="cover-image">`
        : "";

    card.innerHTML = `
        ${imageHTML}
        <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
        <p><em>${article.author} • ${article.date}</em></p>
        <p>${sliceWords(article.content, wordLimit)}</p>
    `;

    card.addEventListener("click", () => {
        window.location.href = `article.html?id=${article.id}`;
    });

    return card;
}

// RENDER ARTICLE PAGE

if (articleId) {    
    const articleData = articles.find(a => a.id === articleId);
    const writerData = writers.find(w => w.name === articleData.author);
    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    const categoryArticles = sortedArticles.filter(article => article.category === articleData.category).slice(0, 4);
    const categoryArticlesToShow = categoryArticles.filter(a => a.id !== articleData.id).slice(0, 3);

    if (articleData) {
        const mainContainer = document.getElementById("main");
        mainContainer.classList.add("main-container")
        mainContainer.innerHTML = "";

        const innerMainContainer = document.createElement("div");
        innerMainContainer.id = "article-inner-main-container";
        
        const header = document.createElement("div");
        header.id = "article-header";

        const categoryContainer = document.createElement("div");
        categoryContainer.id = "article-category-container";

        const articleTitleContainer = document.createElement("div");
        articleTitleContainer.id = "article-title-container";

        const articleSummaryContainer = document.createElement("div");
        articleSummaryContainer.id = "article-summary-container";

        const informationContainer = document.createElement("div");
        informationContainer.id = "article-information-container";

        const authorContainer = document.createElement("div");
        authorContainer.id = "article-author-container";

        const dateIssueContainer = document.createElement("div");
        dateIssueContainer.id = "article-date-issue-container";

        informationContainer.appendChild(authorContainer);
        informationContainer.appendChild(dateIssueContainer);

        header.appendChild(categoryContainer);
        header.appendChild(articleTitleContainer);
        header.appendChild(articleSummaryContainer);
        header.appendChild(informationContainer);

        if (articleData.category === "Feature") {
            categoryContainer.innerHTML = `${articleData.category.toUpperCase()}: ${articleData.feature.toUpperCase()}`;
        } else {
            categoryContainer.innerText = articleData.category.toUpperCase();
        }
        
        articleTitleContainer.innerText = articleData.title;
        authorContainer.innerText = articleData.author;
        dateIssueContainer.innerHTML = `<p>${articleData.date} | Issue ${articleData.issue}</p>`

        const imageContainer = document.createElement("div");
        imageContainer.id = "article-image-container";

        imageContainer.innerHTML = `${articleData.image ? `<img src="${articleData.image}" alt="${articleData.title}" class="cover-image">` : ""}`

        const articleContainer = document.createElement("article");
        articleContainer.id = "article-container";

        articleContainer.innerHTML = `${articleData.content}`

        const moreContainer = document.createElement("div");
        const moreTitleContainer = document.createElement("div");
        const moreArticleContainer = document.createElement("div");
        moreContainer.id = "article-more-container";
        moreTitleContainer.id = "article-more-title-container";
        moreArticleContainer.id = "article-more-article-container"
        moreTitleContainer.innerHTML = `<p>More from ${articleData.category}</p>`;

        moreContainer.appendChild(moreTitleContainer);
        moreContainer.appendChild(moreArticleContainer);

        categoryArticlesToShow.forEach(article => {
            const articleCard = document.createElement("div");
            articleCard.classList.add("article-more-article");
            articleCard.classList.add("article-card");
            articleCard.innerHTML = `
                ${article.image ? `<img src="${article.image}" alt="${article.title}" class="cover-image">` : ""}
                <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
                <p><em>${article.author} • ${article.date}</em></p>
                <p>${sliceWords(article.content, 10)}</p>            
            `

            articleCard.addEventListener("click", () => {
                window.location.href = `article.html?id=${article.id}`;
            });

            moreArticleContainer.appendChild(articleCard);
        })

        innerMainContainer.appendChild(header);
        innerMainContainer.appendChild(imageContainer);
        innerMainContainer.appendChild(articleContainer);
        innerMainContainer.appendChild(moreContainer);

        if (writerData) {
            const contributorsContainer = document.createElement("div");
            contributorsContainer.id = "contributors-container";

            const contributorsImageContainer = document.createElement("div");
            contributorsImageContainer.id = "contributors-image-container";
            contributorsImageContainer.innerHTML = `${writerData.image ? `<img src="${writerData.image}" alt="${writerData.title}" class="cover-image">` : ""}`

            const writerCard = document.createElement('div');
            writerCard.id = "article-contributor-card";

            writerCard.innerHTML = `
                <p>${writerData.bio.replace(
                    writerData.name,
                    `<a href="writer-page.html?name=${encodeURIComponent(writerData.name)}">${writerData.name}</a>`
                )}</p>
            `;

            contributorsContainer.appendChild(contributorsImageContainer);
            contributorsContainer.appendChild(writerCard);

            innerMainContainer.appendChild(contributorsContainer);
        }
        mainContainer.appendChild(innerMainContainer);
    } else {
        document.getElementById('article-content').innerHTML = "<p>Article not found.</p>";
    }
}

function renderHomePage() {
    const container = document.getElementById("features");
    container.classList.add("main-container");
    container.innerHTML = "";
    
    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";

    const leftColumnContainer = document.createElement("div");
    leftColumnContainer.id = "left-column-container"

    const rightColumnContainer = document.createElement("div");
    rightColumnContainer.id = "right-column-container";

    const schoolTitleContainer = document.createElement("div");
    schoolTitleContainer.id = "school-title-container";

    const schoolContainer = document.createElement("div");
    schoolContainer.id = "school-updates-container";

    const schoolImageContainer = document.createElement("div");
    schoolImageContainer.id = "school-image-container";

    const schoolArticlesContainer = document.createElement("div");
    schoolArticlesContainer.id = "school-updates-index";

    const intramuralsContainer = document.createElement("div");
    intramuralsContainer.id = "intramurals-container";

    const intramuralsArticlesContainer = document.createElement("div");
    intramuralsArticlesContainer.id = "intramurals-articles-container";

    const intramuralsImageContainer = document.createElement("div");
    intramuralsImageContainer.id = "intramurals-image-container";

    const topicsContainer = document.createElement("div");
    topicsContainer.id = "topics-container";

    const sectionArticleContainer = document.createElement("div");
    sectionArticleContainer.id = "section-article-container";

    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    const featureArticles = sortedArticles.filter(article => article.category === "Feature");
    const featureCoverArticles = featureArticles.slice(0, 3);
    const schoolArticles = sortedArticles.filter(article => article.category === "School Updates");
    const schoolCoverArticles = schoolArticles.slice(0, 2);
    const schoolTitleArticles = schoolArticles.slice(2, 7);
    const intramuralsArticles = sortedArticles.filter(article => article.category === "Intramurals");
    const intramuralsCoverArticles = intramuralsArticles.slice(0, 2);
    const topicsArticles = featureArticles.slice(3, 6);

    const schoolImage = document.createElement("img");
    schoolImage.src = schoolCoverArticles[0].image;
    schoolImage.classList.add("home-image");
    schoolImageContainer.appendChild(schoolImage);

    const intramuralsImage = document.createElement("img");
    intramuralsImage.src = intramuralsArticles[0].image;
    intramuralsImage.classList.add("home-image");
    intramuralsImageContainer.appendChild(intramuralsImage);

    const titleCard = document.createElement("div");
    titleCard.classList.add("article-title");
    titleCard.innerHTML = `<p><strong>School Updates</strong></p>`
    schoolTitleContainer.appendChild(titleCard);
    
    schoolTitleArticles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-title");
        articleCard.innerHTML = `<p><a href="article.html?id=${article.id}">${article.title}</a></p>`

        schoolTitleContainer.appendChild(articleCard);
    })
    
    schoolCoverArticles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("featured-article");
        articleCard.classList.add("article-card");
        articleCard.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
            <p>${sliceWords(article.content, 20)}</p>            
        `

        articleCard.addEventListener("click", () => {
            window.location.href = `article.html?id=${article.id}`;
        });

        schoolArticlesContainer.appendChild(articleCard);
    })

    intramuralsCoverArticles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("featured-article");
        articleCard.classList.add("article-card");
        articleCard.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
            <p>${sliceWords(article.content, 20)}</p>            
        `

        articleCard.addEventListener("click", () => {
            window.location.href = `article.html?id=${article.id}`;
        });

        intramuralsArticlesContainer.appendChild(articleCard);
    })

    featureCoverArticles.forEach(article => {
        rightColumnContainer.appendChild(createArticleCard(article));
    })

    topicsArticles.forEach(article => {
        topicsContainer.appendChild(createArticleCard(article, "topics-article"));
    })

    const categories = ["School Updates", "Spiritual Thought", "Intramurals", "Feature"]

    categories.forEach(category => {
        const categoryContainer = document.createElement("div");
        const categoryArticlesContainer = document.createElement("div");
        categoryArticlesContainer.classList.add("section-five-article-container");

        const sectionTitle = document.createElement("div");
        sectionTitle.innerHTML = `<h3>${category}</h3>`;
        sectionTitle.id = `school-updates-${category.replace(/\s+/g, "-").toLowerCase()}-section`;

        categoryContainer.appendChild(sectionTitle);

        if (category === "School Updates") {
            categoryArticles = sortedArticles.filter(article => article.category.includes(`${category}`)).slice(5, 10);
        } else if (category === "Intramurals") {
            categoryArticles = sortedArticles.filter(article => article.category.includes(`${category}`)).slice(2, 7);
        } else if (category === "Feature") {
            console.log("hi");
            categoryArticles = sortedArticles.filter(article => article.category.includes(`${category}`)).slice(6, 11);
        } else {
            categoryArticles = sortedArticles.filter(article => article.category.includes(`${category}`)).slice(0, 5);
        }

        categoryArticles.forEach(article => {
            categoryArticlesContainer.appendChild(createArticleCard(article, "section-article"));
        })
        categoryContainer.appendChild(categoryArticlesContainer);
        sectionArticleContainer.appendChild(categoryContainer);
    })

    leftColumnContainer.appendChild(schoolTitleContainer);  
    schoolContainer.appendChild(schoolArticlesContainer);
    schoolContainer.appendChild(schoolImageContainer);
    intramuralsContainer.appendChild(intramuralsArticlesContainer);
    intramuralsContainer.appendChild(intramuralsImageContainer);

    leftColumnContainer.appendChild(schoolContainer);
    leftColumnContainer.appendChild(intramuralsContainer);
    leftColumnContainer.appendChild(topicsContainer);

    mainContainer.appendChild(leftColumnContainer);
    mainContainer.appendChild(rightColumnContainer);

    container.appendChild(mainContainer);
    container.appendChild(sectionArticleContainer);
    
}

function renderFeaturesPage() {
    const categories = ["Teacher", "Student"];

    const container = document.getElementById("features")
    container.classList.add("main-container");
    container.innerHTML = "";

    const categoryTitleContainer = document.createElement("div");
    categoryTitleContainer.id = "features-page-category-title-container";

    const featureContainer = document.createElement("div");
    featureContainer.id = "features-page-feature-container";

    const featureCoverContainer = document.createElement("div");
    featureCoverContainer.id = "features-page-cover-container";

    const featureCoverArticleContainer = document.createElement("div");
    featureCoverArticleContainer.id = "features-page-cover-article-container";

    const featureCoverImageContainer = document.createElement("div");
    featureCoverImageContainer.id = "features-page-cover-image-container";

    const featureSecondaryContainer = document.createElement("div");
    featureSecondaryContainer.id = "features-page-secondary-container";

    const featureSecondaryArticleContainer = document.createElement("div");
    featureSecondaryArticleContainer.id = "features-page-secondary-article-container";

    const featureSecondaryImageContainer = document.createElement("div");
    featureSecondaryImageContainer.id = "features-page-secondary-image-container";

    const featureTertiaryContainer = document.createElement("div");
    featureTertiaryContainer.id = "features-page-tertiary-container";

    const sectionContainer = document.createElement("div");
    sectionContainer.id = "features-page-section-container";

    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    const filteredArticles = sortedArticles.filter(article => article.category === "Feature");
    const coverArticles = filteredArticles.filter(article => article.type === "Cover");
    const secondaryArticles = filteredArticles.filter(article => article.type === "Secondary");
    const tertiaryArticles = secondaryArticles.slice(0, 2);

    categoryTitleContainer.innerHTML = `<h1 class="school-updates-page-recent-updates">Features</h1>`
    categories.forEach(category => {
        const categoryCard = document.createElement("div");
        
        const innerCategoryCard = document.createElement("div");
        innerCategoryCard.innerHTML = `<h2 class="school-updates-page-category-title">${category}<h2>`;
        innerCategoryCard.classList.add("school-updates-page-category-card");
        
        categoryCard.addEventListener("click", () => {
            const section = document.getElementById(`features-page-${category.replace(/\s+/g, "-").toLowerCase()}-section`);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });

        categoryCard.appendChild(innerCategoryCard);
        categoryTitleContainer.appendChild(categoryCard);
    })

    const coverCoverCard = document.createElement("div");
    coverCoverCard.classList.add("article-card");
    coverCoverCard.innerHTML = `
        <h3><a href="article.html?id=${coverArticles[0].id}">${coverArticles[0].title}</a></h3>
        <p><em>${coverArticles[0].author} • ${coverArticles[0].date}</em></p>
        <p>${sliceWords(coverArticles[0].content, 20)}</p>            
    `

    const coverImage = document.createElement("div");
    coverImage.classList.add("feature-cover-article-image");
    coverImage.innerHTML = `${coverArticles[0].image ? `<img src="${coverArticles[0].image}" alt="${coverArticles[0].title}" class="cover-image">` : ""}`
    featureCoverArticleContainer.appendChild(coverCoverCard);
    featureCoverImageContainer.appendChild(coverImage);
    
    featureCoverContainer.appendChild(featureCoverImageContainer);
    featureCoverContainer.appendChild(featureCoverArticleContainer);

    const secondaryCard = document.createElement("div");
    secondaryCard.classList.add("article-card");
    secondaryCard.innerHTML = `
        <h3><a href="article.html?id=${coverArticles[1].id}">${coverArticles[1].title}</a></h3>
        <p><em>${coverArticles[1].author} • ${coverArticles[1].date}</em></p>
        <p>${sliceWords(coverArticles[1].content, 50)}</p>            
    `
    const secondaryImage = document.createElement("div");
    secondaryImage.classList.add("feature-secondary-article-image");
    secondaryImage.innerHTML = `${coverArticles[1].image ? `<img src="${coverArticles[1].image}" alt="${coverArticles[1].title}" class="cover-image">` : ""}`
    featureSecondaryArticleContainer.appendChild(secondaryCard);
    featureSecondaryImageContainer.appendChild(secondaryImage);

    featureSecondaryContainer.appendChild(featureSecondaryImageContainer);
    featureSecondaryContainer.appendChild(featureSecondaryArticleContainer);

    tertiaryArticles.forEach(article => {
        const articleCard = document.createElement("div");
        const headerContainer = document.createElement("div");
        const titleContainer = document.createElement("div");
        const imageContainer = document.createElement("div");
        const textContainer = document.createElement("div");

        articleCard.classList.add("article-card");
        headerContainer.classList.add("features-page-tertiary-header");
        imageContainer.classList.add("features-page-tertiary-image")
        
        titleContainer.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
        `
        imageContainer.innerHTML = `
            ${article.image ? `<img src="${article.image}" alt="${article.title}" class="cover-image">` : ""}
        `

        textContainer.innerHTML = `
            <p>${sliceWords(article.content, 30)}</p>  
        `

        headerContainer.appendChild(titleContainer);
        headerContainer.appendChild(imageContainer);
        articleCard.appendChild(headerContainer);
        articleCard.appendChild(textContainer);

        featureTertiaryContainer.appendChild(articleCard);
    })

    categories.forEach(category => {
        const categoryContainer = document.createElement("div");
        const categoryArticlesContainer = document.createElement("div");
        categoryArticlesContainer.classList.add("section-five-article-container");
        const categorySecondaryArticlesContainer = document.createElement("div");
        categorySecondaryArticlesContainer.classList.add("section-five-article-container");
        const categoryTertiaryArticlesContainer = document.createElement("div");
        categoryTertiaryArticlesContainer.classList.add("section-five-article-container");
        const categoryFourArticlesContainer = document.createElement("div");
        categoryFourArticlesContainer.classList.add("section-five-article-container");

        const sectionTitle = document.createElement("div");
        sectionTitle.innerHTML = `<h3>${category}</h3>`;
        sectionTitle.id = `features-page-${category.replace(/\s+/g, "-").toLowerCase()}-section`

        categoryContainer.appendChild(sectionTitle);

        let categoryArticles = [];
        categoryArticles = filteredArticles.filter(article => article.subcategory.includes(`${category}`));

        if (categoryArticles.length >= 20) {
            const primaryArticles = categoryArticles.slice(0, 5);

            primaryArticles.forEach(article => {
                categoryArticlesContainer.appendChild(createArticleCard(article, "five-section-article"));
            });

            const secondaryArticles = categoryArticles.slice(5, 10);

            secondaryArticles.forEach(article => {
                categorySecondaryArticlesContainer.appendChild(createArticleCard(article, "five-section-article"));
            });

            const tertiaryArticles = categoryArticles.slice(10, 15);

            tertiaryArticles.forEach(article => {
                categoryTertiaryArticlesContainer.appendChild(createArticleCard(article, "five-section-article"));
            });

            const fourArticles = categoryArticles.slice(15, 20);

            fourArticles.forEach(article => {
                categoryFourArticlesContainer.appendChild(createArticleCard(article, "five-section-article"));
            });

            categoryContainer.appendChild(categoryArticlesContainer);
            categoryContainer.appendChild(categorySecondaryArticlesContainer);
            categoryContainer.appendChild(categoryTertiaryArticlesContainer);
            categoryContainer.appendChild(categoryFourArticlesContainer);
        } else {
            categoryArticles.slice(0, 5);

            categoryArticles.forEach(article => {
                categoryArticlesContainer.appendChild(createArticleCard(article, "five-section-article"));
            });

            categoryContainer.appendChild(categoryArticlesContainer);
        }

        sectionContainer.appendChild(categoryContainer);
    })

    featureContainer.addEventListener("click", e => {
        const card = e.target.closest(".article-card");
        if (card) {
            const link = card.querySelector("h3 a");
            if (link) window.location.href = link.href;
        }
    });

    featureContainer.appendChild(featureCoverContainer);
    featureContainer.appendChild(featureSecondaryContainer);
    featureContainer.appendChild(featureTertiaryContainer);

    container.appendChild(categoryTitleContainer);
    container.appendChild(featureContainer);
    container.appendChild(sectionContainer);
}

function renderSchoolUpdatesPage() {
    const container = document.getElementById("school-updates");
    container.classList.add("main-container");
    container.innerHTML = "";

    const featureContainer = document.createElement("div");
    featureContainer.id = "feature-container";

    const categoryContainer = document.createElement("div");
    categoryContainer.id = "category-container";

    const recentContainer = document.createElement("div");
    recentContainer.id = "recent-container";

    const recentCoverContainer = document.createElement("div");
    recentCoverContainer.id = "recent-cover-container";

    const recentSecondaryContainer = document.createElement("div");
    recentSecondaryContainer.id = "recent-secondary-container";

    const SAContainer = document.createElement("div");
    SAContainer.id = "sa-container";

    const SATitleContainer = document.createElement("div");
    SATitleContainer.id = "sa-title-container";

    const SAArticleContainer = document.createElement("div");
    SAArticleContainer.id = "sa-article-container";

    const SACoverContainer = document.createElement("div");
    SACoverContainer.id = "sa-cover-container";

    const SASecondaryContainer = document.createElement("div");
    SASecondaryContainer.id = "sa-secondary-container";

    const sectionArticleContainer = document.createElement("div");
    sectionArticleContainer.id = "section-article-container";

    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    const filteredArticles = sortedArticles.filter(article => article.category === "School Updates");
    const recentArticles = filteredArticles.filter(article => article.date.includes(recentMonths[0]) || article.date.includes(recentMonths[1])).slice(0, 4);
    const recentCoverArticle = recentArticles[0];
    const recentSecondaryArticles = recentArticles.slice(1, 4);

    const SAArticles = filteredArticles.filter(article => article.subcategory.includes("SA Event")).slice(0, 10);
    const SACoverArticle = SAArticles[0];
    const SASecondaryArticles = SAArticles.slice(1, 4);

    const pageCategories = ["SA Events"];
    const categories = ["SA Event", "Pillar Day", "Club", "Competition", "Holiday", "Bible"];
    const allCategories = [...pageCategories, ...categories];

    categoryContainer.innerHTML = `<h1 class="school-updates-page-recent-updates">Recent Updates</h1>`
    allCategories.forEach(category => {
        if (category != "SA Event") {
            const categoryCard = document.createElement("div");
        
            const innerCategoryCard = document.createElement("div");
            innerCategoryCard.innerHTML = `<h2 class="school-updates-page-category-title">${category}<h2>`;
            innerCategoryCard.classList.add("school-updates-page-category-card");
            
            categoryCard.addEventListener("click", () => {
                const section = document.getElementById(`school-updates-${category.replace(/\s+/g, "-").toLowerCase()}-section`);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            });

            categoryCard.appendChild(innerCategoryCard);
            categoryContainer.appendChild(categoryCard);
        }
    })

    SATitleContainer.innerHTML = `<h2>Student Association Events</h2>`
    SATitleContainer.id = "school-updates-sa-events-section";

    const recentCoverCard = document.createElement("div");
    recentCoverCard.classList.add("article-card");
    recentCoverCard.innerHTML = `
        ${recentCoverArticle.image ? `<img src="${recentCoverArticle.image}" alt="${recentCoverArticle.title}" class="image">` : ""}
        <h3><a href="article.html?id=${recentCoverArticle.id}">${recentCoverArticle.title}</a></h3>
        <p><em>${recentCoverArticle.author} • ${recentCoverArticle.date}</em></p>
        <p>${sliceWords(recentCoverArticle.content, 20)}</p>            
    `

    recentCoverCard.addEventListener("click", () => {
        window.location.href = `article.html?id=${recentCoverArticle.id}`;
    });

    recentSecondaryArticles.forEach(article => {
        const articleCard = document.createElement("div");
        const articleText = document.createElement("div");
        const articleImage = document.createElement("div");
        articleCard.classList.add("secondary-article");
        articleCard.classList.add("article-card");
        articleText.classList.add("secondary-article-text");
        articleImage.classList.add("secondary-article-image");
        articleText.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
            <p>${sliceWords(article.content, 20)}</p>            
        `
        articleImage.innerHTML = `${article.image ? `<img src="${article.image}" alt="${article.title}" class="cover-image">` : ""}`
        articleCard.appendChild(articleText);
        articleCard.appendChild(articleImage);

        articleCard.addEventListener("click", () => {
            window.location.href = `article.html?id=${article.id}`;
        });

        recentSecondaryContainer.appendChild(articleCard);
    })

    const SACoverCard = document.createElement("div");
    SACoverCard.classList.add("article-card");
    SACoverCard.innerHTML = `
        ${SACoverArticle.image ? `<img src="${SACoverArticle.image}" alt="${SACoverArticle.title}" class="cover-image">` : ""}
        <h3><a href="article.html?id=${SACoverArticle.id}">${SACoverArticle.title}</a></h3>
        <p><em>${SACoverArticle.author} • ${SACoverArticle.date}</em></p>
        <p>${sliceWords(SACoverArticle.content, 20)}</p>            
    `

    SACoverCard.addEventListener("click", () => {
        window.location.href = `article.html?id=${SACoverArticle.id}`;
    });

    SASecondaryArticles.forEach(article => {
        const articleCard = document.createElement("div");
        const articleText = document.createElement("div");
        const articleImage = document.createElement("div");
        articleCard.classList.add("secondary-article");
        articleCard.classList.add("article-card");
        articleText.classList.add("secondary-article-text");
        articleImage.classList.add("secondary-article-image");
        articleText.innerHTML = `
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p><em>${article.author} • ${article.date}</em></p>
            <p>${sliceWords(article.content, 20)}</p>            
        `

        articleCard.addEventListener("click", () => {
            window.location.href = `article.html?id=${article.id}`;
        });

        articleImage.innerHTML = `${article.image ? `<img src="${article.image}" alt="${article.title}" class="cover-image">` : ""}`
        articleCard.appendChild(articleText);
        articleCard.appendChild(articleImage);
        SASecondaryContainer.appendChild(articleCard);
    })

    categories.forEach(category => {
        const categoryContainer = document.createElement("div");
        const categoryArticlesContainer = document.createElement("div");
        categoryArticlesContainer.classList.add("section-five-article-container");

        const sectionTitle = document.createElement("div");
        sectionTitle.innerHTML = `<h3>${category}</h3>`;
        sectionTitle.id = `school-updates-${category.replace(/\s+/g, "-").toLowerCase()}-section`;

        if (category != "SA Event") {
            categoryArticles = filteredArticles.filter(article => article.subcategory.includes(`${category}`)).slice(0, 5);
            categoryContainer.appendChild(sectionTitle);
        } else {
            categoryArticles = filteredArticles.filter(article => article.subcategory.includes(`${category}`)).slice(5, 10);
        }

        categoryArticles.forEach(article => {
            categoryArticlesContainer.appendChild(createArticleCard(article, "section-article"));
        })
        
        categoryContainer.appendChild(categoryArticlesContainer);
        sectionArticleContainer.appendChild(categoryContainer);
    })
   
    recentCoverContainer.appendChild(recentCoverCard);
    recentContainer.appendChild(recentCoverContainer);
    recentContainer.appendChild(recentSecondaryContainer);

    SACoverContainer.appendChild(SACoverCard);
    SAArticleContainer.appendChild(SACoverContainer);
    SAArticleContainer.appendChild(SASecondaryContainer);
    SAContainer.appendChild(SATitleContainer);
    SAContainer.appendChild(SAArticleContainer);

    container.appendChild(categoryContainer);
    container.appendChild(recentContainer);
    container.appendChild(SAContainer);
    container.appendChild(sectionArticleContainer);
}

function renderIntramuralsPage() {
    const container = document.getElementById("Intramurals");
    if (container) {
        container.innerHTML = `<h2>Intramurals</h2>`;
        renderCategorizedArticles(container, "Intramurals");
    }
}

function createYearSelectDropdown(options, defaultValue, onChangeCallback) {
    const container = document.createElement("div");
    container.id = "year-select-container";

    const select = document.createElement("select");
    select.id = "year-select";

    options.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        if (year === defaultValue) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    if (onChangeCallback) {
        select.addEventListener("change", e => onChangeCallback(e.target.value));
    }

    container.appendChild(select);
    return container;
}

function renderStaffPage(selectedYear="2025-26") {
    const writerContainer = document.getElementById("writers");
    writerContainer.innerHTML = "";

    const pageTitleContainer = document.createElement("div");
    pageTitleContainer.id = "staff-page-title-container";

    const writersContainer = document.createElement("div");
    writersContainer.id = "staff-page-writers-container";

    const dropdown = createYearSelectDropdown(
        ["2025-26", "2024-25"], 
        selectedYear,
        (selectedYear) => renderStaffPage(selectedYear)
    );

    const contributorsContainer = document.createElement("div");
    contributorsContainer.innerHTML = "<h1>Contributors</h1>";

    pageTitleContainer.appendChild(contributorsContainer);
    pageTitleContainer.appendChild(dropdown);

    let filteredWriters = writers;

    filteredWriters = writers.filter(writer => writer.job && writer.job.some(jobEntry => jobEntry[0] === selectedYear))

    filteredWriters = sortWritersByJob(filteredWriters, selectedYear);

    filteredWriters.forEach((writer, i) => {
        const writerCard = document.createElement("div");
        writerCard.classList.add((i + 1) % 5 === 0 ? "writer-card-last-child" : "writer-card");

        writerCard.addEventListener("click", () => {
            window.location.href = `writer-page.html?name=${encodeURIComponent(writer.name)}`;
        });
        
        const imageHTML = writer.image
            ? `<img src="${writer.image}" alt="${writer.name}" class="writer-image">`
            : `<div class="writer-placeholder">${writer.name[0]}</div>`;

        const jobList = writer.job
            .filter(j => j[0] === selectedYear)
            .map(j => `<p>${j[1]}</p>`)
            .join("");

        writerCard.innerHTML = `
            ${imageHTML}
            <div class="writer-info">
                <p class="writer-name">${writer.name}</p>
                <div class="writer-jobs">${jobList}</div>
            </div>
        `;

        writersContainer.appendChild(writerCard);
    })

    writerContainer.appendChild(pageTitleContainer);
    writerContainer.appendChild(writersContainer);
}

function renderWriterPage() {
    const params = new URLSearchParams(window.location.search);
    const writerName = params.get('name');
    if (!writerName) return;

    const writer = writers.find(w => w.name === writerName);
    if (!writer) return;

    const writerArticles = articles.filter(a => a.author === writerName);
    const articleCount = writerArticles.length;

    const container = document.getElementById("writer");
    container.classList.add("main-container");
    container.innerHTML = "";

    const header = document.createElement("div");
    header.id = "writer-page-header";

    const imageContainer = document.createElement("div");
    imageContainer.id = "writer-page-image-container";

    const titleContainer = document.createElement("div");
    titleContainer.id = "writer-page-title-container";

    const nameHeader = document.createElement("div");
    nameHeader.id = "writer-page-name-header";

    const jobContainer = document.createElement("div");
    jobContainer.id = "writer-page-job-container";

    const bioContainer = document.createElement("div");
    bioContainer.id = "writer-page-bio-container";

    titleContainer.appendChild(nameHeader);
    titleContainer.appendChild(jobContainer);
    titleContainer.appendChild(bioContainer);

    header.appendChild(imageContainer);
    header.appendChild(titleContainer);

    const articleContainer = document.createElement("div");
    articleContainer.id = "writer-page-article-container";
    articleContainer.classList.add("section-five-article-container");

    const writerImage = writer.image
            ? `<img src="${writer.image}" alt="${writer.name}" class="writer-image">`
            : `<div class="writer-placeholder">${writer.name[0]}</div>`;

    imageContainer.innerHTML = `${writerImage}`;

    if (nameHeader) nameHeader.innerText = writer.name;
    jobContainer.innerText = `${writer.job[0][1]} • ${articleCount} published articles` || "No job available.";
    bioContainer.innerText = writer.bio || "No biography available.";

    writerArticles.forEach(article => {
        articleContainer.appendChild(createArticleCard(article, "section-article"));
    });

    container.appendChild(header);
    container.appendChild(articleContainer);
}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    renderHomePage();

    if (path.endsWith("index.html") || path === "/") {
        renderHomePage();
    } else if (path.endsWith("features.html")) {
        renderFeaturesPage();
    } else if (path.endsWith("school-updates.html")) {
        renderSchoolUpdatesPage();
    } else if (path.endsWith("staff.html")) {
        renderStaffPage();

        document.getElementById("year-select").addEventListener("change", (e) => {
            const selectedYear = e.target.value;
            renderStaffPage(selectedYear);
        });
    } else if (path.endsWith("writer-page.html")) {
        renderWriterPage();
    } else if (path.endsWith("intramurals.html")) {
    } 
});