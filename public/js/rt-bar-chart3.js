/*
 *  Real Time Bar Chart
 *
 *  Might want to place this in 1 js file and seperate
 *  them by function names
 *
 *  Brian Cain
 */

(function() {
  var t = 1297110663, // start time (seconds since epoch)
      v = 70, // start value (subscribers)
      fakeData = d3.range(33).map(chartNext); // starting dataset

  var w = 15,
      h = 80;

  var x = d3.scale.linear()
      .domain([0, 1])
      .range([0, w]);

  var y = d3.scale.linear()
      .domain([0, 100])
      .rangeRound([0, h]);

  var chart = d3.select("#barChart3").append("svg")
      .attr("class", "customChart3")
      .attr("width", w * fakeData.length - 1)
      .attr("height", h);

  function chartNext() {
    return {
      time: ++t,
      value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
    };
  }

  //chart.append("customChartLine")
  //    .attr("x1", 0)
  //    .attr("x2", w * fakeData.length)
  //    .attr("y1", h - .5)
  //    .attr("y2", h - .5)
  //    .style("stroke", "#000");

  redraw();

  function redraw() {

    var rect = chart.selectAll("rect")
        .data(fakeData, function(d) { return d.time; });

    rect.enter().insert("rect", "customLine")
        .attr("x", function(d, i) { return x(i + 1) - .5; })
        .attr("y", function(d) { return h - y(d.value) - .5; })
        .attr("width", w)
        .attr("height", function(d) { return y(d.value); })
      .transition()
        .duration(1000)
        .attr("x", function(d, i) { return x(i) - .5; });

    rect.transition()
        .duration(1000)
        .attr("x", function(d, i) { return x(i) - .5; });

    rect.exit().transition()
        .duration(1000)
        .attr("x", function(d, i) { return x(i - 1) - .5; })
        .remove();
  }

  setInterval(function() {
    fakeData.shift();
    fakeData.push(chartNext());
    redraw();
    d3.timer.flush(); // avoid memory leak when in background tab
  }, 1500);
})();
