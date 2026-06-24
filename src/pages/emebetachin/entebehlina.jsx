
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function entebehilina() {
  const data = getSong('entebehilina')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default entebehilina