import kind from '@enact/core/kind';
import Panels from '@enact/lune/Panels';
import ThemeDecorator from '@enact/lune/ThemeDecorator';

import MainPanel from '../views/MainPanel';

import './attachErrorHandler';

import css from './App.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<Panels {...props}>
			<MainPanel />
		</Panels>
	)
});

export default ThemeDecorator(App);
