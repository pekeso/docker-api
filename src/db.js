const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'mysql', 
                                process.env.DB_USER || 'root',
                                process.env.DB_PASSWORD || 'password', 
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 3306,
                                    dialect: 'mysql'
                                });
                                
const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = {
    sequelize: sequelize,
    Person: Person
};
                            