export function renderComments(comments) {
    const commentsContainer = document.getElementById('comments')
    comments.forEach(comment => {
        const commentElement = document.createElement('div')
        commentElement.className = 'list-group-item'
        const commentAuthor = document.createElement('h5')
        commentAuthor.className = 'mb-1'
        commentAuthor.innerText = comment.name
        const commentBody = document.createElement('p')
        commentBody.className = 'mb-1'
        commentBody.innerText = comment.body
        commentElement.append(commentAuthor)
        commentElement.append(commentBody)
        commentsContainer.append(commentElement)
    });
}