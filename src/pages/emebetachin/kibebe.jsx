
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function Kibebe(){
  const data = getSong('kebebe')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default Kibebe