import { DATE_CONVERSION_TYPE } from './constants';
import moment from 'moment';

export {
    formatDateTime,
    sendPostRequest,
    sendGetRequest
}


async function sendPostRequest(url, headers, data) {
    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }
    let response = await fetch(url, options)
    response = await response.json();
    return response;
}

async function sendGetRequest(url, headers) {

    const options = {
        method: 'GET',
        headers: headers
    }
    let response = await fetch(url, options)
    response = await response.json();
    return response;
}

function formatDateTime(date, type) {
    if (type === DATE_CONVERSION_TYPE.DATE) {
        return moment(date).format("DD-MM-YYYY");
    } else if (type === DATE_CONVERSION_TYPE.TIME) {
        return moment(date).format("H:m A")
    } else {
        return date;
    }
}