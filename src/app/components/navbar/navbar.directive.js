export function NavbarDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/navbar/navbar.html',
		controller: NavbarController,
		controllerAs: 'vm',
		bindToController: true
	};

	return directive;
}

class NavbarController {
	constructor ($scope, LocalService) {
		'ngInject';

		this.LocalService = LocalService;
		this.$scope = $scope;
		this.getNbBooks();

		this.$scope.$on('newBook', () => {
			this.$scope.nbBooks = parseInt(this.$scope.nbBooks) + 1;
		});

	}

	getNbBooks () {

		let nbBooks = this.LocalService.get('nbBooks');

		if (nbBooks === null) {
			nbBooks = 0;
		}

		this.$scope.nbBooks = nbBooks;


	}

}
