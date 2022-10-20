import { GET_COUNTRIES } from "../type";

const CountriesReducerInitialState = {
    countries: [],
}
const CountriesReducer = (state = CountriesReducerInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_COUNTRIES:

            return { ...state, countries: payload };
        default:
            return state
    }
}
export default CountriesReducer;