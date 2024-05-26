const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

noBtn.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const newX = Math.random() * (containerRect.width - noBtnRect.width);
    const newY = Math.random() * (containerRect.height - noBtnRect.height);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

noBtn.addEventListener('mouseout', () => {
    noBtn.style.left = '';
    noBtn.style.top = '';
});
