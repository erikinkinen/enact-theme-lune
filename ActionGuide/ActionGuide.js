/**
 * Lune styled action guide component and behaviors.
 *
 * @example
 * <ActionGuide icon="arrowlargedown">Hello</ActionGuide>
 *
 * @module lune/ActionGuide
 * @exports ActionGuide
 * @exports ActionGuideBase
 * @exports ActionGuideDecorator
 */

import kind from '@enact/core/kind';
import Pure from '@enact/ui/internal/Pure';
import Touchable from '@enact/ui/Touchable';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import Icon from '../Icon';
import {Marquee} from '../Marquee';
import Skinnable from '../Skinnable';

import componentCss from './ActionGuide.module.less';

const TouchableDiv = Touchable('div');

/**
 * An Action Guide component.
 *
 * This component is most often not used directly but may be composed within another component as it
 * is within [ActionGuide]{@link lune/ActionGuide.ActionGuide}.
 *
 * @class ActionGuideBase
 * @memberof lune/ActionGuide
 * @ui
 * @public
 */
const ActionGuideBase = kind({
	name: 'ActionGuide',

	propTypes: /** @lends lune/ActionGuide.ActionGuideBase.prototype */ {
		/**
		 * The contents for the action guide.
		 *
		 * @type {String}
		 * @public
		 */
		children: PropTypes.string,

		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `actionGuide` - The root component class
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * The icon displayed within the action guide.
		 *
		 * @type {String}
		 * @default 'arrowsmalldown'
		 * @public
		 */
		icon: PropTypes.string
	},

	defaultProps: {
		icon: 'arrowsmalldown'
	},

	styles: {
		css: componentCss,
		className: 'actionGuide',
		publicClassNames: ['actionGuide']
	},

	render: ({icon, children, css, ...rest}) => {
		return (
			<TouchableDiv {...rest}>
				<Icon size="small" className={css.icon}>{icon}</Icon>
				<Marquee className={css.label} marqueeOn="render" alignment="center">{children}</Marquee>
			</TouchableDiv>
		);
	}
});

/**
 * Applies Lune specific behaviors to [ActionGuide]{@link lune/ActionGuide.ActionGuideBase}.
 *
 * @hoc
 * @memberof lune/ActionGuide
 * @mixes lune/Skinnable.Skinnable
 * @public
 */
const ActionGuideDecorator = compose(
	Pure,
	Skinnable
);

/**
 * An Action Guide component, ready to use in Lune applications.
 *
 * `ActionGuide` may be used to display text and icon to describe an action.
 *
 * Usage:
 * ```
 * <ActionGuide icon="arrowlargedown">Hello</ActionGuide>
 * ```
 *
 * @class ActionGuide
 * @memberof lune/ActionGuide
 * @extends lune/ActionGuide.ActionGuideBase
 * @mixes lune/ActionGuide.ActionGuideDecorator
 * @ui
 * @public
 */
const ActionGuide = ActionGuideDecorator(ActionGuideBase);

export default ActionGuide;
export {
	ActionGuide,
	ActionGuideBase,
	ActionGuideDecorator
};
