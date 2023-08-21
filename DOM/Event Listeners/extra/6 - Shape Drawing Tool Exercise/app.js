const tools = document.querySelectorAll('.tool');
const canvas = document.querySelector('#drawingArea');
const ctx = canvas.getContext('2d');

console.log(ctx);

function drawShape(shape) {
  return function (event) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;
    ctx.beginPath();
    if (shape === 'rectangle') {
      ctx.rect(x, y, 150, 100);
    } else if (shape === 'circle') {
      ctx.arc(x, y, 50, 0, 2 * Math.PI);
    }
    ctx.stroke();
  };
}

tools.forEach((tool) => {
  const shape = tool.dataset.tool;
  tool.addEventListener('click', function () {
    canvas.addEventListener('click', drawShape(shape), { once: true });
  });
});
