console.log("script lié");


document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
    const cardContainer = document.querySelector('.card-container');

    leftButton.addEventListener('click', () => {
        cardContainer.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        cardContainer.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});
