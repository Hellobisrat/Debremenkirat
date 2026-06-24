import { useState } from "react";
import songs from "../data/emebetachin/songs.json";
import { getSong } from "../utils/getSong";
import PrayerPage from "../components/PrayerPage";

export default function Yesamintu(){
  const categories = Object.keys(songs); // ["adaminlemadan", "bedingilina", ...]

  const [selected, setSelected] = useState(categories[0]);

  const data = getSong(selected);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        የሳምንቱ መዝሙር
      </h1>

      {/* Dropdown */}
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {songs[cat].title}
          </option>
        ))}
      </select>

      {/* Song Display */}
      <div className="mt-6">
        <PrayerPage {...data} />
      </div>
    </div>
  );
}
