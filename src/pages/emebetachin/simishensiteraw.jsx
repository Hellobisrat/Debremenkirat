
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

const simishensiteraw = () => {
   const data= getSong("simishenseteraw")
  return (
     <PrayerPage {...data}/>
  )
}

export default simishensiteraw 