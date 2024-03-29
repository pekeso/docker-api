const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_DB || 'addressbook_db', 
                                process.env.MYSQL_USER || 'root',
                                process.env.MYSQL_PASSWORD, 
                                {
                                    host: process.env.MYSQL_HOST || 'db',
                                    dialect: 'mysql'
                                });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
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
                            