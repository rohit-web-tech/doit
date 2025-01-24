import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "./weatherType.js";

export const fetchWeather = (latitude, longitude, date) => async (dispatch) => {
    dispatch({ type: FETCH_WEATHER_REQUEST });

    const apiKey = "9dff6a4f7a894367846175012252401";
    const url = date
        ? `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${latitude},${longitude}&dt=${date}`
        : `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
    }
};
