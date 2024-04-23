/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "6ee93f34"; // Poné tu APIKEY, esta no funciona.
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page${page}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.respuesta = apiResponse.data.response;
    return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    const apiResponse = await axios.get(requestString);
    returnObject.data = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.respuesta = apiResponse.data.response;
    return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&I=${imdbID}`;
    const apiResponse = await axios.get(requestString);
    returnObject.data = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.respuesta = apiResponse.data.response;
    return returnObject;
};
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};