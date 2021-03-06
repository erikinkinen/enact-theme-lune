import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Scroller from '../Scroller';

describe('Scroller', () => {
	let contents;

	beforeEach(() => {
		contents = (
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
				Aenean id blandit nunc. Donec lacinia nisi vitae mi dictum, eget pulvinar nunc tincidunt. Integer vehicula tempus rutrum. Sed efficitur neque in arcu dignissim cursus.
			</div>
		);
	});

	afterEach(() => {
		contents = null;
	});

	describe('Scrollbar visibility', () => {
		test(
			'should render both horizontal and vertical scrollbars when \'horizontalScrollbar\' and \'verticalScrollbar\' are "visible"',
			() => {
				render(
					<Scroller
						horizontalScrollbar="visible"
						verticalScrollbar="visible"
					>
						{contents}
					</Scroller>
				);

				const verticalScrollbar = screen.getByLabelText('scroll up or down with up down button');
				const horizontalScrollbar = screen.getByLabelText('scroll left or right with left right button');

				expect(verticalScrollbar).toBeInTheDocument();
				expect(horizontalScrollbar).toBeInTheDocument();
			}
		);

		test(
			'should render only vertical scrollbar when \'verticalScrollbar\' is "visible" and \'horizontalScrollbar\' is "hidden"',
			() => {
				render(
					<Scroller
						horizontalScrollbar="hidden"
						verticalScrollbar="visible"
					>
						{contents}
					</Scroller>
				);

				const verticalScrollbar = screen.getByLabelText('scroll up or down with up down button');
				const horizontalScrollbar = screen.queryByLabelText('scroll left or right with left right button');

				expect(verticalScrollbar).toBeInTheDocument();
				expect(horizontalScrollbar).toBeNull();
			}
		);

		test(
			'should not render any scrollbar when when \'horizontalScrollbar\' and \'verticalScrollbar\' are "hidden"',
			() => {
				render(
					<Scroller
						horizontalScrollbar="hidden"
						verticalScrollbar="hidden"
					>
						{contents}
					</Scroller>
				);

				const verticalScrollbar = screen.queryByLabelText('scroll up or down with up down button');
				const horizontalScrollbar = screen.queryByLabelText('scroll left or right with left right button');

				expect(verticalScrollbar).toBeNull();
				expect(horizontalScrollbar).toBeNull();
			}
		);
	});

	describe('Scrollbar accessibility', () => {
		test(
			'should set a custom "aria-label" to the scroll thumb in the horizontal scroll bar',
			() => {
				const label = 'custom button aria label';
				render(
					<Scroller
						horizontalScrollbar="visible"
						horizontalScrollThumbAriaLabel={label}
						verticalScrollbar="visible"
					>
						{contents}
					</Scroller>
				);

				const horizontalScrollbarLabel = screen.getByLabelText(label);
				const horizontalScrollbar = screen.getByLabelText(label).parentElement.parentElement;

				expect(horizontalScrollbarLabel).toBeInTheDocument();
				expect(horizontalScrollbar).toHaveClass('horizontal');
			}
		);

		test(
			'should set a custom "aria-label" to the scroll thumb in the vertical scroll bar',
			() => {
				const label = 'custom button aria label';
				render(
					<Scroller
						horizontalScrollbar="visible"
						verticalScrollThumbAriaLabel={label}
						verticalScrollbar="visible"
					>
						{contents}
					</Scroller>
				);

				const verticalScrollbarLabel = screen.getByLabelText(label);
				const verticalScrollbar = screen.getByLabelText(label).parentElement.parentElement;

				expect(verticalScrollbarLabel).toBeInTheDocument();
				expect(verticalScrollbar).toHaveClass('vertical');
			}
		);

		test(
			'should set a null string "aria-label" to the scroll thumb in the horizontal scroll bar',
			() => {
				const label = '';
				render(
					<Scroller
						horizontalScrollbar="visible"
						horizontalScrollThumbAriaLabel={label}
						verticalScrollbar="visible"
					>
						{contents}
					</Scroller>
				);

				const horizontalScrollbarLabel = screen.getByLabelText(label);
				const horizontalScrollbar = screen.getByLabelText(label).parentElement.parentElement;

				expect(horizontalScrollbarLabel).toBeInTheDocument();
				expect(horizontalScrollbar).toHaveClass('horizontal');
			}
		);

		test(
			'should set a null string "aria-label" to the scroll thumb in the vertical scroll bar',
			() => {
				const label = '';
				render(
					<Scroller
						horizontalScrollbar="visible"
						verticalScrollThumbAriaLabel={label}
						verticalScrollbar="visible"
					>
						{contents}
					</Scroller>
				);

				const verticalScrollbarLabel = screen.getByLabelText(label);
				const verticalScrollbar = screen.getByLabelText(label).parentElement.parentElement;

				expect(verticalScrollbarLabel).toBeInTheDocument();
				expect(verticalScrollbar).toHaveClass('vertical');
			}
		);
	});
});
