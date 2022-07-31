describe("Payment test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 23;
  });

  it('should add a new payment using submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(document.getElementById('payment1')).toBeDefined();
  });

  it('should create a new payment using createCurPayment()', function () {
    submitPaymentInfo();

    expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
  });

  it('should add payment to table using appendPaymentTable()', function () {
    submitPaymentInfo();

    expect(document.getElementById('payment1')).toBeDefined();
  });

  it('should update summary table using updateSummary()', function () {
    submitPaymentInfo();

    expect(summaryTds[0].innerText).toEqual('$100');
  });

  afterEach(function() {
    document.getElementById('payment1').remove();
    summaryTds[0].innerHTML = ""
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    paymentId = 0;
    serverId = 0;
  });
});
