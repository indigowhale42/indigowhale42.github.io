function drawSpeechBalloonQuadratic(context, x, y, color) {

    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x - 50, y, x - 50, y + 37);
    context.quadraticCurveTo(x - 50, y + 75, x - 25, y + 75);
    context.quadraticCurveTo(x - 25, y + 95, x - 40, y + 100);
    context.quadraticCurveTo(x - 15, y + 95, x - 10, y + 75);
    context.quadraticCurveTo(x + 50, y + 75, x + 50, y + 37);
    context.quadraticCurveTo(x + 50, y, x, y);
    context.closePath();
    context.stroke();
}

/*
 * (0, 0) point in center (tail included)
*/
function drawSpeechBalloonQuadratic(context, x0, y0, scaleWidth, scaleHeight, color) {

    y = y0 - 50 * scaleHeight;
    x = x0; 

    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x - 50 * scaleWidth, y,                    x - 50 * scaleWidth, y + 37 * scaleHeight);
    context.quadraticCurveTo(x - 50 * scaleWidth, y + 75 * scaleHeight, x - 25 * scaleWidth, y + 75 * scaleHeight);
    context.quadraticCurveTo(x - 25 * scaleWidth, y + 95 * scaleHeight, x - 40 * scaleWidth, y + 100 * scaleHeight);
    context.quadraticCurveTo(x - 15 * scaleWidth, y + 95 * scaleHeight, x - 10 * scaleWidth, y + 75 * scaleHeight);
    context.quadraticCurveTo(x + 50 * scaleWidth, y + 75 * scaleHeight, x + 50 * scaleWidth, y + 37 * scaleHeight);
    context.quadraticCurveTo(x + 50 * scaleWidth, y, x, y);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.stroke();
}