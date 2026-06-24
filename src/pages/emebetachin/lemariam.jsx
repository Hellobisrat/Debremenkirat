
import { getSong } from "../../utils/getSong"
import PrayerPage from "../../components/PrayerPage"


function Lemariam () {
  const data = getSong("lemariam")
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default Lemariam

