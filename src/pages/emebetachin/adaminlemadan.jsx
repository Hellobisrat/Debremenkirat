
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"


function Adaminlemadan() { 
    const data= getSong("adaminlemadan")
  return (
 
  
       <PrayerPage {...data}/>
 
   
  )
}

export default Adaminlemadan