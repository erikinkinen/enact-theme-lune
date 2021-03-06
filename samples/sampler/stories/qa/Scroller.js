import {mergeComponentMetadata} from '@enact/storybook-utils';
import {action} from '@enact/storybook-utils/addons/actions';
import {boolean, range, select} from '@enact/storybook-utils/addons/controls';
import Button from '@enact/lune/Button';
import BodyText from '@enact/lune/BodyText';
import Item from '@enact/lune/Item';
import Scroller from '@enact/lune/Scroller';
import Spotlight from '@enact/spotlight';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import Group from '@enact/ui/Group';
import ri from '@enact/ui/resolution';
import {Scroller as UiScroller, ScrollerBasic as UiScrollerBasic} from '@enact/ui/Scroller';
import PropTypes from 'prop-types';
import {Component} from 'react';

import css from './Scroller.module.less';

const Config = mergeComponentMetadata('Scroller', UiScrollerBasic, Scroller);

const itemData = [];
for (let i = 0; i < 100; i++) {
	itemData.push(`Item ${i}`);
}

const prop = {
	direction: ['both', 'horizontal', 'vertical'],
	focusableScrollbarOption: {
		false: false,
		true: true,
		byEnter: 'byEnter'
	},
	scrollbarOption: ['auto', 'hidden', 'visible'],
	scrollModeOption: ['native', 'translate']
};

class ScrollerResizableItem extends Component {
	static propTypes = {
		max: PropTypes.number,
		min: PropTypes.number,
		more: PropTypes.bool,
		toggleMore: PropTypes.func
	};

	render () {
		const {max = 3000, min = 504, more, toggleMore} = this.props;
		const height = ri.scaleToRem(more ? max : min);
		const text = more ? 'less' : 'more';
		const style = {
			border: 'solid yellow',
			position: 'relative',
			width: '90%'
		};
		return (
			<div style={{...style, height}}>
				<Button onClick={toggleMore} size="small" style={{position: 'absolute', bottom: 0}}>
					{text}
				</Button>
			</div>
		);
	}
}

class ScrollerWithLongItem extends Component {
	constructor (props) {
		super(props);
		this.state = {
			more: false
		};
	}

	handleClick = () => {
		this.setState((prevState) => ({more: !prevState.more}));
	};

	render () {
		const args = this.props.args;
		return (
			<Scroller
				focusableScrollbar={args['focusableScrollbar']}
				key={args['scrollMode']}
				onKeyDown={action('onKeyDown')}
				onScrollStart={action('onScrollStart')}
				onScrollStop={action('onScrollStop')}
				scrollMode={args['scrollMode']}
			>
				<Item>
					Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long
					Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Text
				</Item>
				<ScrollerResizableItem min={100} more={this.state.more} toggleMore={this.handleClick} />
			</Scroller>
		);
	}
}

class ScrollerWithResizable extends Component {
	constructor (props) {
		super(props);
		this.state = {
			more: false
		};
	}

	handleClick = () => {
		this.setState((prevState) => ({more: !prevState.more}));
	};

	render () {
		const args = this.props.args;
		return (
			<Scroller
				key={args['scrollMode']}
				onKeyDown={action('onKeyDown')}
				onScrollStart={action('onScrollStart')}
				onScrollStop={action('onScrollStop')}
				scrollMode={args['scrollMode']}
				verticalScrollbar="visible"
			>
				<Item>Item</Item>
				<Item>Item</Item>
				<ScrollerResizableItem more={this.state.more} toggleMore={this.handleClick} />
			</Scroller>
		);
	}
}

const Container = SpotlightContainerDecorator('div');

class ScrollerWithLargeContainer extends Component {
	componentDidMount () {
		setTimeout(() => {
			Spotlight.focus('scroller');
		}, 50);
	}

	render () {
		const args = this.props.args;
		return (
			<Scroller
				focusableScrollbar={args['focusableScrollbar']}
				key={args['scrollMode']}
				onKeyDown={action('onKeyDown')}
				onScrollStart={action('onScrollStart')}
				onScrollStop={action('onScrollStop')}
				scrollMode={args['scrollMode']}
				spotlightId="scroller"
				style={{height: ri.scaleToRem(600)}}
			>
				<Container>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
					<Item>Hello</Item>
				</Container>
			</Scroller>
		);
	}
}

export default {
	title: 'Lune/Scroller',
	component: 'Scroller'
};

export const ListOfThings = (args) => (
	<Scroller
		focusableScrollbar={args['focusableScrollbar']}
		horizontalScrollbar={args['horizontalScrollbar']}
		hoverToScroll={args['hoverToScroll']}
		key={args['scrollMode']}
		noScrollByWheel={args['noScrollByWheel']}
		onKeyDown={action('onKeyDown')}
		onScrollStart={action('onScrollStart')}
		onScrollStop={action('onScrollStop')}
		scrollMode={args['scrollMode']}
		spotlightDisabled={args['spotlightDisabled']}
		verticalScrollbar={args['verticalScrollbar']}
	>
		<Group childComponent={Item}>{itemData}</Group>
	</Scroller>
);

select('focusableScrollbar', ListOfThings, prop.focusableScrollbarOption, Config);
select('horizontalScrollbar', ListOfThings, prop.scrollbarOption, Config);
boolean('hoverToScroll', ListOfThings, Config);
boolean('noScrollByWheel', ListOfThings, Config);
select('scrollMode', ListOfThings, prop.scrollModeOption, Config);
boolean('spotlightDisabled', ListOfThings, Config, false);
select('verticalScrollbar', ListOfThings, prop.scrollbarOption, Config);

ListOfThings.storyName = 'List of things';

export const HorizontalScroll = (args) => (
	<Scroller
		direction={args['direction']}
		focusableScrollbar={args['focusableScrollbar']}
		horizontalScrollbar={args['horizontalScrollbar']}
		hoverToScroll={args['hoverToScroll']}
		key={args['scrollMode']}
		noScrollByWheel={args['noScrollByWheel']}
		onKeyDown={action('onKeyDown')}
		onScrollStart={action('onScrollStart')}
		onScrollStop={action('onScrollStop')}
		scrollMode={args['scrollMode']}
		spotlightDisabled={args['spotlightDisabled']}
		verticalScrollbar={args['verticalScrollbar']}
	>
		<div
			style={{
				width: ri.scaleToRem(14400, 'rem'),
				padding: '1px'
			}}
		>
			{[...Array(20)].map((x, i) => (
				<Button key={i + 1}>Button {i + 1}</Button>
			))}
		</div>
	</Scroller>
);

select('direction', HorizontalScroll, prop.direction, Config, 'horizontal');
select('focusableScrollbar', HorizontalScroll, prop.focusableScrollbarOption, Config);
select('horizontalScrollbar', HorizontalScroll, prop.scrollbarOption, Config);
boolean('hoverToScroll', HorizontalScroll, Config);
boolean('noScrollByWheel', HorizontalScroll, Config);
select('scrollMode', HorizontalScroll, prop.scrollModeOption, Config);
boolean('spotlightDisabled', HorizontalScroll, Config, false);
select('verticalScrollbar', HorizontalScroll, prop.scrollbarOption, Config);

HorizontalScroll.storyName = 'Horizontal scroll';

export const WithSpottableComponents = (args) => (
	<Scroller
		direction={args['direction']}
		focusableScrollbar={args['focusableScrollbar']}
		horizontalScrollbar={args['horizontalScrollbar']}
		hoverToScroll={args['hoverToScroll']}
		key={args['scrollMode']}
		noScrollByWheel={args['noScrollByWheel']}
		onKeyDown={action('onKeyDown')}
		onScrollStart={action('onScrollStart')}
		onScrollStop={action('onScrollStop')}
		scrollMode={args['scrollMode']}
		spotlightDisabled={args['spotlightDisabled']}
		verticalScrollbar={args['verticalScrollbar']}
	>
		<div
			style={{
				width: ri.scaleToRem(8802),
				height: ri.scaleToRem(8004),
				padding: '1px'
			}}
		>
			{[...Array(10)].map((y, j) => (
				<div key={j + 1}>
					{[...Array(10)].map((x, i) => (
						<Button
							key={i + 1}
							style={{
								width: ri.scaleToRem(402),
								height: ri.scaleToRem(102),
								margin: ri.scaleToRem(51)
							}}
						>
							Button {j * 10 + i + 1}
						</Button>
					))}
				</div>
			))}
		</div>
	</Scroller>
);

select('direction', WithSpottableComponents, prop.direction, Config);
select('focusableScrollbar', WithSpottableComponents, prop.focusableScrollbarOption, Config);
select('horizontalScrollbar', WithSpottableComponents, prop.scrollbarOption, Config);
boolean('hoverToScroll', WithSpottableComponents, Config);
boolean('noScrollByWheel', WithSpottableComponents, Config);
select('scrollMode', WithSpottableComponents, prop.scrollModeOption, Config);
boolean('spotlightDisabled', WithSpottableComponents, Config, false);
select('verticalScrollbar', WithSpottableComponents, prop.scrollbarOption, Config);

WithSpottableComponents.storyName = 'With Spottable Components';

export const WithShortContents = (args) => (
	<>
		<Scroller
			direction={args['direction']}
			focusableScrollbar={args['focusableScrollbar']}
			horizontalScrollbar={args['horizontalScrollbar']}
			key={args['scrollMode']}
			noScrollByWheel={args['noScrollByWheel']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
			spotlightDisabled={args['spotlightDisabled']}
			style={{height: ri.scaleToRem(600)}}
			verticalScrollbar={args['verticalScrollbar']}
		>
			Text
		</Scroller>
		<Button>Button</Button>
	</>
);

select('direction', WithShortContents, prop.direction, Config);
select('focusableScrollbar', WithShortContents, prop.focusableScrollbarOption, Config);
select('horizontalScrollbar', WithShortContents, prop.scrollbarOption, Config);
boolean('hoverToScroll', WithShortContents, Config);
boolean('noScrollByWheel', WithShortContents, Config);
select('scrollMode', WithShortContents, prop.scrollModeOption, Config);
boolean('spotlightDisabled', WithShortContents, Config, false);
select('verticalScrollbar', WithShortContents, prop.scrollbarOption, Config);

WithShortContents.storyName = 'With short contents';

ScrollerWithResizable.propTypes = {
	args: PropTypes.object
};

export const WithResizable = (args) => <ScrollerWithResizable args={args} />;

select('scrollMode', WithResizable, prop.scrollModeOption, Config);

WithResizable.storyName = 'With Resizable';

export const WithTwoUiScroller = (args) => (
	<div style={{display: 'flex', height: ri.scaleToRem(798)}}>
		<UiScroller
			key={args['scrollMode'] + '1'}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
		>
			<Group childComponent={Item}>{itemData}</Group>
		</UiScroller>
		<UiScroller
			key={args['scrollMode'] + '2'}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
		>
			<Group childComponent={Item}>{itemData}</Group>
		</UiScroller>
	</div>
);

select('scrollMode', WithTwoUiScroller, prop.scrollModeOption, Config);

WithTwoUiScroller.storyName = 'With Two ui:Scroller';

ScrollerWithLargeContainer.propTypes = {
	args: PropTypes.object
};

export const WithLargeContainer = (args) => <ScrollerWithLargeContainer args={args} />;

select('focusableScrollbar', WithLargeContainer, prop.focusableScrollbarOption, Config);
select('scrollMode', WithLargeContainer, prop.scrollModeOption, Config);

WithLargeContainer.storyName = 'With Large Container';

export const WithFocusOutsideContainer = (args) => (
	<div style={{display: 'flex'}}>
		<Button>focus to me</Button>
		<Scroller
			focusableScrollbar={args['focusableScrollbar']}
			key={args['scrollMode']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
			style={{height: ri.scaleToRem(840), width: ri.scaleToRem(600), display: 'inline-block'}}
		>
			<Item>Item 1</Item>
			<Item>Item 2</Item>
			<Item>Item 3</Item>
			<Item>Item 4</Item>
			<Item>Item 5</Item>
			<Item>Item 6</Item>
			<Item>Item 7</Item>
			<Item>Item 8</Item>
			<Item>Item 9</Item>
			<div>Test Test Test Test Test Test </div>
		</Scroller>
	</div>
);

select('focusableScrollbar', WithFocusOutsideContainer, prop.focusableScrollbarOption, Config);
select('scrollMode', WithFocusOutsideContainer, prop.scrollModeOption, Config);

WithFocusOutsideContainer.storyName = 'With Focus outside Container';

export const TestScrollingToBoundaryWithSmallOverflow = (args) => {
	const size = args['Spacer size'];
	return (
		<Scroller
			key={args['scrollMode']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
			style={{height: ri.scaleToRem(480)}}
		>
			<Item>1</Item>
			<div style={{height: ri.scaleToRem(size), paddingLeft: ri.scaleToRem(80)}}>
				{size}px Spacer
			</div>
			<Item style={{marginBottom: ri.scaleToRem(36)}}>3</Item>
		</Scroller>
	);
};

range('Spacer size', TestScrollingToBoundaryWithSmallOverflow, Config, {max: 600, min: 0}, 200);
select('scrollMode', TestScrollingToBoundaryWithSmallOverflow, prop.scrollModeOption, Config);

TestScrollingToBoundaryWithSmallOverflow.storyName = 'Test scrolling to boundary with small overflow';

export const TestScrollingToBoundaryWithLongOverflow = (args) => {
	const size = args['Spacer size'];
	return (
		<Scroller
			focusableScrollbar={args['focusableScrollbar']}
			key={args['scrollMode']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
			style={{height: ri.scaleToRem(402)}}
		>
			<div style={{height: ri.scaleToRem(size), paddingLeft: ri.scaleToRem(80)}}>
				{size}px Spacer
			</div>
			<Item>1</Item>
			<div style={{height: ri.scaleToRem(size), paddingLeft: ri.scaleToRem(80)}}>
				{size}px Spacer
			</div>
			<Item>3</Item>
			<div style={{height: ri.scaleToRem(size), paddingLeft: ri.scaleToRem(80)}}>
				{size}px Spacer
			</div>
		</Scroller>
	);
};

range('Spacer size', TestScrollingToBoundaryWithLongOverflow, Config, {max: 600, min: 0}, 402);
select('focusableScrollbar', TestScrollingToBoundaryWithLongOverflow, prop.focusableScrollbarOption, Config);
select('scrollMode', TestScrollingToBoundaryWithLongOverflow, prop.scrollModeOption, Config);

TestScrollingToBoundaryWithLongOverflow.storyName = 'Test scrolling to boundary with long overflow';

export const WithSpotlightTargetCalculation = (args) => (
	<div>
		<Button>hello</Button>
		<Scroller
			focusableScrollbar={args['focusableScrollbar']}
			key={args['scrollMode']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
			style={{height: ri.scaleToRem(804)}}
		>
			<Group childComponent={Item}>{itemData}</Group>
		</Scroller>
	</div>
);

select('focusableScrollbar', WithSpotlightTargetCalculation, prop.focusableScrollbarOption, Config);
select('scrollMode', WithSpotlightTargetCalculation, prop.scrollModeOption, Config);

WithSpotlightTargetCalculation.storyName = 'With Spotlight Target Calculation';

ScrollerWithLongItem.propTypes = {
	args: PropTypes.object
};

export const WithLongItem = (args) => <ScrollerWithLongItem args={args} />;

select('focusableScrollbar', WithLongItem, prop.focusableScrollbarOption, Config);
select('scrollMode', WithLongItem, prop.scrollModeOption, Config);

WithLongItem.storyName = 'With Long Item';

export const WithOneLongHeightItem = (args) => (
	<Scroller
		focusableScrollbar={args['focusableScrollbar']}
		key={args['scrollMode']}
		onKeyDown={action('onKeyDown')}
		onScrollStart={action('onScrollStart')}
		onScrollStop={action('onScrollStop')}
		scrollMode={args['scrollMode']}
	>
		<div style={{height: ri.scaleToRem(2442)}}>
			<Item style={{height: ri.scaleToRem(2400)}}>Long Height Item</Item>
		</div>
	</Scroller>
);

select('focusableScrollbar', WithOneLongHeightItem, prop.focusableScrollbarOption, Config);
select('scrollMode', WithOneLongHeightItem, prop.scrollModeOption, Config);

WithOneLongHeightItem.storyName = 'With One Long Height Item';

export const WithNestedScroller = (args) => {
	let noScrollByWheel = boolean('noScrollByWheel', Config);
	return (
		<Scroller
			direction="vertical"
			focusableScrollbar={args['focusableScrollbar']}
			key={args['scrollMode'] + '1'}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollMode={args['scrollMode']}
			verticalScrollbar="visible"
		>
			<Scroller
				direction="horizontal"
				focusableScrollbar={args['focusableScrollbar']}
				horizontalScrollbar="visible"
				key={args['scrollMode'] + '2'}
				noScrollByWheel={noScrollByWheel}
				onKeyDown={action('onKeyDown (Nested 1st Scroller)')}
				onScrollStart={action('onScrollStart (Nested 1st Scroller)')}
				onScrollStop={action('onScrollStop (Nested 1st Scroller)')}
				scrollMode={args['scrollMode']}
				style={{
					height: 'auto',
					width: '90%'
				}}
			>
				<div
					style={{
						backgroundColor: '#444',
						width: ri.scaleToRem(4800)
					}}
				>
					<Item>The first nested scroller.</Item>
					<br />
					<br />
					<Item>
						This is the upper horizontal scroller. If noScrollByWheel is not specified, this
						scroller will be scrolled by wheel and the outer scroller will not be scrolled.
					</Item>
					<br />
					<br />
					<Item>
						If noScrollByWheel is specified, this scroller will NOT be scrolled by wheel but the
						outer scroller will be scrolled.
					</Item>
					<br />
					<br />
					<Item>To set or unset noScrollByWheel prop, click CONTROLS below.</Item>
				</div>
			</Scroller>
			<Scroller
				direction="horizontal"
				focusableScrollbar={args['focusableScrollbar']}
				horizontalScrollbar="visible"
				key={args['scrollMode'] + '3'}
				noScrollByWheel={noScrollByWheel}
				onKeyDown={action('onKeyDown (Nested 2nd Scroller)')}
				onScrollStart={action('onScrollStart (Nested 2nd Scroller)')}
				onScrollStop={action('onScrollStop (Nested 2nd Scroller)')}
				scrollMode={args['scrollMode']}
				style={{
					height: 'auto',
					width: '90%'
				}}
			>
				<div
					style={{
						backgroundColor: '#444',
						width: ri.scaleToRem(4800)
					}}
				>
					<Item>The second nested scroller.</Item>
					<br />
					<br />
					<Item>
						This is the lower horizontal scroller. If noScrollByWheel is not specified, this
						scroller will be scrolled by wheel and the outer scroller will not be scrolled.
					</Item>
					<br />
					<br />
					<Item>
						If noScrollByWheel is specified, this scroller will NOT be scrolled by wheel but the
						outer scroller will be scrolled.
					</Item>
					<br />
					<br />
					<Item>To set or unset noScrollByWheel prop, click CONTROLS below.</Item>
				</div>
			</Scroller>
		</Scroller>
	);
};

select('focusableScrollbar', WithNestedScroller, prop.focusableScrollbarOption, Config);
select('scrollMode', WithNestedScroller, prop.scrollModeOption, Config);

WithNestedScroller.storyName = 'With Nested Scroller';

export const WithCustomizedStyle = (args) => (
	<div>
		<Scroller
			focusableScrollbar={args['focusableScrollbar']}
			key={args['scrollMode']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
			scrollbarTrackCss={css}
			scrollMode={args['scrollMode']}
			style={{height: ri.scaleToRem(804)}}
		>
			<div style={{height: ri.scaleToRem(1200)}}>
				The scrollbar track is displayed in white.
			</div>
			The scrollbar thumb is displayed in orangered.
		</Scroller>
	</div>
);

select('focusableScrollbar', WithCustomizedStyle, prop.focusableScrollbarOption, Config);
select('scrollMode', WithCustomizedStyle, prop.scrollModeOption, Config);

WithCustomizedStyle.storyName = 'With Customized Style';

export const WithLongContents = (args) => {
	const content = `
	The goal of Enact is to provide the building blocks for creating robust and maintainable applications. To that end, we???ve pulled together the best solutions for internationalization (i18n), accessibility (a11y), focus management, linting, testing and building. Then, we created a set of reusable components and behaviors on top of that. We combined these pieces and ensured that they work together seamlessly, allowing developers to focus on implementation.
	Easy to Use
	Enact builds atop the excellent React library, and provides a full framework to the developer. The recent boom of web technologies and related tools has led to a plethora of options available. In fact, getting started might be the most difficult part of building a modern web application.
	Performant
	Beyond initial setup, Enact continues to provide benefits. It was built with performance in mind, and conscious decisions were made to ensure that applications remain performant as they grow in size and complexity. This ranges from the way components are rendered to how data flows through application.
	Customizable
	Enact has a full set of customizable widgets that can be tuned and tweaked to the particular style of each project. Using our experience in building full UI libraries for a broad swath of devices ranging from TVs to watches, we have created a widget library whose components can easily be composed to create complex views and applications.
	Adaptable
	Enact was designed to produce native quality applications for a wide variety embedded web platforms. Read about Enact???s use cases and how it helps solve problems for Automotive, Robotics, TV and more.
	`;
	const longContents = content.repeat(50);

	return (
		<Scroller
			focusableScrollbar={args['focusableScrollbar']}
			key={args['scrollMode']}
			onKeyDown={action('onKeyDown')}
			onScrollStart={action('onScrollStart')}
			onScrollStop={action('onScrollStop')}
		>
			<BodyText style={{whiteSpace: 'pre-line'}}>
				{longContents}
			</BodyText>
		</Scroller>
	);
};

select('focusableScrollbar', WithLongContents, prop.focusableScrollbarOption, Config, 'byEnter');
select('scrollMode', WithLongContents, prop.scrollModeOption, Config);

WithLongContents.storyName = 'With Long Contents';
