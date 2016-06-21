export class HenriPotierService {

	constructor ($log, $http) {
		'ngInject';
		this.$log = $log;
		this.$http = $http;
		this.apiHost = 'http://henri-potier.xebia.fr/';
	}

	getBooks() {
		return this.$http.get(`${this.apiHost}/books`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				this.$log.error(`XHR Failed for getBooks.\n ${angular.toJson(error.data, true)}`);
			});
	}

	getCommercialOffers (isbns) {

		return this.$http.get(`${this.apiHost}/books/${isbns}/commercialOffers`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				this.$log.error(`XHR Failed for getBooks.\n ${angular.toJson(error.data, true)}`);
			})

	}
}
