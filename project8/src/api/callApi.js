import axios from 'axios';

let baseUrl = import.meta.env.VITE_API_URL;

let apiKey = import.meta.env.VITE_WEATHER_API_KEY;

let CurrentWeatherData = async (lat, lon) => {
    let result = await axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)

    return result.data;
}

export { CurrentWeatherData };