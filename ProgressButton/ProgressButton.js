/**
 * Provides Lune-themed progress button component.
 *
 * @example
 * <ProgressButton progress={0.5}>Progress</ProgressButton>
 *
 * @module lune/ProgressButton
 * @exports ProgressButton
 * @exports ProgressButtonBase
 * @exports ProgressButtonDecorator
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import {ButtonBase, ButtonDecorator} from '../Button';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';

import componentCss from './ProgressButton.module.less';

/**
 * Renders a lune-styled progress button.
 *
 * @class ProgressButtonBase
 * @memberof lune/ProgressButton
 * @extends lune/Button.ButtonBase
 * @extends lune/ProgressBar.ProgressBar
 * @ui
 * @public
 */
const ProgressButtonBase = kind({
	name: 'ProgressButton',

	propTypes: /** @lends lune/ProgressButton.ProgressButtonBase.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `progressButton` - The root component class
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * The icon content displayed with progress.
		 *
		 * @type {String|Object}
		 * @default stop
		 * @public
		 */
		icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

		/**
		 * A number between `0` and `1` indicating the proportion of the filled portion of the bar.
		 *
		 * @type {Number}
		 * @default 0
		 * @public
		 */
		progress: PropTypes.number,

		/**
		 * Shows progress instead of text.
		 *
		 * @type {Boolean}
		 * @public
		 */
		showProgress: PropTypes.bool,

		/**
		 * The size of the progress button.
		 *
		 * @type {('large'|'small')}
		 * @default 'small'
		 * @public
		 */
		size: PropTypes.string
	},

	defaultProps: {
		icon: 'stop',
		progress: 0,
		showProgress: false,
		size: 'small'
	},

	styles: {
		css: componentCss,
		className: 'progressButton',
		publicClassNames: ['progressButton']
	},

	render: ({css, children, icon, progress, showProgress, ...rest}) => {
		return (
			<ButtonBase
				{...rest}
				css={css}
			>
				{showProgress ?
					(
						<div className={css.progressContainer}>
							<ProgressBar
								orientation="radial"
								progress={progress}
								css={css}
							/>
							<Icon className={css.icon}>
								{icon}
							</Icon>
						</div>
					) : children
				}
			</ButtonBase>
		);
	}
});


/**
 * The ready-to-use Lune-styled ProgressButton.
 *
 * @class ProgressButton
 * @memberof lune/ProgressButton
 * @extends lune/ProgressButton.ProgressButtonBase
 * @ui
 * @public
 */
const ProgressButton = ButtonDecorator(ProgressButtonBase);


export default ProgressButton;
export {
	ProgressButton,
	ProgressButtonBase,
	ButtonDecorator as ProgressButtonDecorator
};
