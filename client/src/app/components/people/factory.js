(function() {
	'use strict';
	
	function PeopleService($http, $log){
		
		var service = {};
		
		service.people = [];		//PeopleService.movie = [];
		
		service.getPerson = function () {
			
			var key = 'd35a0ec112f934f8c62804b80ea4b629';
			
			return $http.get('http://api.themoviedb.org/3/person/popular', {
				params : {
					api_key: key
				}
			})
			.success(function(data){
				service.people = data;
			})
			.error(function(){
				console.log('erreur');
			});
			
		};
		
		return service;
		
	}
	
	
	angular.module('services.people', [])
		.factory('PeopleService', PeopleService);
		
	
})();