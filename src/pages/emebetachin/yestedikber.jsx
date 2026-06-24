
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function yestedikbere() {
  const data = getSong('yestedikbere')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default yestedikbere