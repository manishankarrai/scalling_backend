const {Employee } = require('../models/common.model');
const getEmp = async (req, res) => {
    try {
        
        const data = await Employee[req.headers.companyid].find().sort({ createdAt: -1 });
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const getByIdEmp = async (req, res) => {
    try {
        const data = await Employee[req.headers.companyid].findById(req.params.id);
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const storeEmp = async (req, res) => {
    try {
        const data = await new Employee[req.headers.companyid](req.body).save();
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const updateEmp = async (req, res) => {
    try {
        let  data   =  await Employee[req.headers.companyid].findByIdAndUpdate(req.params.id , req.body)
       // let data = await newEmployee[req.headers.companyid](req.body).save();
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const deleteEmp = async (req, res) => {
    try {
        const data = await Employee[req.headers.companyid].findByIdAndDelete(req.params.id);
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}
const authEmp  = async (req, res) => {
    try {
        const { name } =  req.body ;
        const data = await Employee[req.headers.companyid].findOne({ name });
        res.status(200).send({ error: 0, message: 'success', data: data });
    } catch (error) {
        res.status(500).send({ error: 1, message: error.message, data: null });
    }
}

module.exports =  {
      getEmp , getByIdEmp  , storeEmp , updateEmp  , deleteEmp   , authEmp
}