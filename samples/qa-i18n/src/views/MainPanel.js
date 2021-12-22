import kind from '@enact/core/kind';
import $L from '@enact/i18n/$L';
import Text from '@enact/i18n/Text';
import BodyText from '@enact/lune/BodyText';
import Heading from '@enact/lune/Heading';
import {Panel, Header} from '@enact/lune/Panels';
import Scroller from '@enact/lune/Scroller';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="QA Sample - I18N" />
			<Scroller>
				<Heading showLine>Strings</Heading>
				<BodyText>String - $L: {$L('String')}</BodyText>
				<BodyText>String - Text: <Text>String</Text></BodyText>

				<Heading showLine>Components</Heading>
			</Scroller>
		</Panel>
	)
});

export default MainPanel;
