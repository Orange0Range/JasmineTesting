let customMatch = {
  decimalMatch: function(matchersUtil){
    return{
      compare: function(found, wanted) {
        let result = {pass: true, message: ''};
        let temp = found.toString();
        let decPlace = temp.length-temp.indexOf('.')-1;
        if(decPlace === 2){
          result.message = 'Expected' + found + ' to have 2 decimal place precision'
        }
        else{
          result.pass = fasle;
          result.message = 'Expected' + found + ' to have 2 decimal place precision, but it failed'
        }
        return result;
      }
    }
  }
}

describe('Calculate Monthly Rate', function(){
it('should calculate the monthly rate correctly', function () {
  let test1 = {amount: 0, years: 30, rate: 3.4};
  let test2 = {amount: 300000, years: 30, rate: 3.4}
  expect(calculateMonthlyPayment(test1)).not.toEqual(500);
  expect(calculateMonthlyPayment(test2)).toEqual(1330.44);
});
})

describe('Decimal Place', function(){
it("should return a result with 2 decimal places", function() {
  jasmine.addMatchers(customMatch);
  expect(calculateMonthlyPayment({amount: 300000, years: 30, rate: 3.4})).decimalMatch();
});
})
