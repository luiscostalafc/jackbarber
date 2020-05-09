import Mail from '../../lib/Mail';

class CreationDeliveryMail {
	get key() {
		return 'CreationDeliveryMail';
	}

	async handle({ data }) {
		const { deliveryman, product, recipient } = data;

		await Mail.sendMail({
			to: `${deliveryman.name} <${deliveryman.email}>`,
			subject: 'Novo atendimento cadastrado',
			template: 'creationDelivery',
			context: {
				deliveryman: deliveryman.name,
				product,
				recipient: recipient.name,
				city: recipient.city,
				state: recipient.state,
				street: recipient.street,
				number: recipient.number,
				zip_code: recipient.zip_code,
			},
		});
	}
}

export default new CreationDeliveryMail();
