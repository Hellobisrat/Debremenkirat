import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"

const emebeteyamilakenat = () => {
   const data= getSong("emebeteyamilakenat")
  return (
     <PrayerPage {...data}/>
  )
}

export default emebeteyamilakenat