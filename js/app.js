angular.module('myApp', ['ngMap', 'matchMedia'])
.controller('LocationCtrl', ['$scope', '$interval', function ($scope, $interval){

	$scope.currentEvent = {
		lat: 20.6524394,
		lon: -103.3500195
	};

	$scope.events = {
		misa: {
			name: 'Misa',
			lat: 20.6220693,
			lon: -103.3057118,
			place: 'Parroquia Santos Mártires Mexicanos',
			dir: 'San Pedro Apostol #887 Col. Lomas de San Miguel',
			hora: '13:00 hrs.',
			fecha: '23 de Mayo 2015'
		},
		fiesta: {
			name: 'Fiesta',
			lat: 20.618406,
			lon: -103.291089,
			place: 'Terraza Ruvelin',
			dir: 'Pemex #294 Col. San Pedrito',
			hora: '15:00 hrs.',
			fecha: '23 de Mayo 2015'
		}
	};

	$scope.$watch('selectedEvent', function (name){
		if (name) {
			$scope.currentEvent = $scope.events[name];
		}
	})
}])
.controller('ParentsCtrl', ['$scope', function ($scope){
	$scope.parents = {
		'01pablo': {
			name: 'Juan Pablo Macias Ramos',
			parent: 'Papá',
			img: 'img/pablo_.jpg'
		},
		'02miriam': {
			name: 'Miriam Elizabeth Preciado Flores',
			parent: 'Mamá',
			img: 'img/miriam.jpg'
		},
		'03aaron': {
			name: 'Javier Aarón Macias Ramos',
			parent: 'Padrino',
			img: 'img/aaron.jpg'
		},
		'04jazmin': {
			name: 'Jazmin Alejandra Preciado Flores',
			parent: 'Madrina',
			img: 'img/jazmin.jpg'
		}
	};
}]);