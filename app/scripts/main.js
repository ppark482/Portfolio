(function(){

	angular.module('Portfolio', [])
		.config( function ($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: '',
				controller: 'HomeControl'
			}); // end route

		}); // end config

}()); // end iif