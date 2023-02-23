const  test = require('../test')

describe('Math Test', () =>
{

    it('Add Functionality', ()=>{
        const actualResult = test.add(10,20);

        const expectedResult =30 ;

        expect(expectedResult).toBe(actualResult);
    })

    it('Substraction Function', () =>
    {
        const subFunction = test.sub(30,10);
        
        expect(20).toBe(subFunction);
        
    })
})