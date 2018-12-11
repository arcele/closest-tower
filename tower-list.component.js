angular.module('towerApp')
	.component('towerList', {
		template:
			'<div>'+
				'<label>Results:</label>'+
				<!-- but searchResults are on the top level module, not on this component -->
				'<li ng-repeat="result in $ctrl.searchResults">' +
					'<label class="checkbox">' +
						'<span>{{result.distance}} km away from {{result.tower.Height}}ft tall {{result.tower["Tower Type"]}} tower in {{result.tower.Town}}</span>' +
					'</label>' +
				'</li>' +
			'</div>',
	})