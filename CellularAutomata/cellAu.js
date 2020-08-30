(function() {
    var canvas = document.getElementById('workplace'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth - 50;
            canvas.height = window.innerHeight -50;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
        
context.beginPath();
context.rect(0, 0, canvas.width, canvas.height);
context.closePath();
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fill();
context.stroke();
            // do your drawing stuff here
    }
})();