// Example using Moment.js
const moment = require('moment');

function convertDateTime(inputDateTime) {
    try {
        // Parse the datetimes using moment.js
        const parsedDateTime = moment(inputDateTime,['DD/MM/YYYY HH:mm', 'YYYY-MM-DD HH:mm']);

        if (parsedDateTime.isValid()) {
            // Format the datetimes to the desired format
            return parsedDateTime.format('YYYY-MM-DD HH:mm');
        }
    } catch (error) {
        console.error("Error parsing datetime:", error);
    }

    return null;
}

// Example usage
const inputDateTimes = ["01/09/2023 11:55", "2023-09-01 11:55", "invalid_datetime"];
for (const inputDateTime of inputDateTimes) {
    const outputDateTime = convertDateTime(inputDateTime);
    console.log(`Input: ${inputDateTime}, Output: ${outputDateTime}`);
}

module.exports = {convertDateTime}