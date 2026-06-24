
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function DingilBedinglina() {
  const data = getSong('dingilbedinglina')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default DingilBedinglina