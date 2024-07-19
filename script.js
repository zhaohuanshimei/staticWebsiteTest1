// script.js
function addPost(title, content) {
    const main = document.querySelector('main');
    const post = document.createElement('article');
    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    main.appendChild(post);
}
