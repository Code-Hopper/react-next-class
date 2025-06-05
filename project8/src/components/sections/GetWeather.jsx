import React from 'react'
import { useEffect, useState } from 'react'

import { CurrentWeatherData } from '../../api/callApi'

const GetWeather = () => {

    let [formdData, setFormData] = useState({
        lat: '',
        lon: ''
    })

    let [resposeManagement, setResposeManagement] = useState({
        loading: false,
        error: false
    })

    let [result, setResult] = useState(false);

    let handleChange = (e) => {
        let { name, value } = e.target;

        setFormData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form data submitted: ", formdData)
        getLatestWeatherData()
    }

    let getLatestWeatherData = async () => {
        try {

            setResposeManagement({
                loading: true,
                error: false
            })

            setTimeout(async () => {
                let result = await CurrentWeatherData(formdData.lat, formdData.lon);
                console.log("Latest weather data: ", result);
                setResult(result);


                if(!result){
                    throw ("unable to get data for provided cor...")
                }

                setResposeManagement({
                    loading: false,
                    error: false
                })
            }, 3000)

        } catch (err) {
            console.error("Error fetching weather data: ", err);
            setResposeManagement({
                loading: false,
                error: err
            })
        }
    }

    let WeatherCard = (props) => {
        return (
            <div className='bg-white text-black p-4 rounded-lg'>
                <h2 className='font-bold text-xl'>Weather Information</h2>
                <h3>in {props.data.name}</h3>

                <h3 className={`${props.data.main.temp > 30 ? "text-red-500" : "text-blue-500"}`} >temp is {props.data.main.temp} <sup>o</sup>C </h3>
            </div>
        )
    }


    return (
        <div id='GetWeather'>
            <form onSubmit={handleSubmit} className='bg-black text-white p-4 rounded-lg inline-flex flex-col gap-4 justify-center items-center w-[400px]'>
                <span className='font-bold text-3xl'>Tell Lat & Lon</span>

                <input onChange={handleChange} className='p-2 outline-none border-none text-black' type="text" placeholder='Enter Latitude' name='lat' value={formdData.lat} />

                <input onChange={handleChange} className='p-2 outline-none border-none text-black' type="text" placeholder='Enter Longitude' name='lon' value={formdData.lon} />

                <button className='bg-green-400 font-bold p-3 text-black rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out'>
                    Get Weather
                </button>

            </form>

            <div className='p-4 relative'>

                {
                    resposeManagement.loading ? <h1 className='text-red-500 font-bold position-absolute'>loading...</h1> : null
                }

                {
                    result ? <WeatherCard data={result} /> : resposeManagement.error
                }

            </div>

        </div>
    )
}

export default GetWeather
