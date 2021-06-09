import {
    SET_COUNTRIES,
    SET_CURRENT_COUNTRY
} from '../constants/actionTypes'

const initialState = {
    countries: [],
    currentCountry: null,
}

export const countries = (state = initialState, action) => {
    switch(action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: [...action.countries]
            }
        case SET_CURRENT_COUNTRY:
            return {
                ...state,
                currentCountry: action.country
            }
        default:
            return state
    }
}