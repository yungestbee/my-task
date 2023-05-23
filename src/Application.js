import {useState} from 'react'
import './Application.css'

function Application(){
    const [easting, setEasting] = useState('')
    const [northing, setNorthing] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    
    const getEasting = (e) =>{
        setEasting(e.target.value)
    }
    const  getNorthing= (e) =>{
        setNorthing(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        async function yeah(){
        let result = await fetch(`https://api.getthedata.com/bng2latlong/${easting}/${northing}`);
        let data = await result.json()
        setLongitude(data.longitude)
        setLatitude(data.latitude)
        }
        yeah()
    }


    return(
        <div className='contain'>
            <form>
                <h3>Convert easting and northing to latitude and longitude</h3>
                <label>Easting</label><br/>
                <input type="number" onChange={getEasting}  />
                <br/>
                <label>Northing</label><br/>
                <input type="number" onChange={getNorthing}  />
                <br/>
                <button type="submit" onClick={handleSubmit}>Convert</button>
            
                <p>Longitude:   {longitude}</p>
                <p>Latitude: {latitude}</p>
            </form>

        </div>
    )
}

export default Application