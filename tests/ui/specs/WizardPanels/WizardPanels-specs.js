const Page = require('./WizardPanelsPage');


describe('WizardPanels', function () {
	const wizardPanels = Page.components.wizardPanels;

	function getFocusedTextContent () {
		return document.activeElement.textContent;
	}

	describe('noAnimation', function () {
		beforeEach(function () {
			Page.open('?noAnimation=true');
		});

		describe('Focus Behavior', function () {
			it('should select contents', function () {
				wizardPanels.focusNextButton();
				Page.spotlightSelect();

				const expected = 'Button A';
				const actual = browser.execute(getFocusedTextContent);

				expect(actual).to.be.equal(expected);
			});
		});
	});

	beforeEach(function () {
		Page.open();
	});

	describe('5-way', function () {
		it('should navigate between views', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();

			wizardPanels.waitForLeave(1);
			expect(wizardPanels.view2.isExisting()).to.be.true();

			wizardPanels.focusPrevButton();
			Page.spotlightSelect();

			wizardPanels.waitForLeave(2);
			expect(wizardPanels.view1.isExisting()).to.be.true();
		});

		it('should navigate back with back key', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();

			wizardPanels.waitForLeave(1);
			expect(wizardPanels.view2.isExisting()).to.be.true();

			Page.backKey();

			wizardPanels.waitForLeave(2);
			expect(wizardPanels.view1.isExisting()).to.be.true();
		});

		it('should focus on back button in header on left key', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();

			wizardPanels.waitForLeave(1);
			expect(wizardPanels.view2.isExisting()).to.be.true();

			Page.spotlightUp();
			expect(wizardPanels.prevButton.isFocused()).to.be.true();

			Page.spotlightRight();
			expect(wizardPanels.nextButton.isFocused()).to.be.true();

			Page.spotlightLeft();
			expect(wizardPanels.prevButton.isFocused()).to.be.true();

		});

		it('should focus an eligible navigation button when leaving the contents or footer via 5-way left or right - [QWT-2113]', function () {
			expect('OK').to.be.equal(browser.execute(getFocusedTextContent));

			Page.spotlightRight();
			Page.spotlightRight();

			expect(wizardPanels.nextButton.isFocused()).to.be.true();
		});

	});

	describe('Pointer', function () {
		it('should navigate between views', function () {
			wizardPanels.nextButton.moveTo();
			expect(wizardPanels.nextButton.isFocused()).to.be.true();
			wizardPanels.nextButton.click();

			wizardPanels.waitForLeave(1);
			expect(wizardPanels.view2.isExisting()).to.be.true();

			wizardPanels.prevButton.moveTo();
			expect(wizardPanels.prevButton.isFocused()).to.be.true();
			wizardPanels.prevButton.click();

			wizardPanels.waitForLeave(2);
			expect(wizardPanels.view1.isExisting()).to.be.true();
		});
	});

	describe('Focus Behavior', function () {
		it('should focus a component within the body on mount - [QWT-2117]', function () {
			wizardPanels.waitForEnter(1);

			const expected = 'OK';
			const actual = browser.execute(getFocusedTextContent);

			expect(actual).to.be.equal(expected);
		});

		it('should focus a navigation button on mount if no focusable elements exist in the body - [QWT-2116]', function () {
			Page.open('?index=3');

			wizardPanels.waitForEnter(4);

			expect(wizardPanels.prevButton.isFocused()).to.be.true();
		});

		it('should select contents over buttons - [QWT-2260]', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(1);

			const expected = 'Button A';
			const actual = browser.execute(getFocusedTextContent);

			expect(actual).to.be.equal(expected);
		});

		it('should select buttons over header - [QWT-2259]', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(1);

			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(2);

			const expected = 'OK';
			const actual = browser.execute(getFocusedTextContent);

			expect(actual).to.be.equal(expected);
		});

		it('should select header when no other options are available - [QWT-2258]', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(1);

			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(2);

			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(3);

			expect(wizardPanels.prevButton.isFocused()).to.be.true();
		});

		it('should select `.spottable-default` when it exists - [QWT-2236]', function () {
			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(1);

			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(2);

			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(3);

			wizardPanels.focusNextButton();
			Page.spotlightSelect();
			wizardPanels.waitForLeave(4);

			const expected = 'Second';
			const actual = browser.execute(getFocusedTextContent);

			expect(actual).to.be.equal(expected);
		});
	});
});
