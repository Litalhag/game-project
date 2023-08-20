const tools = document.querySelectorAll(".tool");
const canvas = document.getElementById("drawingArea");

const ctx = canvas.getContext("2d");
function drawShape(shape) {
  return function (event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.beginPath();
    if (shape === "rectangle") {
      ctx.rect(x - 75, y - 50, 150, 100);
    } else {
      ctx.arc(x, y, 50, 0, 2 * Math.PI);
    }
    ctx.stroke();
  };
}

tools.forEach((tool) => {
  const shape = tool.dataset.tool;
  tool.addEventListener("click", function () {
    canvas.addEventListener("click", drawShape(shape), { once: true });
  });
});
