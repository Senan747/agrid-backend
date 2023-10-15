'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'price', {
      type: Sequelize.INTEGER,
      allowNull: true, // İstəyə bağlı olaraq null qəbul edilə bilər
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'price');
  }
};
