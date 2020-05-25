import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import App from './App';
import { store, persistor } from './store';

class Index extends Component {
	constructor(props) {
		super(props);

		OneSignal.init('f6e9e0ba-c319-4a40-bbb0-5034fb0213f0');

		OneSignal.addEventListener("received", this.onReceived);
		OneSignal.addEventListener("opened", this.onOpened);
		OneSignal.addEventListener("ids", this.onIds);
	}

	componentWillUnmount() {
		OneSignal.removeEventListener("received", this.onReceived);
		OneSignal.removeEventListener("opened", this.onOpened);
		OneSignal.removeEventListener("ids", this.onIds);
	}

	onReceived = data => {};

	onOpened = notification => {};

	onIds = id => {};


	render() {
		return (
			<Provider store={store}>
			 <PersistGate persistor={persistor}>
				 <StatusBar barStyle="light-content" backgroundColor="#323231" />
				 <App />
			 </PersistGate>
		 </Provider>

	 );

	}

}

export default CodePush({
	checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(Index);

