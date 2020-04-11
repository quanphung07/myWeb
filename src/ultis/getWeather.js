const fetch=require('node-fetch')

const getWeather=async (lat,long)=>{
    const key=process.env.RAPID_API_KEY
    const urlWeather=`https://api.weatherbit.io/v2.0/current?units=M&lon=${lat}&lang=undefined&key=${key}&lat=${long}`
    let response=await fetch(urlWeather)
    let weather=await response.json()
    let temper=weather.data[0].temp
    let status=weather.data[0].weather.description

    let windSpeed=weather.data[0].wind_spd

     return {temper,status,windSpeed}
}
module.exports=getWeather