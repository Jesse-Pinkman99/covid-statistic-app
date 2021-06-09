import {SET_SEARCH_VALUE} from "../constants/actionTypes";

let initialState = {
    searchValue: ""
}

export const searchValue = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                searchValue: action.searchValue
            }
        default:
            return state
    }
}