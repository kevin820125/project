
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 10,
    rate: 2.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('9.38')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 21453,
    years: 2,
    rate: 8
  };
    expect(calculateMonthlyPayment(values)).toEqual('970.26')
  
});

