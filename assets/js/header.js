// Create the template element
const template = document.createElement('template');

// Fetch the content of header.html
fetch('../../header.html')
  .then(response => response.text())  // Get the response as text
  .then(html => {
    // Set the template's innerHTML with the fetched HTML
    template.innerHTML = html;

    // Get the placeholder element where you want to insert the template
    var headerTemplate = document.getElementById('headerTemplate');

    // Append the template content into the placeholder
    headerTemplate.appendChild(template.content);
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });