export function renderPost(post) {
    const postContainer = document.getElementById('post')
    const postTitle = document.createElement('h1')
    postTitle.className = 'display-4'
    postTitle.innerText = post.title
    const postBody = document.createElement('p')
    postBody.className = 'lead'
    postBody.innerText = post.body
    postContainer.append(postTitle)
    postContainer.append(postBody)
}