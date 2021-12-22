/**
 * Provides a Lune styled flexible-width, popup-styled Panels component.
 *
 * @module lune/FlexiblePopupPanels
 * @exports FlexiblePopupPanels
 * @exports Header
 * @exports Panel
 */

import {FlexiblePopupPanels, FlexiblePopupPanelsBase} from './FlexiblePopupPanels';
import Header from './Header';
import Panel, {PanelBase} from './Panel';

/**
 * A shortcut to access {@link lune/FlexiblePopupPanels.Panel}
 *
 * @name Panel
 * @static
 * @memberof lune/FlexiblePopupPanels.FlexiblePopupPanels
 */
FlexiblePopupPanels.Panel = Panel;

/**
 * A shortcut to access {@link lune/FlexiblePopupPanels.Header}
 *
 * @name Header
 * @static
 * @memberof lune/FlexiblePopupPanels.FlexiblePopupPanels
 */
FlexiblePopupPanels.Header = Header;

export default FlexiblePopupPanels;
export {
	FlexiblePopupPanels,
	FlexiblePopupPanelsBase,
	Header,
	Panel,
	PanelBase
};
