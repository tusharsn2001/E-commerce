const Processor = require('../models/cpuModel')


// get all processors
exports.getProcessors = async (req, res) => {
    try {
        const processors = await Processor.find()
        res.status(200).json({
            status: 'success',

            data: {
                processors
            }

        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}

// get one processor
exports.getProcessor = async (req, res) => { // for optional parameter add ? after it
    try {

        const processor = await Processor.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: processor

        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}


// create a process