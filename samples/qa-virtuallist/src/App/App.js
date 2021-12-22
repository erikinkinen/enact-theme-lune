import kind from '@enact/core/kind';
import Panels from '@enact/lune/Panels';
import ThemeDecorator from '@enact/lune/ThemeDecorator';

import MainPanel from '../views/MainPanel';

const App = kind({
	name: 'App',

	render: (props) => (
		<Panels {...props}>
			<MainPanel />
		</Panels>
	)
});

export default ThemeDecorator(App);
