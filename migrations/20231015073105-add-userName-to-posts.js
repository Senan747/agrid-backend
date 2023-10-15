'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'userName', {
      type: Sequelize.STRING, // Yeni sütunun tipi
      allowNull: true, // İstəyə bağlı olaraq null qəbul edilə bilər
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'userName');
  }
};
