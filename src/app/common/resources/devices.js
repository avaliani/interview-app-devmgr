angular.module('resources.devices', [])

.factory('Devices', [function () {

  return {
    all: function() {

      // TODO: hook this up to firebase or some other db. Ideally wiht the stats constantly changing.
      return [
        {
          ip: '150.1.1.1',
          owner: 'Jack Brown',
          cpuPct: 75,
          memBytes: 2 * 1024 * 1024,
          networkRxBytes: 10 * 1024 * 1024,
          networkTxBytes: 4 * 1024 * 1024
        },
        {
          ip: '164.1.1.1',
          owner: 'Simon Homestead',
          cpuPct: 20,
          memBytes: 1 * 1024 * 1024,
          networkRxBytes: 3 * 1024 * 1024,
          networkTxBytes: 20 * 1024 * 1024
        },
        {
          ip: '171.1.1.1',
          owner: 'Emily Santiago',
          cpuPct: 65,
          memBytes: 3 * 1024 * 1024,
          networkRxBytes: 2 * 1024 * 1024,
          networkTxBytes: 6 * 1024 * 1024
        }
      ];

    }
  };

}]);
