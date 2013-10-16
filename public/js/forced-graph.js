(function(){
  var links = [
    {source: "Web Application", target: "Redis Server", type: "mtd"},
    {source: "Web Application", target: "Web Application Load Balancer", type: "mtd"},
    {source: "Web Application", target: "MySQL Slave Database", type: "mtd"},
    {source: "Web Application", target: "MySQL Master Database", type: "mtd"},
    {source: "Web Application Load Balancer", target: "Web Application", type: "mtd"},
    {source: "Redis Server", target: "Web Application", type: "mtd"},
    {source: "Redis Server", target: "Sidekiq Worker Application", type: "mtd"},
    {source: "Sidekiq Worker Application", target: "Redis Server", type: "mtd"},
    {source: "Sidekiq Worker Application", target: "MySQL Slave Database", type: "mtd"},
    {source: "Sidekiq Worker Application", target: "MySQL Master Database", type: "mtd"},
    {source: "MySQL Slave Database", target: "Web Application", type: "mtd"},
    {source: "MySQL Slave Database", target: "Sidekiq Worker Application", type: "mtd"},
    {source: "MySQL Slave Database", target: "MySQL Master Database", type: "mtd"},
    {source: "MySQL Master Database", target: "MySQL Slave Database", type: "mtd"},
    {source: "MySQL Master Database", target: "Sidekiq Worker Application", type: "mtd"}
  ];

  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
  });

  var width = 960,
      height = 500;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(190)
      .charge(-300)
      .on("tick", tick)
      .start();

  var svg = d3.select("#forceGraph").append("svg")
      .attr("width", width)
      .attr("height", height);

  var link = svg.selectAll("link")
      .data(force.links())
    .enter().append("line")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(force.nodes())
    .enter().append("g")
      .attr("class", "node")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .call(force.drag);

  node.append("circle")
      .attr("r", 18);

  node.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  function tick() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }

  function mouseover() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 26);
  }

  function mouseout() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 18);
  }
})();
