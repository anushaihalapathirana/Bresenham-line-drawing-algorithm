# Bresenham-line-drawing-algorithm

This Node.js library will facilitate the calculation of Bresenham's line algorithm for a given 2 end points.
      
    npm install bresenham-line-algorithm

This module covers all the possible scenarios of a line
  * Vertical lines
  * Horizontal lines
  * Dioganal lines
  * Lines where 1 > slope > 0
  * Lines with slope > 1
  * Lines with slope < 0
 
## Usage
Method reqire 4 integers (startX, startY, endX, endY) as parameters and bresenham algorithm will generate the line coordinates between the starting and ending points and returns array of objects

To get the coordinates of line from (1,3) to (7,11) use below code
```js
    let bres = require('bresenham-line-algorithm')
    let pointsList = bres.bresenhamLinePoints(1,3,7,11);
```    
The above code snippet returns array of objects as below
```js
    [ { x: 1, y: 3 },
    { x: 2, y: 4 },
    { x: 3, y: 5 },
    { x: 3, y: 6 },
    { x: 4, y: 7 },
    { x: 5, y: 8 },
    { x: 6, y: 9 },
    { x: 6, y: 10 },
    { x: 7, y: 11 } ]
```    
  You can access points using below code
```js  
      for(const point of pointsList) {
        x = point.x
        y = point.y
        // ...
      }
```