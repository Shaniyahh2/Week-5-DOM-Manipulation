// TOGGLE BUTTONS
const filterBtn = document.getElementById("showFilterBtn");
const formBtn = document.getElementById("showFormBtn");

const filterForm = document.getElementById("filterContent");
const newForm = document.getElementById("newContent");

filterBtn.onclick = () => {
    filterForm.style.display = "block";
    newForm.style.display = "none";
};

formBtn.onclick = () => {
    newForm.style.display = "flex";
    filterForm.style.display = "none";
};

// FILTER CHECKBOXES
const chkOpinion = document.getElementById("filterOpinion");
const chkRecipe = document.getElementById("filterRecipe");
const chkUpdate = document.getElementById("filterUpdate");

chkOpinion.onchange = filterArticles;
chkRecipe.onchange = filterArticles;
chkUpdate.onchange = filterArticles;

function filterArticles() {
    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        const type = article.dataset.type;

        if (type === "opinion" && !chkOpinion.checked) {
            article.style.display = "none";
        } else if (type === "recipe" && !chkRecipe.checked) {
            article.style.display = "none";
        } else if (type === "update" && !chkUpdate.checked) {
            article.style.display = "none";
        } else {
            article.style.display = "block";
        }
    });
}

// ADD NEW ARTICLE
document.getElementById("addArticleBtn").onclick = () => {
    const title = document.getElementById("newTitle").value;
    const text = document.getElementById("newText").value;
    const type = document.querySelector("input[name='newType']:checked");

    if (!title || !text || !type) {
        alert("Please fill out all fields.");
        return;
    }

    const articleType = type.value;

    const article = document.createElement("article");
    article.classList.add(articleType);
    article.dataset.type = articleType;

    article.innerHTML = `
        <span class="marker">${articleType.charAt(0).toUpperCase() + articleType.slice(1)}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        <a href="#">Read more...</a>
    `;

    document.getElementById("articleList").appendChild(article);

    // Reset form
    document.getElementById("newTitle").value = "";
    document.getElementById("newText").value = "";
    type.checked = false;
};
