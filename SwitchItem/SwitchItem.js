/**
 * Provides Lune-themed item component and interactive toggleable switch.
 *
 * @example
 * <SwitchItem>
 * 	Item
 * </SwitchItem>
 *
 * @module lune/SwitchItem
 * @exports SwitchItem
 * @exports SwitchItemBase
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import Pure from '@enact/ui/internal/Pure';
import Slottable from '@enact/ui/Slottable';
import Toggleable from '@enact/ui/Toggleable';

import {ItemBase, ItemDecorator} from '../Item';
import Skinnable from '../Skinnable';
import {SwitchBase} from '../Switch';

import componentCss from './SwitchItem.module.less';

const Item = ItemDecorator(ItemBase);

const Switch = Skinnable(SwitchBase);
Switch.displayName = 'Switch';

/**
 * Renders an item with a [Switch]{@link lune/Switch}.
 *
 * @class SwitchItemBase
 * @memberof lune/SwitchItem
 * @extends lune/Item.Item
 * @omit iconComponent
 * @ui
 * @public
 */
const SwitchItemBase = kind({
	name: 'SwitchItem',

	propTypes: /** @lends lune/SwitchItem.SwitchItemBase.prototype */ {
		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * The following classes are supported:
		 *
		 * * `switchItem` - The root class name
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * If true the switch will be selected.
		 *
		 * @type {Boolean}
		 * @default false
		 * @public
		 */
		selected: PropTypes.bool,

		/**
		 * Nodes to be inserted after `children` and before the switch.
		 *
		 * @type {Node}
		 * @public
		 */
		slotAfter: PropTypes.node
	},

	defaultProps: {
		selected: false
	},

	styles: {
		css: componentCss,
		className: 'switchItem',
		publicClassNames: ['switchItem']
	},

	render: ({children, css, selected, slotAfter, ...rest}) => (
		<Item
			data-webos-voice-intent="SetToggleItem"
			role="button"
			{...rest}
			aria-pressed={selected}
			css={css}
			selected={selected}
		>
			{children}
			<slotAfter>
				{slotAfter}
				<Switch selected={selected} css={css} />
			</slotAfter>
		</Item>
	)
});

/**
 * Adds interactive functionality to `SwitchItem`.
 *
 * @class SwitchItemDecorator
 * @memberof lune/SwitchItem
 * @mixes ui/Toggleable.Toggleable
 * @hoc
 * @public
 */
const SwitchItemDecorator = compose(
	Toggleable({toggleProp: 'onClick'}),
	Slottable({slots: ['label', 'slotAfter', 'slotBefore']})
);

/**
 * A Lune-styled item with a switch component.
 *
 * `SwitchItem` will manage its `selected` state via [Toggleable]{@link ui/Toggleable} unless set
 * directly.
 *
 * @class SwitchItem
 * @memberof lune/SwitchItem
 * @extends lune/SwitchItem.SwitchItemBase
 * @mixes lune/SwitchItem.SwitchItemDecorator
 * @ui
 * @public
 */
const SwitchItem = Pure(
	SwitchItemDecorator(
		SwitchItemBase
	)
);

export default SwitchItem;
export {
	SwitchItem,
	SwitchItemBase,
	SwitchItemDecorator
};
