/*document.addEventListener('DOMContentLoaded', () => {
    const widgetColumns = document.querySelectorAll('.widget-column');
    const colorOptions = ['red', 'green', 'blue', 'purple', 'orange', 'teal', 'indigo', 'pink', 'cyan'];

    let columnIndex = 0;

    function addWidget(content) {
        const newWidget = document.createElement('div');
        const randomColor = colorOptions[content % colorOptions.length];
        newWidget.className = 'widget';
        newWidget.style.backgroundColor = randomColor;
        newWidget.style.height = 100 + ((Math.floor(Math.random() * 4)+1)* 70)  + 'px';

        // Cycle through columns
        widgetColumns[columnIndex].appendChild(newWidget);
        columnIndex = (columnIndex + 1) % widgetColumns.length;  // Move to the next column
    }

    function getTallestColumnHeight() {
        return Math.max(...Array.from(widgetColumns).map(col => col.offsetHeight));
    }

    function balanceColumns() {
        const tallestHeight = getTallestColumnHeight();
        widgetColumns.forEach(column => {
            const heightDiff = tallestHeight - column.offsetHeight;
            if (heightDiff > 0) {
                const fillerWidget = document.createElement('div');
                fillerWidget.className = 'widget';
                fillerWidget.style.backgroundColor = colorOptions[3];  // Optional: set a color to differentiate
                fillerWidget.style.height = `${heightDiff}px`;
                column.appendChild(fillerWidget);
            }
        });
    }

    // Add 30 widgets as an example
    for (let i = 1; i <= 30; i++) {
        addWidget(i);
    }

    // Balance columns after adding widgets
    balanceColumns();

    // ScrollReveal configuration
    ScrollReveal().reveal('.widget', {
        duration: 1000,
        interval: 200,
        distance: '50px',
        origin: 'bottom',
        opacity: 0,
        //easing: 'ease-in-out',
        reset: true,
    });
});*/

document.addEventListener('DOMContentLoaded', () => {
    const widgetColumns = document.querySelectorAll('.widget-column');
    const colorOptions = ['#ded3b3', '#3880bd', '#95d4e4', '#952c4f','#0b0935','#177e96','#e44a66','#133784','#3abcd9','#86be6c','green'];
    const possibleHeights = [100, 150, 200, 250];

    function getRandomHeight() {
        columnHeigths = [];
        for(let i=0; i<4; i++){
            columnHeigths.push(possibleHeights[Math.floor(Math.random() * possibleHeights.length)]);
        }
        return columnHeigths;
    }

    function addWidgetsToColumn(column, height) {
        const newWidget = document.createElement('div');
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        newWidget.className = 'widget';
        newWidget.style.backgroundColor = randomColor;
        newWidget.style.height = height + 'px';
        column.appendChild(newWidget);
    }
    // generate widget heights
    let column1heigths = getRandomHeight();
    let column2heigths = getRandomHeight();
    let column3heigths = getRandomHeight();
    let column4heigths = getRandomHeight();
    let column5heigths = getRandomHeight();
    let column6heigths = getRandomHeight();

    // add widgets to columns
    for (let i = 0; i < 4; i++) {

        addWidgetsToColumn(widgetColumns[0], column1heigths[i]);
        addWidgetsToColumn(widgetColumns[1], column2heigths[i]);
        addWidgetsToColumn(widgetColumns[2], column3heigths[i]);
        addWidgetsToColumn(widgetColumns[3], column4heigths[i]);
        addWidgetsToColumn(widgetColumns[4], column5heigths[i]);
        addWidgetsToColumn(widgetColumns[5], column6heigths[i]);
    }

    // find the height of the last widget
    function calculateRemainingHeight(heights) {
        const totalHeight = heights.reduce((acc, height) => acc + height, 0);
        return 950 - totalHeight;
    }

    console.log(column1heigths);
    let lastColumn1Height = calculateRemainingHeight(column1heigths);
    let lastColumn2Height = calculateRemainingHeight(column2heigths);
    let lastColumn3Height = calculateRemainingHeight(column3heigths);
    let lastColumn4Height = calculateRemainingHeight(column4heigths);
    let lastColumn5Height = calculateRemainingHeight(column5heigths);
    let lastColumn6Height = calculateRemainingHeight(column6heigths);

    // add the last widget to the columns
    addWidgetsToColumn(widgetColumns[0], lastColumn1Height);
    addWidgetsToColumn(widgetColumns[1], lastColumn2Height);
    addWidgetsToColumn(widgetColumns[2], lastColumn3Height);
    addWidgetsToColumn(widgetColumns[3], lastColumn4Height);
    addWidgetsToColumn(widgetColumns[4], lastColumn5Height);
    addWidgetsToColumn(widgetColumns[5], lastColumn6Height);



    // ScrollReveal configuration
    ScrollReveal().reveal('.widget', {
        duration: 1000,
        interval: 200,
        distance: '50px',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
        reset: true,
    });
});
