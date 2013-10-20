@DashboardCtrl = ($scope) ->
  $scope.entries = [
    {name: "weblb"}
    {name: "webapp"}
    {name: "database_master"}
    {name: "database_slave"}
  ]

  $scope.addEntry = ->
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}
