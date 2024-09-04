// ScrollReveal().reveal('.headline', { duration: 2000 });
// ScrollReveal().reveal('.widget', { interval: 200 });

document.addEventListener('DOMContentLoaded', () => {
    const widgetList = document.querySelector('.widget-list');
    const colorOptions = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'cyan', 'lime', 'teal', 'indigo'];

    function addWidget(content) {
        const newWidget = document.createElement('li');
        const randomColor = colorOptions[content % 10 ];
        newWidget.className = 'widget';
        newWidget.style.backgroundColor = randomColor;
        newWidget.style.height = (Math.floor(Math.random() * 4) + 1) * 150 + 'px';
        widgetList.appendChild(newWidget);
    }

    // Example: Adding 5 more widgets dynamically
    for (let i = 1; i <= 24; i++) {
        addWidget(i);
    }

    // ScrollReveal configuration
    ScrollReveal().reveal('.widget', {
        duration: 1000,          // Animation duration (ms)
        interval: 200,
        distance: '50px',        // Distance the element moves
        origin: 'bottom',        // Animation starts from the bottom
        opacity: 0,              // Start with full transparency
        easing: 'ease-in-out',   // Animation timing function
        reset: true,             // Repeat animation on scroll back
    });
});