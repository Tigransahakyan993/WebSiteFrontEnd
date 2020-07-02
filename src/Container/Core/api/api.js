import Service from '../service/Service'
import {METHODS} from '../constants/Constants'
const App = {};

App.doGet = async (endpoint, successCb, errorCb) => {
   await Service.request(endpoint, METHODS.GET, null, successCb, errorCb)
}

App.doPost = async (endpoint,body, successCb, errorCb) => {
   await Service.request(endpoint, METHODS.POST, body, successCb, errorCb)
}

App.doPut = async (endpoint,body, successCb, errorCb) => {
   await Service.request(endpoint,METHODS.PUT,body, successCb, errorCb)
}

App.doDelete = async (endpoint, successCb, errorCb) => {
   await Service.request(endpoint, METHODS.DELETE ,null, successCb, errorCb)
}

export default App;