module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('users', 'point_id', {
			type: Sequelize.INTEGER,
			references: { model: 'points', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
			allowNull: true,
		});
	},

	down: queryInterface => {
		return queryInterface.removeColumn('users', 'point_id');
	},
};
