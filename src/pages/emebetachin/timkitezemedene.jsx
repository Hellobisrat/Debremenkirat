
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function TimketeZemedene() {
  const data = getSong('timketezemedene')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default TimketeZemedene