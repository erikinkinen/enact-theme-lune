import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/lune/ThemeDecorator';

import MainPanel from '../views/MainPanel';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<MainPanel />
		</div>
	)
});

export default ThemeDecorator(App);
