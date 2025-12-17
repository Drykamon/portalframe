document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const tierListBtn = document.getElementById('tierListBtn');
    const topBuildsBtn = document.getElementById('topBuildsBtn');
    const categoryBtns = document.querySelectorAll('.cat-btn');

    // Handle search submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            // Encode the query to handle spaces and special characters
            const encodedQuery = encodeURIComponent(query);
            // Redirect to Overframe search
            window.location.href = `https://overframe.gg/search/?q=${encodedQuery}`;
        }
    });

    // Handle Quick Links
    tierListBtn.addEventListener('click', () => {
        window.location.href = 'https://overframe.gg/tier-list/warframes/';
    });

    topBuildsBtn.addEventListener('click', () => {
        window.location.href = 'https://overframe.gg/builds/warframes/';
    });

    // Handle Category Buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
