export function HenriPotierDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: '/app/components/henriPotier/henriPotier.template.html',
		controller: HenriPotierController,
		controllerAs: 'hp'
	};

	return directive;

}

class HenriPotierController {
	
	constructor ($log, $rootScope, HenriPotierService, LocalService, toastr) {
		'ngInject';
		this.$log = $log;
		this.books = [];
		this.HenriPotierService = HenriPotierService;
		this.LocalService = LocalService;
		this.toastr = toastr;
		this.$rootScope = $rootScope;

		this.activate();
	}

	activate() {
		return this.getBooks().then(() => {
			this.$log.info('Books ok');
		});
	}

	getBooks() {
		return this.HenriPotierService.getBooks().then((data) => {
			this.books = data;

			return this.books;
		});
	}

	store(book) {
		
		// Get LocalStorage item "books";
		let books = angular.fromJson(this.LocalService.get('books'));
		let isbns = angular.fromJson(this.LocalService.get('isbns'));
		let price = angular.fromJson(this.LocalService.get('price'));
		let toStore;
		let isbn; 

		book.quantity = 1;

		if (books === null) {
			toStore = [book];
		} else {
			books.push(book);
			toStore = books;
		}

		if (isbns === null) {
			isbn = [book.isbn];
		} else {
			isbns.push(book.isbn);
			isbn = isbns;
		}

		// Set LocalStorage item "books";
		this.LocalService.set('books', angular.toJson(toStore));
		this.LocalService.set('isbns', angular.toJson(isbn));
		this.LocalService.set('nbBooks', toStore.length);
		this.LocalService.set('price', price + book.price);
		this.$rootScope.$broadcast('newBook');

		// Set tostr vars
		let title = 'Article ajouté !';
		let message = `Le livre "${book.title}" vient d'être ajouté à votre panier !`;
		
		// Display toast
		this.toastr.success(message, title);

	}

}