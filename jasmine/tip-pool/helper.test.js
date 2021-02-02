describe("Utilities test", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });


    it('should sum total tip amount ', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
      });
    
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });

})