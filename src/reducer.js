import {combineReducers} from 'redux';
import {countries} from "./reducers/countries";
import {searchValue} from "./reducers/searchValue";

export const reducer = combineReducers({
    countries,
    searchValue
})