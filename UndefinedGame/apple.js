class Apple {

    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    drawApple = function(context) {

        context.save();

        context.translate(this.x, this.y);
    
        /*** Тушка яблока ***/
    
        context.beginPath();
        context.moveTo(0, 0);
        context.bezierCurveTo(0, -10, -5, -14, -12, -8);
        context.bezierCurveTo(-12, -8, -20, 12, -10, 15);
        context.bezierCurveTo(-10, 15, -5, 20, 0, 16);
        context.bezierCurveTo(0, 16, 5, 20, 10, 15);
        context.bezierCurveTo(10, 15, 20, 12, 12, -8);
        context.bezierCurveTo(12, -8, 5, -14, 0, -10);
        context.closePath();   
        context.fillStyle = this.color;
        context.fill();
        // Обводка черным
        context.stroke();
    
        /*** Хвостик яблока ***/
    
        context.beginPath();
        context.moveTo(0, 0);
        context.bezierCurveTo(0, -10, 4, -18, 10, -20);
        context.stroke();
    
        /*** Листик яблока ***/
    
        context.beginPath();
        context.moveTo(0, 0);
        context.bezierCurveTo(0, -10, -2, -20, -15, -20);
        context.bezierCurveTo(-15, -20, -14, -12, 0, -10);
        context.closePath();
        context.fillStyle = "green";
        context.fill();
        // Обводка черным
        context.stroke();
    
        context.restore();
    }
}
