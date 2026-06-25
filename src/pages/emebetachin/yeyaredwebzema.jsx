
import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

const yeyaredwebzema = () => {
   const data= getSong("yeyaredwibzema")
  return (
     <PrayerPage {...data}/>
  )
}

export default yeyaredwebzema