// F1FeederApp.controllers is passed to app.js, 
// which is linked to index.html, 
// then driversController is used in the body of our html

// $scope holds all the data that will be used within your template.
//ergastAPIservice is a dependency declared in services.js
angular.module('F1FeederApp.controllers', [])
.controller('driversController', function($scope, ergastAPIservice) {
	$scope.nameFilter = null;
	$scope.driversList = [];

	ergastAPIservice.getDrivers().success(function (response) {
		//Dig into the responde to get the relevant data
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	})
});