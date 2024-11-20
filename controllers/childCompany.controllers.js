const { ChildCompany } = require('../models/childCompany.model');
const { addDB } = require('../models/common.model');
const { createDBConnection }  = require('../config/multiple.db');
const getCompany = async (req, res) => {
    try {
        const data = await ChildCompany.find().sort({ createdAt: -1 });
        console.log("company is ", data)
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const getByIdCompany = async (req, res) => {
    try {
        const data = await ChildCompany.findById(req.params.id);
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const storeCompany = async (req, res) => {
    try {
        const data = await new ChildCompany({ ...req.body, company_db: req.body.company_name + '_db' }).save();
        if (data) {
            try {
                addDB([data.company_db]);
            } catch (err) {
                console.log("problem in creating database  " , err);
            }
        }
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const updateCompany = async (req, res) => {
    try {
        let data = await ChildCompany.findByIdAndUpdate(req.params.id, req.body)
        // let data = await newCompanyloyee[req.headers.companyid](req.body).save();
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const deleteCompany = async (req, res) => {
    try {
        const data = await ChildCompany.findById(req.params.id);
        if(data && data.company_db){
            const conn =  createDBConnection(data.company_db);
            await conn.dropDatabase();
            data.deleteOne()
            await conn.close();
        }
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const authCompany = async (req, res) => {
    try {
        const { name } = req.body;
        const data = await ChildCompany.findOne({ name });
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}

module.exports = {
    getCompany, getByIdCompany, storeCompany, updateCompany, deleteCompany, authCompany
}