const stars = document.querySelectorAll('.gothic-cruise-box');
const windowWidth = window.innerWidth;

window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.inbloom-box');
    const stars = document.querySelectorAll('.gothic-cruise-box');
    const parallaxScrollingElements = [...stars, moon];
  
    parallaxScrollingElements.forEach((element) => {
      const elementMoveSpeed = Number(element.dataset.speed);
      element.style.transform = `
        translateY(${scrollPositionY * elementMoveSpeed}px)
      `;
    });
  });
  