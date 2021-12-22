/**
 * Lune styled key guide component and behaviors.
 *
 * @example
 * <KeyGuide
 *		open
 * >
 * 	{[
 *		{icon: 'star', children: 'start label', key: 1},
 *		{icon: 'plus', children: 'plus label', key: 2},
 *		{icon: 'minus', children: 'minus label', key: 3}
 *	]}
 * </KeyGuide>
 *
 * @module lune/KeyGuide
 * @exports KeyGuide
 * @exports KeyGuideBase
 * @exports KeyGuideDecorator
 */

import kind from '@enact/core/kind';
import EnactPropTypes from '@enact/core/internal/prop-types';
import FloatingLayer from '@enact/ui/FloatingLayer';
import Pure from '@enact/ui/internal/Pure';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';

import Icon from '../Icon';
import {ItemBase} from '../Item';
import {MarqueeController} from '../Marquee';
import Skinnable from '../Skinnable';
import componentCss from './KeyGuide.module.less';

const colorKeys = ['red', 'green', 'yellow', 'blue'];

/**
 * A Key Guide component.
 *
 * This component is most often not used directly but may be composed within another component as it
 * is within [KeyGuide]{@link lune/KeyGuide.KeyGuide}.
 *
 * @class KeyGuideBase
 * @memberof lune/KeyGuide
 * @ui
 * @public
 */
const KeyGuideBase = kind({
	name: 'KeyGuide',

	propTypes: /** @lends lune/KeyGuide.KeyGuideBase.prototype */ {
		/**
		 * The items to be displayed in the `KeyGuide` when `open`.
		 *
		 * Takes an array of objects. The properties will be passed onto an `Item` component.
		 * The object requires `children`, and a unique `key` property. If the `icon` property is one
		 * of `'red'`, `'green'`, `'yellow'` or '`blue'`, a corresponding color bar is shown.
		 *
		 * @type {Array.<{children: (String|Component), key: (Number|String), icon: (String|Object|'red'|'green'|'yellow'|'blue')}>}
		 * @public
		 */
		children: PropTypes.arrayOf(PropTypes.shape({
			children: EnactPropTypes.renderable.isRequired,
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
		})),

		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `keyGuide` - The root component class
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * Controls the visibility of the KeyGuide.
		 *
		 * @type {Boolean}
		 * @public
		 */
		open: PropTypes.bool
	},

	computed: {
		children: ({children, css}) => (
			children ? children.map(({icon, ...child}) => {
				const isColorKey = colorKeys.includes(icon);
				return {
					...child,
					slotBefore: isColorKey ? (
						<div className={css[icon]} />
					) : <Icon className={css.icon}>{icon}</Icon>
				};
			}) : []
		),
		open: ({children, open}) => (children && children.length > 0 && open)
	},

	styles: {
		css: componentCss,
		className: 'keyGuide',
		publicClassNames: ['keyGuide']
	},

	render: ({open, css, ...rest}) => {
		return (
			<FloatingLayer
				noAutoDismiss
				open={open}
				scrimType="none"
			>
				<Repeater
					{...rest}
					component="div"
					childComponent={ItemBase}
					itemProps={{css, marqueeOn: 'render'}}
				/>
			</FloatingLayer>
		);
	}
});

/**
 * Applies Lune specific behaviors to [KeyGuide]{@link lune/KeyGuide.KeyGuideBase}.
 *
 * @hoc
 * @memberof lune/KeyGuide
 * @mixes lune/Marquee.MarqueeController
 * @mixes lune/Skinnable.Skinnable
 * @public
 */
const KeyGuideDecorator = compose(
	MarqueeController({marqueeOnFocus: true}),
	Pure,
	Skinnable
);

/**
 * A Key Guide component, ready to use in Lune applications.
 *
 * `KeyGuide' may be used to display list of text with icons to describe key behavior.
 *
 * Usage:
 * ```
 * <KeyGuide
 *		open
 * >
 * 	{[
 *		{icon: 'star', children: 'start label', key: 1},
 *		{icon: 'plus', children: 'plus label', key: 2},
 *		{icon: 'minus', children: 'minus label', key: 3}
 *	]}
 * </KeyGuide>
 * ```
 *
 * @class KeyGuide
 * @memberof lune/KeyGuide
 * @extends lune/KeyGuide.KeyGuideBase
 * @mixes lune/KeyGuide.KeyGuideDecorator
 * @ui
 * @public
 */
const KeyGuide = KeyGuideDecorator(KeyGuideBase);

export default KeyGuide;
export {
	KeyGuide,
	KeyGuideBase,
	KeyGuideDecorator
};
