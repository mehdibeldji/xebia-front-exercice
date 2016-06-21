export class LocalService {

	constructor () {
		'ngInject';
	}

	get(key) {
		return localStorage.getItem(key);
	}

	set(key, val) {
		return localStorage.setItem(key, val);
	}

	unset(key) {
		return localStorage.removeItem(key);
	}

	clear () {
		return localStorage.clear();
	}

}
