(function() {
	'use strict';
	
	function PopularPeople(PeopleService){
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/components/people/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, PeopleService){
				var vm = this;
				PeopleService.getPerson().then(function(data){
					console.log(data.data.results);
					vm.people = data.data.results;
					
				});
			},
			link: function(scope, elm, attrs){
				
			}
		};
	}	
	angular.module('peoplePopularDirective', ['services.people'])
		.directive('peoplePopular', PopularPeople);			
})();