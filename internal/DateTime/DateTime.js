import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import Heading from '../../Heading';

import componentCss from './DateTime.module.less';

/**
 * {@link lune/internal/DateTime.DateTime} provides the surrounding
 * markup and styling for a {@link lune/DatePicker} and
 * {@link lune/TimePicker}.
 *
 * @class DateTime
 * @memberof lune/internal/DateTime
 * @ui
 * @private
 */
const DateTimeBase = kind({
	name: 'DateTime',

	propTypes:  /** @lends lune/internal/DateTime.DateTime.prototype */ {
		css: PropTypes.object,

		/**
		 * The label to display above the picker
		 *
		 * @type {String}
		 */
		label: PropTypes.string
	},

	styles: {
		css: componentCss,
		className: 'dateTime',
		publicClassNames: ['dateTime', 'pickers']
	},

	render: ({children, css, label, ...rest}) => (
		<div {...rest}>
			{label ? <Heading className={css.heading}>{label}</Heading> : null}
			<div className={css.pickers}>
				{children}
			</div>
		</div>
	)
});

export default DateTimeBase;
export {
	DateTimeBase,
	DateTimeBase as DateTime
};
