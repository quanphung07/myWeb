const fetch= require('node-fetch')
const getLocation=async (addr)=>{
    const key=process.env.MAP_BOX_KEY
    const mapUrl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${addr}.json?access_token=${key}`

    let response=await fetch(mapUrl)
    let location=await response.json()
    let lat=location.features[0].center[0]
    let long=location.features[0].center[1]
   return {lat,long}

}
module.exports=getLocation