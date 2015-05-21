angular.module('myApp', ['ngMap'])
.controller('LocationCtrl', ['$scope', '$interval', function ($scope, $interval){

	$scope.currentEvent = {
		lat: 20.6524394,
		lon: -103.3500195
	};

	$scope.events = {
		misa: {
			name: 'Misa',
			lat: 20.6220693,
			lon: -103.3057118
		},
		fiesta: {
			name: 'Fiesta',
			lat: 20.618406,
			lon: -103.291089
		}
	};

	$scope.$watch('selectedEvent', function (name){
		if (name) {
			$scope.currentEvent = $scope.events[name];
		}
	})
}]);