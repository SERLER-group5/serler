import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "genders";

export function  getGenders(){
    return  http.get(apiEndpoint);
};
