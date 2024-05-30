const pageParams = new URLSearchParams(window.location.search)
const page = pageParams.get('page') || 1

fetch(`https://gorest.co.in/public-api/posts?page=${page}`)
.then(response => response.json())
.then(data => {
    const posts = data.data
    const pagination = data.meta.pagination
    renderPosts(posts)
    renderPagination(pagination)
})

import { renderPosts } from "./modules/renderPosts.js"
import { renderPost } from "./modules/renderPost.js"
import { renderComments } from "./modules/renderComments.js"



const postParams = new URLSearchParams(window.location.search)
const postId = postParams.get('id')

fetch(`https://gorest.co.in/public-api/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
    const post = data.data
    renderPost(post)
});

fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`)
    .then(response => response.json())
    .then(data => {
        const comments = data.data
        renderComments(comments)
    });



