class RainbowColorGenerator {
    
    constructor (colorNumbers, startFromZero) {
        this.colorNumbers = colorNumbers;
        
        if (startFromZero)
            this.current = 0;
        else
            this.current = Math.ceil(Math.random() % colorNumbers);
    }

    next = function() {
        
        if (this.current >= this.colorNumbers) {
            this.current = 0;
        }
        var c = this.current / this.colorNumbers; 
        var rgb = rainbowStop(c, 1, 0.5)
        this.current++;
        //alert( `Создана кофеварка, мощность` );
        return rgb;
    }    
}

function rainbowStop(h) {
    let f = (n, k = (n + h * 12) % 12) =>
      0.5 - 0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let rgb2hex = (r, g, b) =>
      "#" +
      [r, g, b]
        .map(x =>
          Math.round(x * 255)
            .toString(16)
            .padStart(2, 0)
        )
        .join("");
    return rgb2hex(f(0), f(8), f(4));
}