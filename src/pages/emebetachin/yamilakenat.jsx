
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function yamilakenat() {
  const data = getSong('yamilakenat')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default yamilakenat
