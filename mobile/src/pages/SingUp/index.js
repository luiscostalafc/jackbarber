import React, { useRef, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
	Container,
	Form,
	FormInput,
	SubmitButton,
	SignLink,
	SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
	const dispatch = useDispatch();

	const emailRef = useRef();
	const passwordRef = useRef();
	const phoneRef = useRef();
	const zipcodeRef = useRef();
	const streetRef = useRef();
	const numberRef = useRef();
	const complementRef = useRef();
	const districtRef = useRef();
	const cityRef = useRef();
	const stateRef = useRef();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [street, setStreet] = useState('');
	const [number, setNumber] = useState('');
	const [complement, setComplement] = useState('');
	const [district, setDistrict] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	const loading = useSelector(state => state.auth.loading);

	function handleSubmit() {
		dispatch(
			signUpRequest(
				name,
				email,
				password,
				phone,
				zipcode,
				street,
				number,
				complement,
				district,
				city,
				state
			)
		);
	}

	return (
		<ScrollView>
			<Background>
				<Container>
					<Image source={logo} />

					<Form>
						<FormInput
							icon="person-outline"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Nome completo"
							returnKeyType="next"
							onSubmitEditing={() => emailRef.current.focus()}
							value={name}
							onChangeText={setName}
						/>

						<FormInput
							icon="mail-outline"
							keyboardType="email-address"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Digite seu e-mail"
							ref={emailRef}
							returnKeyType="next"
							onSubmitEditing={() => passwordRef.current.focus()}
							value={email}
							onChangeText={setEmail}
						/>
						<FormInput
							icon="lock-outline"
							secureTextEntry
							placeholder="Sua senha secreta"
							ref={passwordRef}
							returnKeyType="send"
							onSubmitEditing={handleSubmit}
							value={password}
							onChangeText={setPassword}
						/>
						<FormInput
							icon="phone-android"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Seu número com DDD"
							ref={phoneRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={phone}
							onChangeText={setPhone}
						/>
						<FormInput
							icon="local-post-office"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Seu CEP"
							ref={zipcodeRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={zipcode}
							onChangeText={setZipcode}
						/>
						<FormInput
							icon="location-city"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Sua rua"
							ref={streetRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={street}
							onChangeText={setStreet}
						/>
						<FormInput
							icon="location-city"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Número do endereço"
							ref={numberRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={number}
							onChangeText={setNumber}
						/>
						<FormInput
							icon="location-city"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Complemento"
							ref={complementRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={complement}
							onChangeText={setComplement}
						/>
						<FormInput
							icon="location-city"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Bairro"
							ref={districtRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={district}
							onChangeText={setDistrict}
						/>
						<FormInput
							icon="location-city"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Cidade"
							ref={cityRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={city}
							onChangeText={setCity}
						/>
						<FormInput
							icon="location-city"
							autoCorrect={false}
							autoCapitalize="none"
							placeholder="Estado"
							ref={stateRef}
							returnKeyType="next"
							onSubmitEditing={handleSubmit}
							value={state}
							onChangeText={setState}
						/>

						<SubmitButton loading={loading} onPress={handleSubmit}>
							Criar conta
						</SubmitButton>
					</Form>

					<SignLink onPress={() => navigation.navigate('SignIn')}>
						<SignLinkText>Já tenho conta</SignLinkText>
					</SignLink>
				</Container>
			</Background>
		</ScrollView>
	);
}
