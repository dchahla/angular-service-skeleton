// F1FeederApp.controllers is passed to app.js, 
// which is linked to index.html, 
// then driversController is used in the body of our html

// $scope holds all the data that will be used within your template.
angular.module('F1FeederApp.controllers', [])
.controller('driversController', function($scope) {
	$scope.driversList = [{
		Driver: {
			givenName: 'Sebastian',
			familyName: 'Vettel'
		},
		points: 322,
		nationality: "German",
		Constructors: [{
			name: "Red Bull"
		}]
	}, {
		Driver: {
			givenName: 'Fernando',
			familyName: 'Alonso'
		},
		points: 207,
		nationality: "Spanish",
		Constructors: [{
			name: "Ferrari"
		}]
	}];
});