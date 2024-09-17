  // Detects navigation and checks if the page exists
  window.addEventListener('load', function () {
    // Try to fetch the current page
    fetch(window.location.href)
      .then(response => {
        // If the page does not exist, redirect to /not-found.html
        if (response.status === 404) {
          window.location.href = '/not-found.html';
        }
      })
      .catch(err => {
        // Handle the error, e.g., network issues
        console.error('Error loading page:', err);
        window.location.href = '/not-found.html';
      });
  });