describe("Helpers test (with setup and tear-down)", function() {

  it('should sum payment totals using sumPaymentTotal()', function () {
    
    billAmtInput.value = 100;
    tipAmtInput.value = 23;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(100);
    expect(sumPaymentTotal('tipAmt')).toEqual(23);
    
    document.getElementById('payment1').remove();
    summaryTds[0].innerHTML = ""
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });

  it('should return tip percentage using calculateTipPercent()', function () {

    expect(calculateTipPercent(100, 23)).toEqual(23);

  });

  it('should append payment table using appendPaymentTable()', function () {
    
    let temp = document.createElement('tr');
    temp.id = 'testID'
    appendTd(temp, 'test')
    paymentTbody.append(temp);
    console.log(document.getElementById('testID').children[0]);
    expect(document.getElementById('testID').children[0].innerText).toEqual('test');
    document.getElementById('testID').remove();
  });
});
