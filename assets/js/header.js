const template = document.createElement('template');

fetch('../../header.html')
  .then(response => response.text())  
  .then(html => {
    template.innerHTML = html;
    var headerTemplate = document.getElementById('headerTemplate');
    headerTemplate.appendChild(template.content);
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });