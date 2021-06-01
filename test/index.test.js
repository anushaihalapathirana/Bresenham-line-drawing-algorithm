const expect = require('chai').expect;
const index = require('../src/index');

describe('bresenhamLinePoints', () => {
    it('should return correct array - vertical', () => {
        const res = [ { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 2, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 2, y: 8 },
            { x: 2, y: 9 } ]
      
        expect(index.bresenhamLinePoints(2,2,2,9)).to.deep.equal(res);   
    });
    it('should return correct array - Hrizontal', () => {
        const res = [ { x: 3, y: 2 },
            { x: 4, y: 2 },
            { x: 5, y: 2 },
            { x: 6, y: 2 },
            { x: 7, y: 2 },
            { x: 8, y: 2 }]
      
        expect(index.bresenhamLinePoints(3,2,8,2)).to.deep.equal(res);   
    });
    it('should return correct array - Diagonal', () => {
        const res = [ { x: 3, y: 2 },
            { x: 4, y: 3 },
            { x: 5, y: 4 },
            { x: 6, y: 5 },
            { x: 7, y: 6 },
            { x: 8, y: 7 }]
      
        expect(index.bresenhamLinePoints(3,2,8,7)).to.deep.equal(res);   
    });
    it('should return correct array - slope > 1', () => {
        const res = [ { x: 10, y: 3 },
            { x: 9, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 7, y: 7 },
            { x: 6, y: 8}]
      
        expect(index.bresenhamLinePoints(10,3,6,8)).to.deep.equal(res);   
    });
    it('should return correct array - startX > endX', () => {
        const res = [ { x: 3, y: 5 }, 
            { x: 2, y: 4 },
            { x: 1, y: 4 }]
      
        expect(index.bresenhamLinePoints(3,5,1,4)).to.deep.equal(res);   
    });
    it('should return correct array - slope < 0', () => {
        const res = [ { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 4, y: 1 },
            { x: 5, y: 1 },
            { x: 6, y: 0 },
            { x: 7, y: 0 },
            { x: 8, y: 0 },
            { x: 9, y: -1 },
            { x: 10, y: -1 },
            { x: 11, y: -2 },
            { x: 12, y: -2 } ]
      
        expect(index.bresenhamLinePoints(2,2,12,-2)).to.deep.equal(res);   
    });
    it('should return correct array - 1 > slope > 0', () => {
        const res = [ { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 3 },
            { x: 5, y: 4 },
            { x: 6, y: 5 },
            { x: 7, y: 6 },
            { x: 8, y: 6 },
            { x: 9, y: 7 },
            { x: 10, y: 8 },
            { x: 11, y: 8 },
            { x: 12, y: 9 } ]
      
        expect(index.bresenhamLinePoints(2,2,12,9)).to.deep.equal(res);   
    });
});
