import Dropdown from '@enact/lune/Dropdown';
import {Component} from 'react';
import ThemeDecorator from '@enact/lune/ThemeDecorator';

import HorizontalDifferentWidthItemList from './views/HorizontalDifferentWidthItemList';
import VerticalDifferentHeightItemList from './views/VerticalDifferentHeightItemList';
import VerticalExpandableDifferentHeightItemList from './views/VerticalExpandableDifferentHeightItemList';

const views = [
	HorizontalDifferentWidthItemList,
	VerticalDifferentHeightItemList,
	VerticalExpandableDifferentHeightItemList
];

const viewNames = [
	'HorizontalDifferentWidthItemList',
	'VerticalDifferentHeightItemList',
	'VerticalExpandableDifferentHeightItemList'
];

const defaultViewIndex = 0;

class VirtualListSample extends Component {
	constructor (props) {
		super(props);

		this.state = {
			view: views[defaultViewIndex]
		};
	}

	onSelect = ({selected}) => {
		this.setState({view: views[selected]});
	};

	render () {
		const View = this.state.view;

		return (
			<div {...this.props}>
				<Dropdown
					direction="below"
					onSelect={this.onSelect}
					size="large"
					placeholder={viewNames[defaultViewIndex]}
					width="huge"
				>
					{viewNames}
				</Dropdown>
				<View />
			</div>
		);
	}
}

export default ThemeDecorator(VirtualListSample);
