import Item from '@enact/lune/Item';
import PropTypes from 'prop-types';
import {Component} from 'react';
import ri from '@enact/ui/resolution';
import {VirtualList} from '@enact/lune/VirtualList';

const
	languages = [
		'한국어 - 한국',
		'English - United States',
		'Português - Brasil',
		'Português - Portugal',
		'Čeština - Česká republika',
		'Dansk - Danmark',
		'Deutsch - Deutschland',
		'Ελληνική γλώσσα - Ελλάδα',
		'Español - España',
		'Suomi - Suomi'
	],
	numOfItems = 100,
	fontSize = `${ri.scale(30)}px`,
	oneLineSize = ri.scale(60),
	lineHeight = `${oneLineSize}px`,
	spacing = 60;

class DifferenctHeightItem extends Component {
	static propTypes = {
		index: PropTypes.number,
		items: PropTypes.array
	};

	itemStyleDefault = {
		fontSize,
		lineHeight
	};

	render () {
		const
			{index, items, style: itemStyleFromList, ...rest} = this.props,
			{title: children, height} = items[index],
			itemStyle = {...this.itemStyleDefault, ...itemStyleFromList, height};

		return (
			<Item {...rest} style={itemStyle}>
				{children}
			</Item>
		);
	}
}

class VerticalDifferentHeightItemList extends Component {
	constructor (props) {
		let
			position = 0,
			itemSize = [],
			items = [];

		super(props);

		for (let i = 0; i < numOfItems; i++) {
			const
				numOfLines = Math.ceil(Math.random() * 6),
				height = numOfLines * oneLineSize;

			items.push({
				title: (`${('00' + i).slice(-3)} - ${position}px - ${languages[i % 10]}\n`).repeat(numOfLines),
				height
			});
			itemSize.push(height);
			position += (height + spacing);
		}

		this.state = {
			items,
			itemSize
		};
	}

	renderItem = (props) => {
		return <DifferenctHeightItem {...props} />;
	};

	render () {
		return (
			<VirtualList
				{...this.props}
				childProps={{
					items: this.state.items
				}}
				dataSize={this.state.items.length}
				itemRenderer={this.renderItem}
				itemSize={{
					minSize: oneLineSize,
					size: this.state.itemSize
				}}
				spacing={spacing}
				style={{height: '600px', paddingRight: `${ri.scale(36)}px`}}
			/>
		);
	}
}

export default VerticalDifferentHeightItemList;
