export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.state('basket', {
			url: '/basket',
			templateUrl: 'app/basket/basket.html',
			controller: 'BasketController',
			controllerAs: 'bask'
		})
		;

$urlRouterProvider.otherwise('/');
}
