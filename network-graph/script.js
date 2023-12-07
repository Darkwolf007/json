Highcharts.addEvent(
  Highcharts.Series,
  'afterSetOptions',
  function (e) {
    var colors = Highcharts.getOptions().colors,
      i = 0,
      nodes = {};

    if (
      this instanceof Highcharts.seriesTypes.networkgraph &&
      e.options.id === 'lang-tree'
    ) {
      e.options.data.forEach(function (link) {

        if (link[0] === 'Modular Unit') {
          nodes['Modular Unit'] = {
            id: 'Modular Unit',
            marker: {
              radius: 20
            }
          };
          nodes[link[1]] = {
            id: link[1],
            marker: {
              radius: 10
            },
            color: colors[i++]
          };
        } else if (nodes[link[0]] && nodes[link[0]].color) {
          nodes[link[1]] = {
            id: link[1],
            color: nodes[link[0]].color
          };
        }
      });

      e.options.nodes = Object.keys(nodes).map(function (id) {
        return nodes[id];
      });
    }
  }
);

Highcharts.chart('container', {
  chart: {
    type: 'networkgraph',
    height: '100%'
  },
  title: {
    text: 'The Indo-European Language Tree'
  },
  subtitle: {
    text: 'A Force-Directed Network Graph in Highcharts'
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        friction: -0.9
      }
    }
  },
  series: [{
    dataLabels: {
      enabled: true,
      linkFormat: ''
    },
    id: 'lang-tree',
    data: [

      ['Modular Unit', 'Area'],
      ['Modular Unit', 'Logic'],
      ['Modular Unit', 'Object'],
      ['Modular Unit', 'Class'],
      ['Area', 'Acitivity room'],
      ['Area', 'Kitchen'],
      ['Area', 'Bathroom'],
      ['Area', 'Office'],
      ['Bathroom', '1 window'],
      ['Bathroom', 'south'],
      ['Office', '1 window'],
      ['Office', 'south'],
      ['Kitchen', '1 window'],
      ['Kitchen', 'north'],
      ['Acitivity room', '2 window'],
      ['Acitivity room', 'north'],
      ['Logic', 'Access'],
      ['Logic', 'Totalarea'],
      ['Logic', 'Total area'],
      ['Logic', 'Furniture'],
      ['Logic', 'Load'],
      ['Class', 'Material'],   
      ['Class', 'Profile'],    
      ['Class', 'Section'],    
      ['Material', 'Name'],  
      ['Material', 'Density'], 
      ['Section', 'Name'], 
      ['Section', 'Height'],
      ['Section', 'Width'],
      ['Profile', 'Name'],
      ['Profile', 'Geometry'],
      ['Name', 'String'],
      ['Height', 'Double'],
      ['Width', 'Double'],
      ['Density', 'Double'],
      ['Object', 'Column'],
      ['Column', 'Struct'],
      ['Column', 'Arch'],
      ['Struct', 'Line'],
      ['Struct', 'Profile'],
      ['Struct', 'Align'],
      ['Struct', 'Angle'],
      ['Struct', 'EndRealease'],
      ['Struct', 'StartRealease'],
      ['Struct', 'Load'],
      ['Struct', 'Connect2Wall'],
      ['Arch', 'Position'],
      ['Arch', 'Height'],
      ['Arch', 'Profile'],
      ['Arch', 'Align'],
      ['Arch', 'Angle'],
      ['Arch', 'Material'],
      ['Arch', 'Thickness'],
      ['Arch', 'Material'],
      ['Arch', 'Host'],
      ['Arch', 'styleType'],
      ['Arch', 'Geometry'],
      ['Line', 'Geometry'],
      ['Align', 'Integer'],
      ['Angle', 'Double'],
      ['Position', 'Double'],
      ['Thickness', 'Double'],
      ['Host', 'id'],
      ['styletype', 'id'],
      ['Geometry', 'id'],
    ]
  }]
});

