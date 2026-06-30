import { useParams } from "react-router-dom";
import { getSong } from "../utils/getSong";

import PrayerPageDefault from "../components/PrayerPageDefault";

export default function SongPage() {
  const { category, id } = useParams();
  const data = getSong(category, id);

  return <PrayerPageDefault {...data} />;
}
