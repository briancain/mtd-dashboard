@DashboardCtrl = ($scope) ->
  $scope.entries = [
    {name: "America"}
    {name: "Hack the Planet"}
    {name: "Moving Target Defense"}
  ]

  $scope.addEntry = ->
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}
