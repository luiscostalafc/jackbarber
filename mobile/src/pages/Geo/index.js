import React, { useState, useEffect } from 'react';
import {
	View,
	ActivityIndicator,
	StyleSheet,
	Alert,
	Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';

// import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';

import markerImage from '../../assets/logo1.png';
import api from '../../services/api';

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFill,
		backgroundColor: '#323239',
		alignItems: 'center',
		justifyContent: 'center',
	},

	map: {
		...StyleSheet.absoluteFillObject,
	},
});

function Geo() {
	const [loading, setLoading] = useState(true);
	const [coordinates, setCoordinates] = useState({});
	const [points, setPoints] = useState([]);

	useEffect(() => {
		Geolocation.getCurrentPosition(
			({ coords }) => {
				setCoordinates(coords);
				setLoading(false);
			},
			error => {
				console.log(error);
			},
			{ enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
		);
	}, []);

	useEffect(() => {
		async function getData() {
			try {
				const { data } = await api.get(`/points`, {
					params: coordinates,
				});

				setPoints(data);
			} catch (err) {
				console.log(err);
			}
		}

		if (coordinates) getData();
	}, [coordinates]);

	function renderPoints() {
		return points.map(point => (
			<Marker
				image={markerImage}
				key={point.id}
				coordinate={{
					latitude: parseFloat(point.latitude),
					longitude: parseFloat(point.longitude),
				}}
				title={point.name}
			/>
		));
	}
	const ButtonAlert = () =>
		Alert.alert(
			'Localize o profissional mais próximo de você (:',
			'Depois volte para o Agendamento',
			[
				{
					text: 'CANCELAR',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
			],
			{ cancelable: false }
		);

	return (
		<View style={styles.container}>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<MapView
					initialRegion={{
						latitude: coordinates.latitude,
						longitude: coordinates.longitude,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}}
					style={styles.map}
					showsUserLocation
					loadingEnabled
				>
					{renderPoints()}
				</MapView>
			)}
			<Button
				style={{
					flex: 1,
					justifyContent: 'space-initial',
					alignItems: 'center',
				}}
				title="Orientações"
				onPress={ButtonAlert}
			/>
		</View>
	);
}
Geo.navigationOptions = {
	tabBarLabel: 'Express',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="directions-run" size={20} color={tintColor} />
	),
};

export default Geo;
