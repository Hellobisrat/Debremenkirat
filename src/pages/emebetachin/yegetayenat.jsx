
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function yegetayenat() {
  const data = getSong('yegetayenat')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default yegetayenat