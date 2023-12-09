const Graphiccard = require('../models/gpuModel')


// get all gpu
exports.getGraphiccards = async (req, res) => {
    try {
        const graphiccards = await Graphiccard.find()
        res.status(200).json({
            status: 'success',

            data: {
                graphiccards
            }

        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}

// get one gpu
exports.getGraphicCard = async (req, res) => { // for optional parameter add ? after it
    try {

        const graphiccard = await Graphiccard.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: graphiccard

        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}


// create a process