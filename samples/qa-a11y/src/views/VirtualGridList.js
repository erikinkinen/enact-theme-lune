/* eslint-disable react/jsx-no-bind */

import CheckboxItem from '@enact/lune/CheckboxItem';
import ImageItem from '@enact/lune/ImageItem';
import {VirtualGridList} from '@enact/lune/VirtualList';
import Layout, {Cell} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';
import {useState} from 'react';

import css from './VirtualGridList.module.less';

const items = [];
// eslint-disable-next-line enact/prop-types
const renderItem = ({index, ...rest}) => {
	const {caption, label, src} = items[index];

	return (
		<ImageItem
			{...rest}
			src={src}
			label={label}
		>
			{caption}
		</ImageItem>
	);
};

for (let i = 0; i < 100; i++) {
	const
		count = ('00' + i).slice(-3),
		caption = `Item ${count}`,
		color = Math.floor((Math.random() * (0x1000000 - 0x101010)) + 0x101010).toString(16),
		label = `SubItem ${count}`,
		src = {
			'hd': `http://placehold.it/200x200/${color}/ffffff&text=Image ${i}`,
			'fhd': `http://placehold.it/300x300/${color}/ffffff&text=Image ${i}`,
			'uhd': `http://placehold.it/600x600/${color}/ffffff&text=Image ${i}`
		};

	items.push({caption, label, src});
}

const VirtualGridListView = () => {
	const [native, setNative] = useState(true);
	const [horizontal, setHorizontal] = useState(false);
	const scrollMode = native ? 'native' : 'translate';

	const handleToggleScrollMode = () => setNative(!native);
	const handleToggleOrientation = () => setHorizontal(!horizontal);

	return (
		<Layout orientation="vertical">
			<Cell shrink>
				<CheckboxItem
					onToggle={handleToggleOrientation}
					selected={horizontal}
				>
					Horizontal
				</CheckboxItem>
				<CheckboxItem
					onToggle={handleToggleScrollMode}
					selected={native}
				>
					Native
				</CheckboxItem>
			</Cell>
			<VirtualGridList
				className={horizontal ? css.horizontalPadding : css.verticalPadding}
				dataSize={items.length}
				direction={horizontal ? 'horizontal' : 'vertical'}
				itemRenderer={renderItem}
				itemSize={{
					minWidth: ri.scale(678), // 606px(size of expanded ImageItem) + 36px(for shadow) * 2
					minHeight: ri.scale(678) // 606px(size of expanded ImageItem) + 36px(for shadow) * 2
				}}
				scrollMode={scrollMode}
			/>
		</Layout>
	);
};

export default VirtualGridListView;
