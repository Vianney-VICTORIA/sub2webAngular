(function() {
	'use strict';
	
	function tvShow(TvService){
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/components/tvshow/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, TvService){
				var vm = this;
				TvService.getTv().then(function(data){
					console.log(data.data.results);
					vm.tv = data.data.results;
					
				});
			},
			link: function(scope, elm, attrs){
				
			}
		};
	}	
	angular.module('tvDirective', ['services.tv'])
		.directive('tvShow', tvShow);			
})();