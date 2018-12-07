Math.toRadians = (deg) => {
	return deg * Math.PI / 180;
};

angular.module('towerApp', [])
	.controller('TowerController', function() {
		var tower = this;
		this.towers = [
			{ id: 1, town: 'Andover', latitude:41.737778,longitude:-72.349722, owner: 'American Tower', height: 180 },
			{ id: 2, town: 'Andover', latitude:41.750175,longitude:-72.402675, owner: 'AT&T', height: 150 },
			{ id: 3, town: 'Andover', latitude:41.705550,longitude:-72.364361, owner: 'CL&P', height: 82 }
		];

		tower.search = () => {
			const R = 6371e3 // pretty much the earth's radius
			const phi1 = Math.toRadians(this.searchLatitude)
			const lam1 = Math.toRadians(this.searchLongitude)
			var phi2, lam2, deltaPhi, deltaLam;
			this.towers.forEach((t) => {
				phi2 = Math.toRadians(t.latitude) // latitude of tower
				lam2 = Math.toRadians(t.longitude) // longitude of tower
				deltaPhi = (phi2-phi1)
				deltaLam = (lam1-lam2)
				var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
					Math.cos(phi1) * Math.cos(phi2) *
					Math.sin(deltaLam/2) * Math.sin(deltaLam/2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
				var d = R * c;
				console.log('tower is ', d, ' meters from search location')
			});
		}

	});