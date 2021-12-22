import kind from '@enact/core/kind';
import Touchable from '@enact/ui/Touchable';
import PropTypes from 'prop-types';

import {onlyUpdateForProps} from '../internal/util';

import css from './VideoPlayer.module.less';

/**
 * Overlay {@link lune/VideoPlayer}. This covers the Video piece of the
 * {@link lune/VideoPlayer} to prevent unnecessary VideoPlayer repaints due to mouse-moves.
 * It also acts as a container for overlaid elements, like the {@link lune/Spinner}.
 *
 * @class Overlay
 * @memberof lune/VideoPlayer
 * @ui
 * @private
 */
const OverlayBase = kind({
	name: 'Overlay',

	propTypes: /** @lends lune/VideoPlayer.Overlay.prototype */ {
		bottomControlsVisible: PropTypes.bool,
		children: PropTypes.node
	},

	styles: {
		css,
		className: 'overlay'
	},

	computed: {
		className: ({bottomControlsVisible, styler}) => styler.append({['scrim']: bottomControlsVisible})
	},

	render: (props) => {
		delete props.bottomControlsVisible;
		return <div {...props} />;
	}
});

const Overlay = onlyUpdateForProps(Touchable(OverlayBase), ['bottomControlsVisible', 'children']);

export default Overlay;
export {
	Overlay,
	OverlayBase
};
