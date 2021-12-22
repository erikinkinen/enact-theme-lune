import {mergeComponentMetadata} from '@enact/storybook-utils';
import {action} from '@enact/storybook-utils/addons/actions';
import {range, select} from '@enact/storybook-utils/addons/controls';
import Button from '@enact/lune/Button';
import ImageItem from '@enact/lune/ImageItem';
import Icon from '@enact/lune/Icon';
import Item from '@enact/lune/Item';
import {Panel, Header} from '@enact/lune/Panels';
import Scroller from '@enact/lune/Scroller';
import TabLayout, {TabLayoutBase, Tab} from '@enact/lune/TabLayout';
import {scaleToRem} from '@enact/ui/resolution';

import spriteGear2k from '../../images/sprite-gear-2k.png';
import spriteGear4k from '../../images/sprite-gear-4k.png';

TabLayout.displayName = 'TabLayout';
const Config = mergeComponentMetadata('TabLayout', TabLayoutBase, TabLayout);

// `paddingBottom: '56.25%'` is a trick to impose 16:9 aspect ratio on the component, since padding percentage is based on the width, not the height.

const tabsWithIcons = [
	{title: 'Home', icon: 'home'},
	{title: 'Button', icon: 'gear'},
	{title: 'Item', icon: 'trash'}
];

const tabsWithoutIcons = [{title: 'Home'}, {title: 'Button'}, {title: 'Item'}];

const tabSelections = {
	'with icons': tabsWithIcons,
	'without icons': tabsWithoutIcons
};

export default {
	title: 'Lune/TabLayout',
	component: 'TabLayout'
};

export const _TabLayout = (args) => {
	const tabs = args['tabs'];

	const images = new Array(20).fill().map((_, i) => (
		<ImageItem
			inline
			key={`image${i}`}
			label="ImageItem label"
			src="http://placehold.it/360x240/"
			style={{
				width: scaleToRem(768),
				height: scaleToRem(588)
			}}
		>
			{`ImageItem ${i + 1}`}
		</ImageItem>
	));

	return (
		<Panel>
			<Header title="Lune TabLayout" subtitle="Basic TabLayout" />
			<TabLayout
				onSelect={action('onSelect')}
				onTabAnimationEnd={action('onTabAnimationEnd')}
				orientation={args['orientation']}
				tabSize={args['tabSize'] || null}
			>
				<Tab title={tabSelections[tabs][0].title} icon={tabSelections[tabs][0].icon}>
					<Scroller>{images}</Scroller>
				</Tab>
				<Tab
					title={tabSelections[tabs][1].title}
					icon={tabSelections[tabs][1].icon}
					sprite={{
						columns: 6,
						rows: 5,
						iterations: 1,
						src: {
							fhd: spriteGear2k,
							uhd: spriteGear4k
						}
					}}
				>
					<Button icon="demosync">Button 1</Button>
					<Button icon="demosync">Button 2</Button>
					<Button icon="demosync">Button 3</Button>
					<Button icon="demosync">Button 4</Button>
					<Button icon="demosync">Button 5</Button>
				</Tab>
				<Tab title={tabSelections[tabs][2].title} icon={tabSelections[tabs][2].icon}>
					<Item slotBefore={<Icon>playcircle</Icon>}>Single Item</Item>
				</Tab>
			</TabLayout>
		</Panel>
	);
};

select('tabs', _TabLayout, ['with icons', 'without icons'], Config, 'with icons');
select('orientation', _TabLayout, ['vertical', 'horizontal'], Config);
range('tabSize', _TabLayout, Config, {min: 0, max: 960, step: 60}, 0);

_TabLayout.storyName = 'TabLayout';
_TabLayout.parameters = {
	props: {
		noPanel: true
	}
};
