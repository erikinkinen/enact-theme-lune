import ImageItem from '@enact/lune/ImageItem';
import {Component} from 'react';
import ri from '@enact/ui/resolution';
import ThemeDecorator from '@enact/lune/ThemeDecorator';
import {VirtualGridList} from '@enact/lune/VirtualList';

const items = [];

for (let i = 0; i < 1000; i++) {
	const count = ('00' + i).slice(-3);
	items.push({
		text: 'Item ' + count,
		subText: 'SubItem ' + count
	});
}

class VirtualGridListSample extends Component {
	componentDidMount () {
		this.scrollTo({animate: false, focus: true, index: 19});
	}

	getScrollTo = (scrollTo) => {
		this.scrollTo = scrollTo;
	};

	renderItem = ({index, ...rest}) => {
		return (
			<ImageItem
				{...rest}
				label={items[index].subText}
			>
				{items[index].text}
			</ImageItem>
		);
	};

	render () {
		return (
			<VirtualGridList
				{...this.props}
				cbScrollTo={this.getScrollTo}
				dataSize={items.length}
				itemRenderer={this.renderItem}
				itemSize={{minWidth: ri.scale(624), minHeight: ri.scale(600)}} // FHD: 312 x 300, UHD: 624 x 600
				scrollMode="translate"
			/>
		);
	}
}

export default ThemeDecorator(VirtualGridListSample);
