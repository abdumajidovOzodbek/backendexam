import * as pg from 'pg';;
import { Sequelize } from "sequelize";
const sequelize =new Sequelize({
    username: 'postgres',
    password:'1234ozod',
    host:'localhost',
    database:'forlesson',
    logging:true,
    dialect:'postgres'
})

!async function(){
    try {
        await sequelize.authenticate()
        console.log('connected');
    } catch (error) {
        console.log('error: ', error);
    }
}() 

export default sequelize