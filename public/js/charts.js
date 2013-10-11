var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y%m%d").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.cpu_load); });

var svg = d3.select("#graphs").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/data.csv", function(data) {
  console.log(arguments);
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

  data.forEach(function(d) {
    d.date = parseDate(d.date);
  });

  var services = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {date: d.date, cpu_load: +d[name]};
      })
    };
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));

  y.domain([
    d3.min(services, function(c) { return d3.min(c.values, function(v) { return v.cpu_load; }); }),
    d3.max(services, function(c) { return d3.max(c.values, function(v) { return v.cpu_load; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("CPU Load");

  var service = svg.selectAll(".service")
      .data(services)
    .enter().append("g")
      .attr("class", "service");

  service.append("path")
      .attr("class", "customChartLine")
      .attr("d", function(d) { return line(d.values); })
      .attr("data-legend",function(d) { return d.name})
      .style("stroke", function(d) { return color(d.name); });

  service.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.cpu_load) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });


  legend = svg.append("g")
    .attr("class","legend")
    .attr("transform","translate(50,30)")
    .style("font-size","12px")
    .call(d3.legend)

  setTimeout(function() {
    legend
      .style("font-size","20px")
      .attr("data-style-padding",10)
      .call(d3.legend)
  },1000)

});
