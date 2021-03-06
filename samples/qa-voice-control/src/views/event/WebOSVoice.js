import Button from '@enact/lune/Button';
import Heading from '@enact/lune/Heading';
import {VoiceControlDecorator} from '@enact/webos/speech';
import {Component} from 'react';

import CommonView from '../../components/CommonView';

const VoiceButton = VoiceControlDecorator(Button);


class Sample extends Component {
	constructor (props) {
		super(props);
		this.state = {
			result: ''
		};
	}

	showResult = (msg) => {
		this.setState({result: msg});
	};

	handleClick = () => {
		this.showResult('handleClick > Hello');
	};

	handleVoice = (e) => {
		let {intent, value} = e.detail;
		this.showResult('handleVoice > ' + intent + ' | ' + value);
		e.preventDefault();
	};

	render () {
		return (
			<CommonView title="webOSVoice" subtitle={this.state.result}>
				<Heading>Customized Intent | Select PlayContent Delete</Heading>
				<VoiceButton data-webos-voice-intent="Select PlayContent Delete" onVoice={this.handleVoice} onClick={this.handleClick}>Hello</VoiceButton>
			</CommonView>
		);
	}
}

export default Sample;
