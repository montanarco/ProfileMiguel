// Create the template element
const templateFtr = document.createElement('template');

// Fetch the content of header.html
fetch('../../footer.html')
  .then(response => response.text())  // Get the response as text
  .then(html => {
    // Set the template's innerHTML with the fetched HTML
    templateFtr.innerHTML = html;

    // Get the placeholder element where you want to insert the template
    var footerTemplate = document.getElementById('footerTemplate');

    // Append the template content into the placeholder
    footerTemplate.appendChild(templateFtr.content);
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });