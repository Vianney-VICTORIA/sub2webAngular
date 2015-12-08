(function() {
  'use strict';
  	/**
  	*@name config
  	*@description config block
  	*/
  	
  	function config($stateProvider){
	  	$stateProvider
	  		.state('root.tvshow', {
		  		url:'/tvshow',
		  		views: {
			  		'@': {
				  		template : '<tv-show></tv-show>',
			  		}
		  		}
	  		})
	  	
  	}
  	angular.module('tv-show', ['tvDirective'])
		.config(config);

})();
