document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('keyword');
    
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the keyword to search for
        const keyword = searchInput.value.toLowerCase();

        // Navigate to the case studies page
        window.location.href = 'topics-listing.html#' + keyword;
    });
});
