function drawHeart(context, x, y, size, color) {

    /*** HEART FIGURE  ***/

    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x, y - 3, x - 5, y - 15, x - 25, y - 15);
    context.bezierCurveTo(x - 55, y - 15, x - 55, y + 22, x - 55, y + 22);
    context.bezierCurveTo(x - 55, y + 40, x - 35, y + 62, x, y + 80);
    context.bezierCurveTo(x + 35, y + 62, x + 55, y + 40, x + 55, y + 22);
    context.bezierCurveTo(x + 55, y + 22, x + 55, y - 15, x + 25, y - 15);
    context.bezierCurveTo(x + 10, y - 15, x, y - 3, x, y);
    context.closePath();
    context.fillStyle = color;
    context.fill();
}