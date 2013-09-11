@DashboardCtrl = ($scope) ->
  $scope.entries = [
    {name: "Things"}
    {name: "Hack the Planet"}
    {name: "Defend Your Moving Target"}
  ]

  $scope.addEntry = ->
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}
