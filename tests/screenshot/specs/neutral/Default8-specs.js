const {runTest} = require('@enact/ui-test-utils/utils');

const Page = require('./LunePage');

runTest({
	testName: 'Lune',
	Page: Page,
	skin: 'neutral',
	highContrast: false,
	concurrency: 8
});
