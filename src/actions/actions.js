import {
    SET_COUNTRIES, SET_CURRENT_COUNTRY, SET_SEARCH_VALUE
} from "../constants/actionTypes";

export const setCountries = (countries) => {
    return {
        type: SET_COUNTRIES,
        countries
    }
}

export const setSearchValue = (searchValue) => {
    return {
        type: SET_SEARCH_VALUE,
        searchValue
    }
}

export const setCurrentCountry = (country) => {
    return {
        type: SET_CURRENT_COUNTRY,
        country
    }
}