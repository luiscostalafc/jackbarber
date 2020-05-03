import * as Yup from 'yup';
import Address from '../models/Address';

class AddressController {
	async store(req, res) {
		const schema = Yup.object().shape({
			user_name: Yup.number().riquired(),
			user_email: Yup.string()
				.email()
				.required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validations fails' });
		}

		const { id, street, number, complement, zipcode, district, city, state, phone } = await Address.create();

		return res.json({
			id,
			street,
			number,
			complement,
			zipcode,
			district,
			city,
			state,
			phone
		});
	}
	async update(req, res) {
		const address = await Address.findByIdAndUpdate(
			req.params.id,

			street,
			number,
			complement,
			zipcode,
			district,
			city,
			state,
			phone,
		);

		return res.json(address);
	}

}

export default new AddressController();
