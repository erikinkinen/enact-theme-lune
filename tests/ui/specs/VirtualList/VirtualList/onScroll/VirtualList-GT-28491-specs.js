const Page = require('../VirtualListPage'),
	{expectFocusedItem, expectNoFocusedItem, waitForScrollStartStop, waitUntilFocused} = require('../../VirtualList-utils');

describe('LTR locale', function () {
	beforeEach(function () {
		Page.open();
	});

	it.skip('should focus and Scroll with Up/Down and 5-way [GT-28491]', function () {
		Page.buttonLeft.moveTo();
		Page.spotlightRight(); // is on 'Item 000'
		// Step 3. 5-way Spot the second item 'Item 001'.
		Page.spotlightDown();
		// Verify Step 3: Spotlight displays on the second item 'item 001'.
		expectFocusedItem(1, 'step 3 focus');
		// Step 4. Press Channel Down.
		Page.pageDown();
		waitForScrollStartStop();
		// Verify Step 4: Spotlight is on the *Item* closest to the previously focused Item's location.
		waitUntilFocused(7, 'step 4 focus'); // this works in headless + tv  - must comment to run in debug
		// Step 5. 5-way Down several times to the last visible item on the current viewport.
		Page.fiveWayToItem(17);
		// Verify Step 5: Spotlight is on the last visible item. *** it is not
		Page.delay(100);
		expectFocusedItem(17, 'step 5 focus');
		// Step 6. Press Channel Down.
		Page.pageDown();
		waitForScrollStartStop();
		// Verify Step 6: Spotlight is on the *Item* closest to the previously focused Item's location  ?
		waitUntilFocused(23, 'step 6 focus');
		// Step 7. Press Channel Up.
		Page.pageUp();
		waitForScrollStartStop();
		// Verify Step 7: Spotlight is on the *Item* closest to the previously focused Item's location.
		waitUntilFocused(17, 'step 7 focus');
		// Step 8. 5-way Up several times to the first visible item on the current viewport.
		Page.fiveWayToItem(7);
		// Verify Step 8: Spotlight is on the first visible item.
		expectFocusedItem(7, 'step 8 focus');
		// Step 9. Press Channel Up.
		Page.pageUp();
		waitForScrollStartStop();
		// Verify Step 9: Spotlight is on the *Item* closest to the previously focused Item's location.
		waitUntilFocused(1, 'step 9 focus');
		// Step 10. Wave the pointer. Step 11. Hover on an item.
		Page.item(3).moveTo();
		// Verify Step 10, Step 11: Spotlight is on 'Item 003'
		expectFocusedItem(3, 'step 11 focus');
		// Step 12. Press Channel Down.
		Page.pageDown();
		waitForScrollStartStop();
		// Verify Step 12: 1. Spotlight hides. 2. The list Scrolls Up by page with animation. 3. The list stops scrolling. 4. Spotlight still hides (for a few seconds).
		expectNoFocusedItem();  // Check that Spotlight hides only.
	});
});