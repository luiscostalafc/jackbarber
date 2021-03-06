import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* singIn({ payload }) {
	try {
		const { email, password } = payload;

		const response = yield call(api.post, '/sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		if (!user.provider) {
			toast.error('Usuário não é prestador');
			return;
		}

		api.defaults.headers.Authorization = `Bearer ${token}`;

		yield put(signInSuccess(token, user));

		history.push('/dashboard');
	} catch (err) {
		toast.error('Falha na autenticação, verifique seus dados');
		yield put(signFailure());
	}
}

export function* singUp({ payload }) {
	try {
		const { name, email, password, phone, zipcode, street, number, complement,
		district, city, state} = payload;

		yield call(api.post, 'users', {
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
			state,
			provider: true,
		});
		yield put(signUpSuccess());

		history.push('/');
	} catch (err) {
		toast.error('Falha no cadastro, verifique seus dados!');

		yield put(signFailure());
	}
}

function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export function signOut() {
	history.push('/');
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', singIn),
	takeLatest('@auth/SIGN_UP_REQUEST', singUp),
	takeLatest('@auth/SIGN_OUT', signOut),
]);
