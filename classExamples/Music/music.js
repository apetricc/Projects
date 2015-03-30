(function() {
	var app = angular.module('music', []);

	app.controller('MusicianController', ['$scope', function($scope) {
		$scope.name = $scope.genre = $scope.instrument = '';
		$.getJSON('getMusician', function(result) {
			$scope.musicians = result;
		});

        
          $(document).keypress(function(e) {
      if(e.which == 13) {   
          addMusician();
          return false;
      }
  });
        
        var addMusician = function() {
		$scope.add = function() {
			var newMusician = {
				"name" : $scope.name,
				"genre" : $scope.genre,
				"instrument" : $scope.instrument
			};
			$scope.musicians.push(newMusician);
			$.post('putMusician', newMusician);
		  $scope.name = $scope.genre = $scope.instrument = '';
		};
        };
		
		$scope.remove = function(musician) {
			$scope.musicians.splice($scope.musicians.indexOf(musician), 1);
			$.post('removeMusician', musician);
		};									 
	}]);
}());
