document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchJobs();
    }
});

function searchJobs() {
    // Get the search input value
    var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    // Get all job elements
    var jobElements = document.querySelectorAll('.job');

    // Loop through each job element and check if it matches the search query
    jobElements.forEach(function(jobElement) {
        var jobTitle = jobElement.querySelector('.job-title').textContent.toLowerCase();
        if (searchQuery === '' || jobTitle.includes(searchQuery)) {
            jobElement.style.display = 'block';
        } else {
            jobElement.style.display = 'none';
        }
    });

    // Clear the search input if the query is blank
    if (searchQuery === '') {
        clearSearchContainer();
    }
}

function showAllJobs() {
    // Get all job elements
    var jobElements = document.querySelectorAll('.job');
    // Show all job elements
    jobElements.forEach(function(jobElement) {
        jobElement.style.display = 'block';
    });
}

function clearSearch() {
    // Clear the search input
    document.getElementById('searchInput').value = '';
    // Show all job elements
    showAllJobs();
}

function clearSearchContainer() {
    // Clear the search input
    document.getElementById('searchInput').value = '';
    // Hide all job elements
    var jobElements = document.querySelectorAll('.job');
    jobElements.forEach(function(jobElement) {
        jobElement.style.display = 'none';
    });
}
