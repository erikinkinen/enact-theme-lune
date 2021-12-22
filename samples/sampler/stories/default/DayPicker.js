import {action} from '@enact/storybook-utils/addons/actions';
import {boolean, text} from '@enact/storybook-utils/addons/controls';
import DayPicker from '@enact/lune/DayPicker';
import Scroller from '@enact/lune/Scroller';

DayPicker.displayName = 'DayPicker';

export default {
	title: 'Lune/DayPicker',
	component: 'DayPicker'
};

export const _DayPicker = (args) => (
	<Scroller>
		<DayPicker
			aria-label={args['aria-label']}
			disabled={args['disabled']}
			onSelect={action('onSelect')}
		/>
	</Scroller>
);

text('aria-label', _DayPicker, DayPicker);
boolean('disabled', _DayPicker, DayPicker);

_DayPicker.storyName = 'DayPicker';
_DayPicker.parameters = {
	info: {
		text: 'The basic DayPicker'
	}
};
