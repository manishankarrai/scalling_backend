const { employeeSchema } = require('./employee.model');
const { createDBConnection } = require('../config/multiple.db');
const { ChildCompany } = require('./childCompany.model');

let DB = [];

async function addDB(dbs) {
    DB = [...DB, ...dbs];
    await connectModels(dbs);
}

const Employee = {
    default: createDBConnection('parent_company')
};

async function connectModels(dbs) {
    for (let db of dbs) {
        console.log("connections " , db);
        const connection = await createDBConnection(db);
        Employee[db] = connection.model('Employee', employeeSchema);
    }
}

async function startFun() {
    
    let allDb = await ChildCompany.find();
    console.log("all db" , allDb)
    let dbs = [];
    allDb.forEach((item) => {
        dbs.push(item.company_db);
    });
    connectModels(dbs);
}
setTimeout(() => {
    startFun()
}, 0);
module.exports = { Employee, addDB };  
