const drawingArea = document.getElementById("drawingArea");
const ctx = drawingArea.getContext("2d");

let isDrawing = false;
drawingArea.addEventListener("mousedown", () => {
  isDrawing = true;
});
drawingArea.addEventListener("mouseup", () => {
  isDrawing = false;
});
function trackMousePath() {
  let prevX = 0;
  let prevY = 0;

  return function (event) {
    if (!isDrawing) return;

    const hue = Math.random() * 360;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(
      event.clientX - drawingArea.offsetLeft,
      event.clientY - drawingArea.offsetTop
    );
    ctx.stroke();

    [prevX, prevY] = [
      event.clientX - drawingArea.offsetLeft,
      event.clientY - drawingArea.offsetTop,
    ];
  };
}

const drawPath = trackMousePath();

drawingArea.addEventListener("mousemove", drawPath);
