const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const totalSquares = 800;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor(); // or fixed color
    setTimeout(() => {
      square.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  });

  container.appendChild(square);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
