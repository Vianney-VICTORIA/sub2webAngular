(function() {
  'use strict';
  	/**
  	*@name config
  	*@description config block
  	*/
  	
  	function config($stateProvider){
	  	$stateProvider
	  		.state('root.peoplePopular', {
		  		url:'/people',
		  		views: {
			  		'@': {
				  		template : '<people-popular></people-popular>',
			  		}
		  		}
	  		})
	  	
  	}
  	angular.module('people-popular', ['peoplePopularDirective'])
		.config(config);

})();
