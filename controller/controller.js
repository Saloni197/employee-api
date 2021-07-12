var Empdb = require('../model/model.js');

exports.create = (req, res) => {
    const employee = new Empdb({
        name: req.body.name,
        mobile:req.body.mobile,
        department:req.body.department,
        salary:req.body.salary,
        gender:req.body.gender
    })

    employee.save(employee).then(data => {
        res.send(data)
    })
        .catch(err => {
            res.status(500).send({
                message: err
            });
        });
}

exports.findAll = (req, res) => {
        Empdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err })
            })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "please enter" })
    }

    const id = req.params.id;
    Empdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `employee not found` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "not updated" })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Empdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `employee already removed` })
            } else {
                res.send({
                    message: "employee deleted successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "something wrong to find employee, you want to delete"
            });
        });
}