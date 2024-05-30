export function renderPosts(posts) {
    const postsContainer = document.getElementById('posts')
    posts.forEach(post => {
    const postElement = document.createElement('a')
    postElement.href = `post.html?id=${post.id}`
    postElement.className = 'list-group-item list-group-item-action'
    postElement.innerText = post.title
    postsContainer.appendChild(postElement)
    })
}