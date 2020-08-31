function drawApple(context, x, y, size, color) {

    /*** Тушка яблока ***/

    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x + 0, y - 10, x - 5, y - 14, x - 12, y - 8);
    context.bezierCurveTo(x - 12, y - 8, x - 20, y + 12, x - 10, y + 15);
    context.bezierCurveTo(x - 10, y + 15, x - 5, y + 20, x + 0, y + 16);
    context.bezierCurveTo(x + 0, y + 16, x + 5, y + 20, x + 10, y + 15);
    context.bezierCurveTo(x + 10, y + 15, x + 20, y + 12, x + 12, y - 8);
    context.bezierCurveTo(x + 12, y - 8, x + 5, y - 14, x + 0, y - 10);
    context.closePath();   
    context.fillStyle = color;
    context.fill();
    // Обводка черным
    context.stroke();

    /*** Хвостик яблока ***/

    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x, y - 10, x + 4, y - 18, x + 10, y - 20);
    context.stroke();

    /*** Листик яблока ***/

    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x, y - 10, x - 2, y - 20, x - 15, y - 20);
    context.bezierCurveTo(x - 15, y - 20, x - 14, y - 12, x, y - 10);
    context.closePath();
    context.fillStyle = "green";
    context.fill();
    // Обводка черным
    context.stroke();
}