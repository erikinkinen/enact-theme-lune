import DateFactory from 'ilib/DateFactory';
import DateFmt from 'ilib/DateFmt';
import React from 'react';

import Expandable from '../Expandable';

import DatePickerBase from './DatePickerBase';

const ExpandableDatePicker = Expandable(
	{showLabel: true},
	DatePickerBase
);

/**
* {@link module:@enact/moonstone/DatePicker~DatePicker} allows the selection (or simply display) of
* a day, month, and year.
*
* Set the [value]{@link module:@enact/moonstone/DatePicker~DatePicker#value} property to a standard
* JavaScript {@glossary Date} object to initialize the picker.
*
* @class DatePicker
* @ui
* @public
*/
const DatePicker = class extends React.Component {
	static displayName = 'DatePicker'

	propTypes: {
		/**
		 * Handler for `onChange` events
		 *
		 * @type {Function}
		 */
		onChange: React.PropTypes.func,

		/**
		 * When `true`, the date picker is expanded to select a new date.
		 *
		 * @type {Boolean}
		 */
		open: React.PropTypes.bool,

		/**
		 * The selected date
		 *
		 * @type {Date}
		 */
		value: React.PropTypes.any
	}

	constructor (props) {
		super(props);
		this.cancelled = false;
		this.state = {
			open: !!props.open,
			value: this.toIDate(props.value)
		};

		this.dateFormat = new DateFmt({
			date: 'dmwy',
			length: 'full',
			timezone: 'local',
			useNative: false
		});

		this.order = this.dateFormat.getTemplate().match(/([mdy]+)/ig).map(s => s[0].toLowerCase());
	}

	componentWillReceiveProps (nextProps) {
		this.setState({
			open: 'open' in nextProps ? nextProps.open : this.state.open,
			value: nextProps.value
		});
	}

	/**
	 * Converts a Date to an IDate
	 *
	 * @param	{Date}	date	Date object
	 *
	 * @returns	{IDate}			ilib Date object
	 */
	toIDate (date) {
		if (date) {
			return DateFactory({
				unixtime: date.getTime(),
				timezone: 'local'
			});
		}
	}

	/**
	 * Updates the internal value in state
	 *
	 * @param	{IDate}		value ilib Date object
	 *
	 * @returns {undefined}
	 */
	updateValue = (value) => {
		this.setState({
			value: value
		});
	}

	/**
	 * Determines the current value using either the value from state or the current time (if the
	 * picker is open)
	 *
	 * @return {IDate} ilib Date object
	 */
	calcValue = () => {
		let value = this.state.value;
		if (this.state.open && !value) {
			value = this.toIDate(new Date());
		}

		return value;
	}

	/**
	 * Breaks down `value` into individual components (date, month, year) and calculates the max
	 * months and days for the calendar.
	 *
	 * @param	{IDate}		value	ilib Date object
	 *
	 * @returns	{Object}			Date components object
	 */
	calcDateComponents = (value) => {
		let values = {
			maxMonths: 12,
			maxDays: 31,
			year: 1900,
			month: 1,
			date: 1
		};

		if (value) {
			values.year = value.getYears();
			values.month = value.getMonths();
			values.date = value.getDays();
			values.maxMonths = this.dateFormat.cal.getNumMonths(values.year);
			values.maxDays = this.dateFormat.cal.getMonLength(values.month, values.year);
		}

		return values;
	}

	/**
	 * Handles the `onCancel` event from ExpandableDatePicker indicating that the internal `value`
	 * should be discarded.
	 *
	 * @returns {undefined}
	 */
	handleCancel = () => {
		this.cancelled = true;
	}

	/**
	 * Updates the internal `value` when the date changes
	 *
	 * @param  {Object} ev onChange event from RangePicker
	 *
	 * @returns {undefined}
	 */
	handleChangeDate = (ev) => {
		const v = this.calcValue();
		const value = DateFactory({
			year: v.getYears(),
			month: v.getMonths(),
			day: ev.value
		});

		this.updateValue(value);
	}

	/**
	 * Updates the internal `value` when the month changes
	 *
	 * @param  {Object} ev onChange event from RangePicker
	 *
	 * @returns {undefined}
	 */
	handleChangeMonth = (ev) => {
		const v = this.calcValue();
		const value = DateFactory({
			year: v.getYears(),
			month: ev.value,
			day: v.getDays()
		});

		this.updateValue(value);
	}

	/**
	 * Updates the internal `value` when the year changes
	 *
	 * @param  {Object} ev onChange event from RangePicker
	 *
	 * @returns {undefined}
	 */
	handleChangeYear = (ev) => {
		const v = this.calcValue();
		const value = DateFactory({
			year: ev.value,
			month: v.getMonths(),
			day: v.getDays()
		});

		this.updateValue(value);
	}

	/**
	 * Handles the `onClose` event from the ExpandableDatePicker by emitting an `onChange` event
	 * with the updated value if not preceded by an `onCancel` event.
	 *
	 * @returns {undefined}
	 */
	handleClose = () => {
		const cancelled = this.cancelled;
		const value = cancelled ? this.toIDate(this.props.value) : this.state.value;
		this.setState({
			open: false,
			value
		}, () => {
			// need to defer notifications until after the state change to prevent new props coming
			// in and inadvernently overwriting the above change
			if (this.props.onChange && !cancelled) {
				this.props.onChange({
					value
				});
			}
		});

		this.cancelled = false;
	}

	/**
	 * Handles the `onOpen` event from the ExpandableDatePicker in order to provide it a valid Date
	 * value if `props.value` is undefined.
	 *
	 * @returns {undefined}
	 */
	handleOpen = () => {
		this.setState({
			open: true
		});
	}

	render () {
		const value = this.calcValue();
		const label = value ? this.dateFormat.format(value) : null;
		const dateComponents = this.calcDateComponents(value);

		return (
			<ExpandableDatePicker
				{...this.props}
				{...dateComponents}
				dateFormat={this.dateFormat}
				label={label}
				onCancel={this.handleCancel}
				onChangeDate={this.handleChangeDate}
				onChangeMonth={this.handleChangeMonth}
				onChangeYear={this.handleChangeYear}
				onClose={this.handleClose}
				onOpen={this.handleOpen}
				order={this.order}
				value={value}
			/>
		);
	}
};

export default DatePicker;
export {DatePicker, DatePickerBase};
