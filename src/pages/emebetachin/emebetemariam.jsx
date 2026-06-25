import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

const emebetemariam = () => {
   const data= getSong("emebetemariam")
  return (
     <PrayerPage {...data}/>
  )
}

export default emebetemariam