import Button from '../../../../Button';

import {withConfig} from './utils';

const ButtonTests = [
	<Button>click me</Button>,
	<Button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Button>,
	{
		textSize: 'large',
		component: <Button>click me</Button>
	},
	<Button disabled>click me</Button>,

	// [QWT-2394] - Color Underbar displays Icon with 'minWidth' and with 'Disabled'
	<Button color="red" icon="minus" iconPosition="after" minWidth={false} disabled />,
	// [QWT-2393] - Change 'disabled' dynamically - Icon is slightly visible with focus / Spotlight
	<Button selected color="red" icon="minus" iconPosition="after" minWidth={false} disabled />,

	<Button color="red" disabled>plus</Button>,

	// {QWT-2813]
	<Button> ฟิ้  ไั  ஒ  து</Button>,
	<Button>ÃÑÕÂÊÎÔÛÄËÏÖÜŸ</Button>,
	<Button>Bản văn</Button>,
	<Button>តន្ត្រី</Button>,
	// end [QWT-2813]

	// iconPosition = before (Default) + small (default) + large
	// Leaving size small here as example but it is not required since it is the default.
	<Button size="small">click me</Button>,
	<Button size="large">click me</Button>,
	// iconPosition = before (Default) + icon + iconPosition + small (default) + large
	<Button icon="minus" iconPosition="after">click me</Button>,
	<Button icon="minus" iconPosition="after" size="large">click me</Button>,
	<Button icon="plus" iconPosition="before">click me</Button>,
	<Button icon="plus" iconPosition="before" size="large">click me</Button>,

	// Icon only, iconPosition = before (Default) + icon + iconPosition + small (default) + large
	<Button icon="minus" iconPosition="after" />,
	<Button icon="minus" iconPosition="after" size="large" />,
	<Button icon="plus" iconPosition="before" />,
	<Button icon="plus" iconPosition="before" size="large" />,

	// iconPosition = before (Default) + backgroundOpacity
	<Button icon="plus" backgroundOpacity="transparent">click me</Button>,
	<Button backgroundOpacity="opaque">click me</Button>,

	// Selected buttons
	<Button selected>click me</Button>,
	<Button selected icon="plus" />,
	<Button selected backgroundOpacity="transparent">click me</Button>, 	// [QWT-2822]
	<Button selected backgroundOpacity="transparent" icon="plus" />, // Default for icon-only buttons
	<Button selected backgroundOpacity="opaque">click me</Button>, // Default for text button

	// iconPosition = before (Default) + children has 1 letter +	minWidth = false
	<Button minWidth={false}>H</Button>,

	// iconPosition = before (Default) + color
	<Button color="red">click me</Button>,
	<Button color="green">click me</Button>,
	<Button color="yellow">click me</Button>,
	<Button color="blue">click me</Button>,
	// iconPosition = before (Default) + color + icon + iconPosition
	<Button color="red" icon="minus" iconPosition="before">click me</Button>,
	<Button color="green" icon="plus" iconPosition="after">click me</Button>,
	// iconPosition = before (Default) + color + icon + iconPosition + minWidth
	<Button color="yellow" icon="plus" iconPosition="before" minWidth={false}>click me</Button>,
	<Button color="blue" icon="minus" iconPosition="after" minWidth={false}>click me</Button>,

	// [QWT-2392] - Color Underbar displays on Button (LTR)
	<Button color="red" icon="plus" iconPosition="before" minWidth={false} />,
	<Button color="green" icon="plus" iconPosition="after" minWidth={false} />,
	<Button color="yellow" icon="plus" iconPosition="after" minWidth={false} />,
	<Button color="blue" icon="plus" iconPosition="after" minWidth={false} />,

	// [QWT-2390] - Color Underbar displays on Small / Large size in Selected state
	<Button selected color="red" icon="minus" iconPosition="after" minWidth={false} size="large" />,
	<Button selected color="red" icon="minus" iconPosition="after" minWidth={false} size="small" />,

	// iconPosition = before (Default) + icon
	<Button icon="plus">click me</Button>,
	<Button icon="arrowlargeright">click me</Button>,
	<Button icon="info">click me</Button>,

	// iconFlip
	<Button icon="arrowhookright" iconFlip="horizontal">click me</Button>,
	<Button icon="arrowhookright" iconFlip="vertical">click me</Button>,
	<Button icon="arrowhookright" iconFlip="both">click me</Button>,
	<Button icon="arrowhookright" iconFlip="auto">click me</Button>,

	// [QWT-2819]
	<Button icon="rotate">click me</Button>,

	// Focused with light wrapper
	...withConfig({focus: true, wrapper: {light: true, padded: true}}, [
		<Button>Focused button</Button>,
		<Button disabled>Focused button</Button>
	]),

	// *************************************************************
	// Tallglyph validation
	// locale = 'vi-VN'
	// *************************************************************
	...withConfig({locale: 'vi-VN'}, [
		<Button>Vietnamese Text</Button>,
		<Button color="red">Vietnamese Text</Button>,
		<Button small>Vietnamese Text</Button>,
		<Button small color="red">Vietnamese Text</Button>,
		<Button icon="star" />,
		<Button icon="star">Vietnamese Text</Button>,
		<Button icon="star" color="red" />,
		<Button icon="star" color="red">Vietnamese Text</Button>,

		// Real tall glyphs
		<Button> ฟิ้  ไั  ஒ  து</Button>,
		<Button>ÃÑÕÂÊÎÔÛÄËÏÖÜŸ</Button>,
		<Button>Bản văn</Button>,
		<Button>តន្ត្រី</Button>

	]),


	// *************************************************************
	// Tallglyph validation
	// locale = 'km-KH'
	// *************************************************************
	...withConfig({locale: 'km-KH'}, [
		<Button>Cambodian Text</Button>,
		<Button color="red">Cambodian Text</Button>,
		<Button small>Cambodian Text</Button>,
		<Button small color="red">Cambodian Text</Button>,
		<Button icon="star" />,
		<Button icon="star">Cambodian Text</Button>,
		<Button icon="star" color="red" />,
		<Button icon="star" color="red">Cambodian Text</Button>,

		// Real tall glyphs
		<Button size="small">តន្ត្រី</Button>
	]),


	// *************************************************************
	// RTL
	// locale = 'ar-SA'
	// *************************************************************
	// [QWT-2821]
	...withConfig({locale: 'ar-SA'}, [
		<Button>click me</Button>,

		// iconPosition = before (Default) + small (default) + large
		// Leaving size small here as example but it is not required since it is the default.
		<Button size="small">click me</Button>,
		<Button size="large">click me</Button>,
		// Icon only - iconPosition = before (Default) + icon + iconPosition + small (default) + large
		<Button icon="minus" iconPosition="after" />,
		<Button icon="minus" iconPosition="after" size="large" />,
		<Button icon="plus" iconPosition="before" />,
		<Button icon="plus" iconPosition="before" size="large" />,
		// iconPosition = before (Default) + icon + iconPosition + small (default) + large
		<Button icon="minus" iconPosition="after">click me</Button>,
		<Button icon="minus" iconPosition="after" size="large">click me</Button>,
		<Button icon="plus" iconPosition="before">click me</Button>,
		<Button icon="plus" iconPosition="before" size="large">click me</Button>,
		// iconPosition = before (Default) + backgroundOpacity
		<Button icon="plus" backgroundOpacity="transparent">click me</Button>,
		<Button backgroundOpacity="opaque">click me</Button>,
		// Selected buttons
		<Button selected>click me</Button>,
		<Button selected icon="plus" />,
		<Button selected backgroundOpacity="transparent">click me</Button>, 	// [QWT-2822]
		<Button selected backgroundOpacity="transparent" icon="plus" />, // Default for icon-only buttons
		<Button selected backgroundOpacity="opaque">click me</Button>, // Default for text button

		// iconPosition = before (Default) + children has 1 letter +	minWidth = false
		<Button minWidth={false}>H</Button>,
		// iconPosition = before (Default) + color
		<Button color="red">click me</Button>,
		<Button color="green">click me</Button>,
		<Button color="yellow">click me</Button>,
		<Button color="blue">click me</Button>,
		// iconPosition = before (Default) + color + icon + iconPosition
		<Button color="red" icon="minus" iconPosition="before">click me</Button>,
		<Button color="green" icon="plus" iconPosition="after">click me</Button>,
		// iconPosition = before (Default) + color + icon + iconPosition + minWidth
		<Button color="yellow" icon="plus" iconPosition="before" minWidth={false}>click me</Button>,
		<Button color="blue" icon="minus" iconPosition="after" minWidth={false}>click me</Button>,
		// [QWT-2391] - Color Underbar displays on Button (RTL)
		<Button color="red" icon="plus" iconPosition="before" minWidth={false} />,
		<Button color="green" icon="plus" iconPosition="after" minWidth={false} />,
		<Button color="yellow" icon="plus" iconPosition="after" minWidth={false} />,
		<Button color="blue" icon="plus" iconPosition="after" minWidth={false} />,

		// [QWT-2390] - Color Underbar displays on Small / Large size in Selected state
		<Button selected color="red" icon="minus" iconPosition="after" minWidth={false} size="large" />,
		<Button selected color="red" icon="minus" iconPosition="after" minWidth={false} size="small" />,
		// iconPosition = before (Default) + icon
		<Button icon="plus">click me</Button>,
		<Button icon="arrowlargeright">click me</Button>,
		<Button icon="info">click me</Button>,
		// iconFlip
		<Button icon="arrowhookright" iconFlip="horizontal">click me</Button>,
		<Button icon="arrowhookright" iconFlip="vertical">click me</Button>,
		<Button icon="arrowhookright" iconFlip="both">click me</Button>,
		<Button icon="arrowhookright" iconFlip="auto">click me</Button>
	])
];

export default ButtonTests;
