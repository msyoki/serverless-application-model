const moment = require('moment-timezone')

exports.convertTime=async(event,context)=>{
    try{
        console.log(event);
        const time_zone = event.queryStringParameters && event.queryStringParameters.tz;
        let message = "";

        if(event.queryStringParameters !== null && time_zone !== undefined){
            const current_time = moment.tz(time_zone).format()
            message = "The time in "+ time_zone + " is : " + current_time;

        }
        else{
            const current_time = moment.tz('UTC').format()
            message = "The time in  GMT 0 is :  " + current_time;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(message)
        }
        return response;
    }
    catch(error){
        console.log(error);
        return error;
    }
  

};