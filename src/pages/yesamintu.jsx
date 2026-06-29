import { useState } from "react";
import songs from "../data/songs.json";
import PrayerPage from "../components/PrayerPage";
import { getSong } from "../utils/getSong";

export default function Yesamintu() {
  const categories = Object.keys(songs.emebetachin);
  const lists = Object.keys(songs.yegetachin);

  const [selected, setSelected] = useState(
    localStorage.getItem("weeklySong") || categories[0]
  );

  const [yegetaMez, setYegetaMez] = useState(
    localStorage.getItem("yegetaSong") || lists[0]
  );

  const [showEmbed, setShowEmbed] = useState(true);

  const data = getSong("emebetachin", selected);
  const data1 = getSong("yegetachin", yegetaMez);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        የሳምንቱ መዝሙር
      </h1>

      <div className="flex gap-4">
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            localStorage.setItem("weeklySong", e.target.value);
          }}
          className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {songs.emebetachin[cat].title}
            </option>
          ))}
        </select>

        <select
          value={yegetaMez}
          onChange={(e) => {
            setYegetaMez(e.target.value);
            localStorage.setItem("yegetaSong", e.target.value);
          }}
          className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {lists.map((item) => (
            <option key={item} value={item}>
              {songs.yegetachin[item].title}
            </option>
          ))}
        </select>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowEmbed(!showEmbed)}
        className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg mt-4"
      >
        {showEmbed ? "Show Link Instead" : "Show Video Instead"}
      </button>

      <div className="mt-6">
        <PrayerPage {...data} showEmbed={showEmbed} />
      </div>

      <div className="mt-6">
        <PrayerPage {...data1} showEmbed={showEmbed} />
      </div>
    </div>
  );
}
