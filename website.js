document.addEventListener('DOMContentLoaded', () => {
    // Show the correct page on load
    showPage(getInitialPage());

    // Attach event listeners to navigation links
    document.querySelectorAll('.header-nav a').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', () => {
        showPage(getInitialPage());
    });
});

// Function to show a specific page
function showPage(pageId) {
    hideAllPages();
    const page = document.getElementById(pageId);
    if (!page) {
        console.error(`Page not found: ${pageId}`);
        return;
    }
    page.style.display = 'block'; // Use 'block' instead of 'flex' to avoid layout issues
    updateActiveLink(pageId);
}

// Function to hide all pages
function hideAllPages() {
    document.querySelectorAll('.content-section').forEach(page => {
        page.style.display = 'none';
    });
}

// Function to update the active navigation link
function updateActiveLink(activePage) {
    document.querySelectorAll('.header-nav a').forEach(link => {
        link.classList.toggle('active', link.dataset.page === activePage);
    });
}

// Function to get the initial page from URL hash (if available)
function getInitialPage() {
    return window.location.hash.substring(1) || 'home-page';
}

// Function to handle navigation click events
function handleNavigation(event) {
    event.preventDefault();
    const link = event.target.closest('a');
    if (!link) return;

    const pageId = link.dataset.page;
    if (pageId) {
        showPage(pageId);
        history.pushState(null, null, `#${pageId}`);
    }
}
