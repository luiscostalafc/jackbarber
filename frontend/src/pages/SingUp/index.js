import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, Image } from './styles.js';

import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
	name: Yup.string().required('O nome é obrigatório'),
	email: Yup.string()
		.email('Insira um e-mail válido')
		.required('O e-mail é obrigatório'),
	password: Yup.string()
		.min(6, 'No mínimo 6 caracteres')
		.required('A senha é obrigatória'),
		phone: Yup.string()
		.required(),
	zipcode: Yup.string(),
	street: Yup.string().required(),
	number: Yup.string().required(),
	complement: Yup.string(),
	district: Yup.string(),
	city: Yup.string().required(),
	state: Yup.string().required()
});

export default function SingUp() {
	const dispatch = useDispatch();

	function handleSubmit({ name, email, password, phone, zipcode, street,
	number, complement, district, city, state }) {
		dispatch(signUpRequest(name, email, password, phone, zipcode, street,
			number, complement, district, city, state));
	}

	return (
		<>
       <Container>
			<Image  src={logo} alt="Jack Barber" />

			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="name" placeholder="Nome completo" />
				<Input name="email" type="email" placeholder="Seu e-mail" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha secreta"
				/>
				<Input name="phone" placeholder="Seu número com DDD" />
				<Input name="zipcode" placeholder="CEP" />
				<Input name="street" placeholder="Logradouro" />
				<Input name="number" placeholder="Número" />
				<Input name="complement" placeholder="Complemento" />
				<Input name="district" placeholder="Bairro" />
				<Input name="city" placeholder="Cidade" />
				<Input name="state" placeholder="Estado" />

				<button type="submit">Criar conta</button>
				<Link to="/">Já tenho login</Link>

			</Form>
			</Container>
		</>
	);
}
