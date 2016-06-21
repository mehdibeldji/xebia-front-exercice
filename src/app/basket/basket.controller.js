export class BasketController {
	constructor ($log, $scope, LocalService, HenriPotierService) {
		'ngInject';

		this.LocalService = LocalService;
		this.HenriPotierService = HenriPotierService;
		this.$scope = $scope;
		this.$log = $log;
		this.$scope.delete = this.delete();

		this.getBasket();

	}

	getBasket () {

		let basket = angular.fromJson(this.LocalService.get('books'));
		let isbns = angular.fromJson(this.LocalService.get('isbns'));
		let priceWithoutOffer = angular.fromJson(this.LocalService.get('price'));
		
		this.$scope.items = basket;
		this.$scope.totalPrice = priceWithoutOffer;

		if (isbns !== null) {
			
			this.HenriPotierService.getCommercialOffers(isbns.toString()).then((data) => {

				for (let i = 0; i < data.offers.length; i++) {

					let priceWithOffer = priceWithoutOffer - data.offers[i].value;
					if (priceWithOffer < this.$scope.totalPrice) {
						this.$scope.totalPrice = priceWithoutOffer - data.offers[i].value
						this.$log.info(this.$scope.totalPrice);
					}				

				}

			});

		}

	}

	// TODO
	delete (item) {

		this.$log.info('DELETE !!!');

	}

}
