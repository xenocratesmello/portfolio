/**
 * Creates an article object.
 * @param {string} title - The title of the article.
 * @param {string} content - The main content of the article.
 * @param {string[]} tags - An array of tags associated with the article.
 * @param {string} image - The URL or path to a JPG image for the article.
 * @param {Date} date - The publication date of the article.
 * @param {Array} articles - The array of existing articles to which the new article will be added.
 * @returns {void}
 */
//function createArticle(title, content, tags, image, date){
export function createArticle(){
    /*let newDate = document.createElement("p");
    newDate.textContent = date.toLocaleDateString();

    let newImage = document.createElement("img");
    newImage.src = image;
    newImage.alt = title;

    let newTags = document.createElement("p");
    newTags.textContent = tags.join(", ");

    let newContent = document.createElement("p");
    newContent.textContent = content;*/

    let newTitle = document.getElementById("title");
       

    /*let newArticle = document.createElement("article");
    newArticle.textContent = newTitle.textContent;
    newArticle.appendChild(newContent);
    newArticle.appendChild(newTags);
    newArticle.appendChild(newImage);
    newArticle.appendChild(newDate);

    let articleContainer = document.getElementById("articles");
    if (!articleContainer) {
        console.error("Article container not found");
        return;
    }
    articleContainer.appendChild(newArticle);
    console.log("Article created successfully");*/

    let articleContainer = document.getElementById("articles");
    let newArticle = document.createElement("li");
    newArticle.textContent = newTitle.value;
    articleContainer.appendChild(newArticle);
        
    return;
}

function handleArticleSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    /*const content = document.getElementById("content").value;
    const tags = document.getElementById("tags").value.split(",").map(tag => tag.trim()).filter(Boolean);
    const image = document.getElementById("image").value;
    const date = new Date(document.getElementById("date").value);*/

    //createArticle(title, content, tags, image, date, []);
    createArticle(title);
}