const gameContainer = document.getElementById('game-container');
const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score-display');

let score = 0;
let basketX = 170; // Начальная позиция корзины

// Управление корзиной с помощью клавиш
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && basketX > 0) {
        basketX -= 20;
    } else if (e.key === 'ArrowRight' && basketX < 340) {
        basketX += 20;
    }
    basket.style.left = `${basketX}px`;
});

// Создание нового яблока
function createApple() {
    const apple = document.createElement('div');
    apple.classList.add('apple');
    const startX = Math.random() * 370;
    apple.style.left = `${startX}px`;
    gameContainer.appendChild(apple);
    
    let appleY = 0;
    const appleInterval = setInterval(() => {
        appleY += 5;
        apple.style.top = `${appleY}px`;

        // Проверка на столкновение с корзиной
        if (appleY > 520 && 
            startX > basketX - 30 && 
            startX < basketX + 60) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            clearInterval(appleInterval);
            apple.remove();
        } else if (appleY > 590) { // Яблоко упало
            clearInterval(appleInterval);
            apple.remove();
        }
    }, 50);
}

// Запуск создания яблок
setInterval(createApple, 1000);
