import Scroller from '@enact/sandstone/Scroller';
import ToggleButton from '@enact/sandstone/SwitchItem';
import Layout, {Cell} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';
import React from 'react';

class ScrollerView extends React.Component {
	constructor () {
		super();
		this.state = {
			customAriaLabel: false,
			isNative: true
		};
	}

	handleChangeAriaLabelButton = () => this.setState((state) => ({customAriaLabel: !state.customAriaLabel}))
	handleChangeJSNativeButton = () => this.setState((state) => ({isNative: !state.isNative}))

	render () {
		const {isNative, customAriaLabel} = this.state;

		return (
			<Layout orientation="vertical">
				<Cell shrink>
					<ToggleButton
						onClick={this.handleChangeAriaLabelButton}
						selected={customAriaLabel}
					>
						Customizable aria-labels on ScrollThumbs
					</ToggleButton>
					<ToggleButton
						onClick={this.handleChangeJSNativeButton}
						selected={isNative}
					>
						Native
					</ToggleButton>
				</Cell>
				<Cell
					component={Scroller}
					focusableScrollbar="byEnter"
					scrollMode={isNative ? 'native' : 'translate'}
					verticalScrollThumbAriaLabel={customAriaLabel ? 'This is vertical scroll thumb' : null}
					horizontalScrollThumbAriaLabel={customAriaLabel ? 'This is horizontal scroll thumb' : null}
				>
					<div style={{width: ri.scaleToRem(6000)}}>
						Foo<br />Bar<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />
						Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. <br />Foo<br />Bar<br />Bar<br />
						Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />
						Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. <br />Foo<br />Bar<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />
						Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />
						Foo<br />Bar<br />Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. <br />Foo<br />Bar<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />
						Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow<br />Foo<br />Bar<br />Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
						Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow. Boom boom pow.
					</div>
				</Cell>
			</Layout>
		);
	}
}

export default ScrollerView;