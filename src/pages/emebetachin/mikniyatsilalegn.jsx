import PrayerPage from "../../components/PrayerPage"
import { getSong } from "../../utils/getSong"
const mikinyatsilalegn = () => {
  const data= getSong("mikniyatsilalegn")
  return (
    <PrayerPage {...data}/>
  )
}

export default mikinyatsilalegn