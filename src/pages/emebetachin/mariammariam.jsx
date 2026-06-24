
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function mariammariam() {
  const data = getSong('mariammariam')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default mariammariam
