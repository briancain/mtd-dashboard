/* TODO:
   Access instance data structure
   and get id from hash, display
   modal view of specific instance data
*/

function generateInstance(id) {
  // console.log("id of instance: " + id);

  $.getJSON("/ancor-api-sample/instances/"+id+".json", function(result) {
    var instanceData = "<table class=\"table table-striped\"><thead><tr><th>Data</th><th>Value</th></tr></thead><tbody>",
        importExportData = "",
        instanceName = "";

    for (var obj in result) {
      if (obj == "imports"
       || obj == "exports") {

        console.log(obj + ": ");
        importExportData += "<h2>" + obj + "</h2>";
        importExportData += "<table class=\"table table-striped\"><thead><tr><th>Data</th><th>Value</th></tr></thead><tbody>";
        for (var elem in result[obj]) {
          for (var v in result[obj][elem]) {
            console.log("-->" + v + ": " + result[obj][elem][v]);
            importExportData += "<tr><td>" + v + "</td>";
            importExportData += "<td>" + result[obj][elem][v] + "</td></tr>";
          }
        }
        importExportData += "</tbody></table></br>";
      }
      else {
        if (obj == 'name') {
          instanceName = "<h2>" + result[obj] + "</h2>";
        }

        console.log(obj + ": " + result[obj]);
        instanceData += "<tr><td>" + obj + "</td>";
        instanceData += "<td>" + result[obj] + "</td></tr>";
      }
    }
    instanceData += "</tbody></table>";
    $('#instanceInfo')[0].innerHTML = instanceName + instanceData;
    $('#importExportInfo')[0].innerHTML = importExportData;
  });
}

function getInstances() {
  $.getJSON("/ancor-api-sample/instances.json", function(result) {
      for (var obj in result) {
        for (var id in result[obj]) {
          if (id == "id") {
            console.log(result[obj][id]);
          }
        }
      }
  });
}
