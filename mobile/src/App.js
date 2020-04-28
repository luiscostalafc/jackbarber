import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import createRouter from './routes';
import navigations from './services/navigations';

export default function App() {
	const signed = useSelector(state => state.auth.signed);
	const Routes = createRouter(signed);

	return (
		<>
			<StatusBar
				backgroundColor={signed ? '#18161f' : '#22202C'}
				barStyle="light-content"
			/>
			<Routes
				ref={navigatorRef => {
					navigations.setNavigator(navigatorRef);
				}}
			/>
		</>
	);
}
