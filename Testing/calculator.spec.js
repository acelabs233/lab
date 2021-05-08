describe("./calculator.js", function(){
    it('should add numbers to total',function(){
        const cal = new Calculator();
        cal.add(11);

        expect(cal.total).toBe(11);
    });
    it('should subtract numbers to total',function(){
        const cal = new Calculator();
        cal.subtract(11);

        expect(cal.total).toBe(-11);
    });
    it('should mutiply numbers to total',function(){
        const cal = new Calculator();
        cal.mutiply(11);

        expect(cal.total).toBe(0);
    });
    it('does not handle nan',function(){
        const cal = new Calculator 
    });
});