
module.exports = {
	up: (queryInterface, Sequelize) => {
			return queryInterface.sequelize.transaction((t) => {
					return Promise.all([
							queryInterface.addColumn('users', 'zipcode', {
									type: Sequelize.STRING
							}, { transaction: t }),
							queryInterface.addColumn('users', 'street', {
									type: Sequelize.STRING,
							}, { transaction: t }),
							queryInterface.addColumn('users', 'number', {
								type: Sequelize.STRING,
						}, { transaction: t }),
						queryInterface.addColumn('users', 'complement', {
							type: Sequelize.STRING,
					}, { transaction: t }),
					queryInterface.addColumn('users', 'district', {
						type: Sequelize.STRING,
				}, { transaction: t }),
				queryInterface.addColumn('users', 'city', {
					type: Sequelize.STRING,
			}, { transaction: t }),
			queryInterface.addColumn('users', 'state', {
				type: Sequelize.STRING,
		}, { transaction: t })

					])
			})
	},

	down: (queryInterface, Sequelize) => {
			return queryInterface.sequelize.transaction((t) => {
					return Promise.all([
							queryInterface.removeColumn('users', 'zipcode', { transaction: t }),
							queryInterface.removeColumn('users', 'street', { transaction: t }),
							queryInterface.removeColumn('users', 'number', { transaction: t }),
							queryInterface.removeColumn('users', 'complement', { transaction: t }),
							queryInterface.removeColumn('users', 'district', { transaction: t }),
							queryInterface.removeColumn('users', 'city', { transaction: t }),
							queryInterface.removeColumn('users', 'state', { transaction: t }),
					])
			})
	}
};
