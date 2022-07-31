describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table using updateServerTable()', function () {
    submitServerInfo();

    expect(document.getElementById('server1')).toBeDefined();
  });

  afterEach(function() {
    document.getElementById('server1').remove();
    serverId =0;
    serverNameInput.value = '';
    allServers ={};
  });
});
