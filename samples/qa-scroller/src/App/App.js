import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/lune/ThemeDecorator';

import MainView from '../views/MainView';

const App = kind({
	name: 'App',

	render: (props) => (
		<div {...props}>
			<MainView />
		</div>
	)
});

export default ThemeDecorator(App);
