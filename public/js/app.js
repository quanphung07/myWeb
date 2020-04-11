const city=document.querySelector('#city')
const temp=document.querySelector('#temp')
const status=document.querySelector('#status')
const winSP=document.querySelector('#windSp')
document.querySelector('#send').addEventListener('click',async ()=>{
    city.innerHTML="Loading....."
  let address=document.querySelector('#address').value;
   
    let respone=await fetch (`/weather/search?addr=${address}`);
    let res=await respone.json()
    city.innerHTML=` Address: `+res.addr
    temp.innerHTML='Temperature: '+res.temper+`&deg;C`
    status.innerHTML='Status: '+res.status
    windSp.innerHTML='Wind Speed: '+res.windSpeed+"km/h"

    
    
    
})
