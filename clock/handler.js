const moment = require('moment');

exports.clock = async (event, context) => {
    try {
        console.log('clock function runs !')
        const message= moment().format();
        const response = {
            statusCode: 200,
            body: JSON.stringify(message)
        }
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
};