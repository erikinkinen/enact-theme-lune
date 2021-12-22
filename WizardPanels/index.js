/**
 * Provides a Lune styled panels component for stepping through a process.
 *
 * @module lune/WizardPanels
 * @exports Panel
 * @exports WizardPanels
 */

import {WizardPanels, WizardPanelsBase, WizardPanelsDecorator} from './WizardPanels';
import Panel from './Panel';

/**
 * A shortcut to access {@link lune/WizardPanels.Panel}
 *
 * @name Panel
 * @static
 * @memberof lune/WizardPanels.WizardPanels
 */
WizardPanels.Panel = Panel;

export default WizardPanels;
export {
	Panel,
	WizardPanels,
	WizardPanelsBase,
	WizardPanelsDecorator
};
