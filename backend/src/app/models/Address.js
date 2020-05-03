import Sequelize, { Model } from 'sequelize';

class Address extends Model {
	static init(sequelize) {
		super.init(
			{
				street: Sequelize.STRING,
				number: Sequelize.INTEGER,
				complement: Sequelize.INTEGER,
				zipcode: Sequelize.INTEGER,
				district: Sequelize.INTEGER,
				city: Sequelize.INTEGER,
				state: Sequelize.INTEGER,
				phone: Sequelize.STRING,

				},
			{
				sequelize,
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
	}
}

export default Address;
