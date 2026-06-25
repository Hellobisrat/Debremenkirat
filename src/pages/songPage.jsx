import { useParams } from "react-router-dom";
import { getSong } from "../utils/getSong";
import PrayerPage from "../components/PrayerPage";

export default function SongPage() {
  const { category, id } = useParams();
  const data = getSong(category, id);

  return <PrayerPage {...data} />;
}
