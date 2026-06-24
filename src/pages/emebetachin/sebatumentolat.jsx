
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function sebatumentolat() {
  const data = getSong('sebatumentolat')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default sebatumentolat