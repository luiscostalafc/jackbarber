import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Geo from './pages/Geo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';


import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';


export default (signedIn = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Sign: createSwitchNavigator({
					Geo,
					SignIn,
					SignUp,
				}),
				App: createBottomTabNavigator(
					{
						Dashboard,
						New: {
							screen: createStackNavigator(
								{
									SelectProvider,
									SelectDateTime,
									Confirm,
								},
								{
									defaultNavigationOptions: {
										headerTitleAlign: 'center',
										headerTransparent: true,
										headerTintColor: '#fff',
										headerLeftContainerStyle: {
											marginLeft: 20,
										},
									},
								}
							),
							navigationOptions: {
								tabBarVisible: false,
								tabBarLabel: 'Agendar',
								tabBarIcon: (
									<Icon
										name="add-circle-outline"
										size={20}
										color="rgba(255, 255, 255, 0.6)"
									/>
								),
							},
						},
						Profile,
					},

					{
						resetOnBlur: true,
						tabBarOptions: {
							keyboardHidesTabBar: true,
							activeTintColor: '#FFF',
							inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
							style: {
								backgroundColor: '#323239',
							},
						},
					},





				),
			},
			{
				initialRouteName: signedIn ? 'App' : 'Sign',
			}
		)
	);
