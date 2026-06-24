
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

function Sidetish() {
  const data = getSong('sidetish')
  return (
  
       <PrayerPage {...data}/>
 
   
  )
}

export default Sidetish