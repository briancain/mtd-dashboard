/*
 *  Network Graph Visualizer
 *
 *  Trying vis.js
 *  - http://visjs.org/#example
 *
 *  author: brian cain
 */

function drawNetwork(){
  // create an array with nodes
  var nodes = [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
  ];

  // create an array with edges
  var edges = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
  ];

  // create a graph
  var container = document.getElementById('directedNetworkContainer');
  var data = {
      nodes: nodes,
      edges: edges
  };
  var options = {};
  var graph = new vis.Graph(container, data, options);
}

/*
 *  Query Ancor for Instances
 */
function getInstances() {

}

/*
 *  Query Ancor for Import/Exports
 */
function getEdges() {

}
