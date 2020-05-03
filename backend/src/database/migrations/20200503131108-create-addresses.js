module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('addresses', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			phone: {
			 type: Sequelize.STRING,
			 allowNull: false,
			},
			zipcode: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			street: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			number: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			complement: {
				type: Sequelize.STRING,
				allowNull: true
			},
			district: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			state: {
			 type: Sequelize.STRING,
			 allowNull: false,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('addresses');
	},
};
