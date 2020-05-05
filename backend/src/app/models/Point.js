import Sequelize, { Model } from 'sequelize';


class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        latitude: Sequelize.DECIMAL(6, 9),
        longitude: Sequelize.DECIMAL(6, 9),
      },
      {
        sequelize
      }
		);

		return this;
	}
	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
	}
}

export default Point;
