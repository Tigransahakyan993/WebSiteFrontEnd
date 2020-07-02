import {HOST} from "../constants/Constants";

const Service = {};

 Service.request = (endpoint,method, body,successCb, errorCb) => {

    fetch(HOST + endpoint, {
        method,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: body ? JSON.stringify(body) : undefined,
    })
       .then(data => data.json())
       .then(successCb)
       .catch(errorCb)
}

export default Service;