const {runTest} = require('@enact/ui-test-utils/utils');

const Page = require('./LunePage');

runTest({
	testName: 'Lune High Contrast',
	Page: Page,
	skin: 'neutral',
	highContrast: true,
	concurrency: 7
});
