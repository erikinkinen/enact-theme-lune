'use strict';
const {Page} = require('@enact/ui-test-utils/utils');

class LunePage extends Page {
	constructor () {
		super();
		this.title = 'Lune Test';
	}

	open (urlExtra) {
		super.open('Lune-View', urlExtra);
	}

	get component () {
		return $('[data-ui-test-id="test"]');
	}
}

module.exports = new LunePage();
