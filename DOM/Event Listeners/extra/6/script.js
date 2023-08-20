const tools = document.querySelectorAll(".tool");
const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");

function drawShape(shape) {
  return function (event) {
    ctx.beginPath();
    if (shape === "rectangle") {
      ctx.rect(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop,
        120,
        50
      );
    } else if (shape === "circle") {
      ctx.arc(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop,
        20,
        0,
        2 * Math.PI
      );
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
