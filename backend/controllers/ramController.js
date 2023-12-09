const Ram = require('../models/ramModel')


// get all rams
exports.getRams = async (req, res) => {
    try {
        const rams = await Ram.find()
        res.status(200).json({
            status: 'success',

            data: {
                rams
            }

        });
        // res.send(rams)
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}

// get one ram
exports.getRam = async (req, res) => { // for optional parameter add ? after it
    try {

        const ram = await Ram.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: ram

        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}


// create a process