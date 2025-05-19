/**
 * Creates a new blog article and appends it to the #articles section.
 * 
 * This function collects values from the form fields (title, date, content, tags, image),
 * validates them, and then creates a new <article> element with the provided data.
 * The article includes a title, date, content, image, and tags.
 * After appending the article, the form fields are cleared.
 * 
 * Expected HTML structure:
 * - The form fields must have the following IDs: title, date, content, tags, image.
 * - There must be a container element with the ID 'articles' where new articles will be appended.
 * 
 * Usage:
 * - Typically called on form submission (e.g., via a button or form event).
 */
// Exported function for use in HTML files via ES modules
export function createArticle() {
    // Get form field values
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;
    const image = document.getElementById('image').value;
    
    // Get the container for articles
    const articlesList = document.getElementById('articles');
    // Create article elements
    const article = document.createElement('article');
    article.classList.add('blog');
    
    const h3Title = document.createElement('h3');
    const pDate = document.createElement('p');
    const pContent = document.createElement('p');
    const img = document.createElement('img');
    const footerTags = document.createElement('footer');

    // Validate and append title
    if (title) {
        h3Title.textContent = title;
        article.appendChild(h3Title);
    } else {
        alert('Please enter a title for the article.');
        return;
    }
    
    // Validate and append date
    if (date) {
        pDate.textContent = date;
        pDate.classList.add('duration');
        article.appendChild(pDate);
    } else {
        alert('Please enter a date for the article.');
    }

    // Validate and append content
    if (content) {
        pContent.textContent = content;
        article.appendChild(pContent);
    } else {
        alert('Please enter content for the article.');
        return;
    }

    // Validate and append image
    if (image) {
        img.src = image;
        img.alt = title;
        article.appendChild(img);
    } else {
        alert('Please enter an image URL for the article.');
        return;
    }

    // Validate and append tags
    if (tags) {
        footerTags.textContent = 'Tags: ' + tags;
        article.appendChild(footerTags);
    } else {
        alert('Please enter tags for the article.');
        return;
    }

    // Append the new article to the articles list
    articlesList.appendChild(article);

    // Clear form fields after submission
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('content').value = '';
    document.getElementById('tags').value = '';
    document.getElementById('image').value = '';
}