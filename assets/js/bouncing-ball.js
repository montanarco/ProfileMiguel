const numBalls = 5;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);

    const size = Math.random() * 30 + 30; // Random size between 20px and 60px
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;

    const speedFactor = 10 / size; // Smaller balls move faster, larger balls move slower

    balls.push({
        element: ball,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        velocityX: (Math.random() - 0.5) * 10 * speedFactor,
        velocityY: (Math.random() - 0.5) * 10 * speedFactor,
        gravity: 0.9 * speedFactor,
        bounceFactor: 0.7,
        size: size,
        speedFactor: speedFactor,
    });
}

let mouseX = window.innerWidth / 1.5;
let mouseY = window.innerHeight / 1.5;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animate() {
    balls.forEach((ball) => {
        let dx = mouseX - ball.x;
        let dy = mouseY - ball.y;
        
        ball.velocityX += dx * 0.05 * ball.speedFactor;
        ball.velocityY += dy * 0.05 * ball.speedFactor;
        
        ball.velocityY += ball.gravity;
        
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;

        // Check if the ball is hitting the ground (2 cm below the mouse)
        if (ball.y >= mouseY - ball.size) {
            ball.y = mouseY - ball.size;
            ball.velocityY *= -ball.bounceFactor;
            ball.velocityX *= ball.bounceFactor;

            // Change the ball's color
            ball.element.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        
        ball.element.style.left = `${ball.x}px`;
        ball.element.style.top = `${ball.y}px`;

        // Slow down the ball over time
        ball.velocityX *= 0.98;
        ball.velocityY *= 0.98;
    });

    requestAnimationFrame(animate);
}

animate();
