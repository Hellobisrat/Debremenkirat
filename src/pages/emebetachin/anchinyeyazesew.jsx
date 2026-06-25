import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"
const anchinyeyazesew = () => {
  const data= getSong("emebetemariam")
  return (
    <PrayerPage {...data}/>
  )
}

export default anchinyeyazesew