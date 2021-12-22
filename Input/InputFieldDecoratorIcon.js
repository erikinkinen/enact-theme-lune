import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import {onlyUpdateForProps} from '../internal/util';

/**
 * The stateless functional base component for {@link lune/Input.InputDecoratorIcon}.
 *
 * @class InputDecoratorIconBase
 * @memberof lune/Input
 * @ui
 * @private
 */
const InputDecoratorIconBase = kind({
	name: 'InputDecoratorIcon',

	propTypes: /** @lends lune/Input.InputDecoratorIconBase.prototype */ {
		/**
		 * The position of the icon.
		 *
		 * @type {('before'|'after')}
		 * @required
		 */
		position: PropTypes.oneOf(['before', 'after']).isRequired,

		/**
		 * Icon to be displayed.
		 *
		 * @see {@link lune/Icon.Icon#children}
		 * @type {String|Object}
		 */
		children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	},

	render: ({children, ...rest}) => {
		delete rest.position;

		return children ? (
			<Icon {...rest}>{children}</Icon>
		) : null;
	}
});

/**
 * An icon displayed either before or after the input field of an {@link lune/Input.Input}.
 *
 * @class InputDecoratorIcon
 * @memberof lune/Input
 * @ui
 * @private
 */
const InputDecoratorIcon = onlyUpdateForProps(InputDecoratorIconBase, ['children', 'size']);

export default InputDecoratorIcon;
export {
	InputDecoratorIcon,
	InputDecoratorIconBase
};
