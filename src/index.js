
exports.bresenhamLinePoints = function(startX, startY, endX, endY) {
    let outputArray = [];

    const dx = endX - startX;
    const dy = endY - startY;
    const absdx = Math.abs(dx);
    const absdy = Math.abs(dy);

    let x = startX;
    let y = startY;
    outputArray.push({x, y}) // add starting points

    // slope < 1
    if(absdx > absdy) {

        let d = 2*absdy - absdx;

        for(let i = 0; i < absdx; i++) {
            x = dx < 0 ? x-1: x+1;
            if(d < 0) {
                d = d + 2*absdy 
            } else {
                y = dy < 0 ? y-1 : y+1;
                d = d + ( 2*absdy - 2*absdx); 
            }
            outputArray.push({x, y})
        }
    } else { // case when slope is greater than or equals to 1
        let d = 2*absdx - absdy;

        for(let i = 0; i < absdy ; i++)
        {
            y = dy < 0 ? y-1 : y + 1;
            if(d < 0)
                d = d + 2*absdx;
            else
            {
                x = dx < 0 ? x-1 : x + 1;
                d = d + (2*absdx) - (2*absdy);
            }
            outputArray.push({x, y})
        }
    }
    return outputArray;
}
