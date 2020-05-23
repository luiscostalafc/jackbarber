import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
	const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
		.configure({ host: '167.71.86.178' })
		.useReactNative()
		.use(reactotronRedux())
		.use(sagaPlugin())
		.connect();

	tron.clear();

	console.tron = tron;
}
