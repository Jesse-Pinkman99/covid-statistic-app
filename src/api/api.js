import axios from "axios";

export const countriesAPI = {
    getCountries() {
        return axios.get("https://api.covid19api.com/summary").then(response => response.data)
    }
}