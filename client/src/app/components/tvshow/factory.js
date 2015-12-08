(function() {
	'use strict';
	
	function TvService($http, $log){
		
		var service = {};
		
		service.tv = [];		//PeopleService.movie = [];
		
		service.getTv = function () {
			
			var key = 'd35a0ec112f934f8c62804b80ea4b629';
			
			return $http.get('http://api.themoviedb.org/3/tv/popular', {
				params : {
					api_key: key
				}
			})
			.success(function(data){
				service.tv = data;
			})
			.error(function(){
				console.log('erreur');
			});
			
		};
		
		return service;
		
	}
	
	
	angular.module('services.tv', [])
		.factory('TvService', TvService);
		
	
})();