import Button from '@enact/lune/Button';
import Icon from '@enact/lune/Icon';
import Image from '@enact/lune/Image';
import Item from '@enact/lune/Item';
import {Header} from '@enact/lune/Panels';
import Scroller from '@enact/lune/Scroller';
import TabLayout, {Tab} from '@enact/lune/TabLayout';
import {scaleToRem} from '@enact/ui/resolution';

const tabsWithIcons = [
	{title: 'Home', icon: 'home'},
	{title: 'Button', icon: 'gear'},
	{title: 'Item', icon: 'trash'}
];

const images = new Array(20).fill().map( (_, i) =>
	<Image
		key={`image${i}`}
		caption="Image"
		src="http://placehold.it/360x240/"
		style={{marginBottom: scaleToRem(96)}}
	/>
);

const TabLayoutView = () => {
	return (
		<>
			<Header title="Lune TabLayout" subtitle="Basic TabLayout" />
			<TabLayout>
				<Tab
					icon={tabsWithIcons[0].icon}
					title={tabsWithIcons[0].title}
				>
					<Scroller>
						{images}
					</Scroller>
				</Tab>
				<Tab
					icon={tabsWithIcons[1].icon}
					title={tabsWithIcons[1].title}
				>
					<Button icon="demosync">Button 0</Button>
					<Button icon="demosync">Button 1</Button>
					<Button icon="demosync">Button 2</Button>
					<Button icon="demosync">Button 3</Button>
				</Tab>
				<Tab
					disabled
					title={tabsWithIcons[2].title}
					icon={tabsWithIcons[2].icon}
				>
					<Item slotBefore={<Icon>playcircle</Icon>}>Single Item</Item>
				</Tab>
			</TabLayout>
		</>
	);
};

export default TabLayoutView;
