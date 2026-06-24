
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function Gelilaetwi(){
  const data = getSong('gelilaetwi')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default Gelilaetwi