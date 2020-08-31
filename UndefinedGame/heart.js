
/* 0 - (x, y) point
    -   -
  -   0   -
    -   -
      -
*/
function drawHeart(context, x, y, color) {

    /*** HEART FIGURE  ***/

    context.save();
    //context.setTransform(1, 0.5, -0.5, 1, 0, 0);
    context.translate(x, y);
    context.rotate(Math.PI / 4);

    context.beginPath();
    context.moveTo(0, 0);
    context.bezierCurveTo(0, -3, -5, -15, -25, -15);
    context.bezierCurveTo(-55, -15, -55, 22, -55, 22);
    context.bezierCurveTo(-55, 40, -35, 62, 0, 80);
    context.bezierCurveTo(35, 62, 55, 40, 55, 22);
    context.bezierCurveTo(55, 22, 55, -15, 25, -15);
    context.bezierCurveTo(10, -15, 0, -3, 0, 0);
    context.closePath();

    

    // Чтобы фоточка норм ложилась надо контекст здесь двигать обратно
    // Иначе не работает
    // Но цвета всегда норм ложаться
    context.translate(-x, -y);

    context.fillStyle = color;
    context.fill();
    context.stroke();

    context.restore();

    //context.rotate(-Math.PI / 4);

    // А вот вращение наоборот. Очень...интересный подход к проектированию
    //context.rotate(-angle);
    
}