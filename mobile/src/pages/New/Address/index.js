import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';


import {
	Container,
	Form,
	FormInput,
	SubmitButton,
	SignLink,
	SignLinkText,
} from './styles';

export default function Address({ navigation }) {

	const [phone, setPhone] = useState('');
	const [street, setStreet] = useState('');
	const [number, setNumber] = useState('');
	const [complement, setComplement] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [district, setDistrict] = useState('');
	const [city, setCity] = useState('');

 useEffect(() => {
	 async function createAddresses() {
		 const response = await api.post(`/addresses`)
	 }
 })

	function handleSubmit() {
		dispatch(addressSuccess(phone, street, number, complement, setComplement,
			zipcode, district, city));
	}

	return (
		<Background>
			<Container>

				<Form>
					<FormInput
						icon="phone"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Seu telefone com o DDD"
						returnKeyType="next"
						onSubmitEditing={() => phoneRef.current.focus()}
						value={phone}
						onChangeText={setPhone}
					/>

					<FormInput
						icon="home"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Digite seu logradouro"
						returnKeyType="next"
						onSubmitEditing={handleSubmit}
						value={street}
						onChangeText={setStreet}
					/>
					<FormInput
						icon="home"
						autoCorrect={false}
						placeholder="Número"
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={number}
						onChangeText={setNumber}
					/>

          <FormInput
						icon="home"
						autoCorrect={false}
						placeholder="Complemento/Bairro"
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={complement}
						onChangeText={setComplement}
					/>

					<FormInput
						icon="my-location"
						autoCorrect={false}
						placeholder="CEP"
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={zipcode}
						onChangeText={setZipcode}
					/>

					<FormInput
						icon="location-city"
						autoCorrect={false}
						placeholder="Cidade"
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={city}
						onChangeText={setCity}
					/>

					<FormInput
						icon="location-city"
						autoCorrect={false}
						placeholder="Estado"
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={district}
						onChangeText={setDistrict}
					/>




					<SubmitButton loading={loading} onPress={handleSubmit}>
						Confirmar
					</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('SignUp')}>
					<SignLinkText>Voltar</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
}


