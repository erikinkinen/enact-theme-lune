import Button from '@enact/sandstone/Button';
import Heading from '@enact/sandstone/Heading';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/sandstone/Scroller';

const ButtonView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Heading showLine>Default</Heading>
			<Button size="small" />
			<Button size="small">Button</Button>
			<Button size="small" color="red">Red Button</Button>
			<Button size="small" color="blue">Blue Button</Button>
			<Button size="small" disabled>Disabled Button</Button>
			<Heading showLine>Buttons with Icon</Heading>
			<Button icon="play" size="small" />
			<Button icon="+" size="small" />
			<Heading showLine>Buttons with Tooltip</Heading>
			<Button size="small" tooltipProps={{role: 'dialog'}} tooltipText="fruit">apple</Button>
			<Button size="small" aria-label="greetings!" tooltipProps={{role: 'dialog'}} tooltipText="bye!">hello!</Button>
			<Button icon="plus" size="small" aria-label="plus icon!" tooltipProps={{role: 'dialog'}} tooltipText="plus icon!" />
			<Heading showLine>Aria-labeled Buttons</Heading>
			<Button size="small" color="yellow" aria-label="color button">yellow Button</Button>
			<Button size="small" aria-label="plug icon button">plug</Button>
		</Cell>
	</Layout>
);

export default ButtonView;