import hoc from '@enact/core/hoc';
import ilib from '@enact/i18n';
import {Component} from 'react';
import PropTypes from 'prop-types';

import {fontOverrideGenerator} from './fontGenerator';

const I18nFontDecorator = hoc((config, Wrapped) => {
	return class I18nDecorator extends Component {
		static displayName = 'I18nFontDecorator';

		static propTypes = {
			locale: PropTypes.string
		};

		constructor (props) {
			super(props);

			this.state = {
				locale: props.locale || ilib.getLocale()
			};
		}

		static getDerivedStateFromProps (props, state) {
			const locale = props.locale || ilib.getLocale();
			return locale !== state.locale ? {locale} : null;
		}

		componentDidMount () {
			fontOverrideGenerator(this.state.locale);
		}

		componentDidUpdate (_, prevState) {
			if (prevState.locale !== this.state.locale) {
				fontOverrideGenerator(this.state.locale);
			}
		}

		render () {
			return (
				<Wrapped {...this.props} />
			);
		}
	};
});

export default I18nFontDecorator;
export {
	I18nFontDecorator
};
