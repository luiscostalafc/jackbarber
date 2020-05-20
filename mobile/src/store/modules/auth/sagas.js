import { Alert } from 'react-native';

import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import navigations from '../../../services/navigations';
import * as AuthActions from './actions';

function* signIn({ payload }) {
	try {
		const { email, password } = payload;

		const response = yield call(api.post, '/sessions', { email, password });

		const { token, user } = response.data;

		yield put(AuthActions.signInSuccess(token, user));

		api.defaults.headers.Authorization = `Bearer ${token}`;
	} catch (error) {
		Alert.alert('Error', 'Falha no login, verifique seus dados');
		yield put(AuthActions.signFailure());
	}
}

function* signUp({ payload }) {
	try {
		const { name, email, password, phone, zipcode, street, number, complement, district, city, state} = payload;

		yield call(api.post, '/users', { name, email, password, phone, zipcode, street, number, complement, district, city, state});

		yield put(AuthActions.signUpSuccess());

		Alert.alert('Success', 'Cadastro realizado!');
		navigations.navigate('SignIn');
	} catch (error) {
		Alert.alert('Error', 'Falha do cadastro, verifique seus dados');
		yield put(AuthActions.signFailure());
	}
}

function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export default all([
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
	takeLatest('persist/REHYDRATE', setToken),
]);
