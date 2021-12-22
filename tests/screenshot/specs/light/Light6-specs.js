const {runTest} = require('@enact/ui-test-utils/utils');

const Page = require('./LunePage');

runTest({
	testName: 'Lune Light',
	Page: Page,
	skin: 'light',
	highContrast: false,
	concurrency: 6
});
