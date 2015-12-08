(function() {
	'use strict';
	
	function MovieService($http, $log){
		
		var service = {};
		
		service.movie = [];		//MovieService.movie = [];
		
		service.getMovie = function () {
			
			var key = 'd35a0ec112f934f8c62804b80ea4b629';
			
			return $http.get('https://api.themoviedb.org/3/movie/popular', {
				params : {
					api_key: key
				}
			})
			.success(function(data){
				service.movie = data;
			})
			.error(function(){
				console.log('erreur');
			});
			
		};
		
		return service;
		
	}
	
	
	angular.module('services.movie', [])
		.factory('MovieService', MovieService);
		
	
})();