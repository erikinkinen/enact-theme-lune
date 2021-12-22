import {Panels} from '@enact/lune/Panels';
import {Component} from 'react';
import ThemeDecorator from '@enact/lune/ThemeDecorator';

import MainPanel from '../views/MainPanel';

class App extends Component {
	render () {
		return (
			<Panels {...this.props}>
				<MainPanel />
			</Panels>
		);
	}
}

export default ThemeDecorator(App);
