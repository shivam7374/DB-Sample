const Sequelize=require('sequelize')

const db = new Sequelize({
    // mysql
    dialect:'mysql',
    database:'sampledb22',
    username:'sampleuser22',
    password:'samplepass22'
})