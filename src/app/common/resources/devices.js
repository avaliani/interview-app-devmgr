angular.module('resources.devices', [])

.factory('Devices', [function () {

  return {
    all: function() {

      // TODO: hook this up to a db. Ideally with the stats constantly changing.
      return [
        {
          ip: '150.1.1.1',
          owner: 'Jack Brown',
          cpuPct: 75,
          memBytes: 2 * 1024 * 1024 * 1024,
          networkRxBytes: 10 * 1024 * 1024,
          networkTxBytes: 4 * 1024 * 1024
        },
        {
          ip: '164.1.1.1',
          owner: 'Simon Homestead',
          cpuPct: 20,
          memBytes: 1 * 1024 * 1024 * 1024,
          networkRxBytes: 3 * 1024 * 1024,
          networkTxBytes: 20 * 1024 * 1024
        },
        {
          ip: '171.1.1.1',
          owner: 'Emily Santiago',
          cpuPct: 65,
          memBytes: 3 * 1024 * 1024 * 1024,
          networkRxBytes: 2 * 1024 * 1024,
          networkTxBytes: 6 * 1024 * 1024
        },
        {
          ip: '231.1.1.1',
          owner: 'Rosalie Guthrie',
          cpuPct: 15,
          memBytes: 1.5 * 1024 * 1024 * 1024,
          networkRxBytes: 2.7 * 1024 * 1024,
          networkTxBytes: 6.3 * 1024 * 1024
        },
        {
          ip: '181.1.1.1',
          owner: 'Mary Morales',
          cpuPct: 45,
          memBytes: 45 * 1024 * 1024 * 1025,
          networkRxBytes: 64 * 1024 * 1024,
          networkTxBytes: 74 * 1024 * 1024
        },
        {
          ip: '191.1.1.1',
          owner: 'Judith Mcintosh',
          cpuPct: 50,
          memBytes: 3 * 1024 * 1024 * 1024,
          networkRxBytes: 40 * 1024 * 1024,
          networkTxBytes: 65 * 1024 * 1024
        },
        {
          ip: '179.1.1.1',
          owner: 'Elise Grace Pacheco',
          cpuPct: 70,
          memBytes: 70 * 1024 * 1024 * 1024,
          networkRxBytes: 30 * 1024 * 1024,
          networkTxBytes: 20 * 1024 * 1024
        }
      ];

    }
  };

}]);
