const Sequelize=require('sequelize')

const db = new Sequelize({
    // mysql
    dialect:'mysql',
    database:'sampledb22',
    username:'sampleuser22',
    password:'samplepass22'
})
// Tasks is my model
const Tasks = db.define('task', {
    // here we define columns
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.DataTypes.STRING(140),
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
})
db.authenticate()