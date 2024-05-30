export function renderPagination(pagination) {
    const paginationContainer = document.getElementById('pagination')
    const totalPages = pagination.pages
    const currentPage = pagination.page

    function createPageItem(pageNumber, isCurrent = false) {
        const pageItem = document.createElement('li')
        pageItem.className = 'page-item' + (isCurrent ? ' active' : '')
        const pageLink = document.createElement('a')
        pageLink.className = 'page-link'
        pageLink.href = pageNumber === 1 ? 'index.html' : `index.html?page=${pageNumber}`
        pageLink.innerText = pageNumber
        pageItem.append(pageLink)
        paginationContainer.append(pageItem)
    }

    if (currentPage > 2) createPageItem(1)
    if (currentPage > 3) {
        const ellipsis = document.createElement('li')
        ellipsis.className = 'page-item disabled'
        const ellipsisLink = document.createElement('span')
        ellipsisLink.className = 'page-link'
        ellipsisLink.innerText = '...'
        ellipsis.append(ellipsisLink)
        paginationContainer.append(ellipsis)
    }

    if (currentPage > 1) createPageItem(currentPage - 1)
    createPageItem(currentPage, true)
    if (currentPage < totalPages) createPageItem(currentPage + 1)

    if (currentPage < totalPages - 2) {
        const ellipsis = document.createElement('li')
        ellipsis.className = 'page-item disabled'
        const ellipsisLink = document.createElement('span')
        ellipsisLink.className = 'page-link'
        ellipsisLink.innerText = '...'
        ellipsis.append(ellipsisLink)
        paginationContainer.append(ellipsis)
    }
    if (currentPage < totalPages - 1) createPageItem(totalPages)
}