
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"


function HulunegerBegishen() { 
    const data= getSong("huluNegerHoneBeGishen")
  return (
 
  
       <PrayerPage {...data}/>
 
   
  )
}

export default HulunegerBegishen