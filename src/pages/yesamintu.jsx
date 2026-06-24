import { useState } from "react";
import songs from "../data/emebetachin/songs.json";
import yegetasongs from "../data/getachin/yegetaSong.json";
import PrayerPage from "../components/PrayerPage";
import { getSong } from "../utils/getSong";

export default function Yesamintu() {
  const categories = Object.keys(songs);        
  const lists = Object.keys(yegetasongs);      

  const [selected, setSelected] = useState(
    localStorage.getItem("weeklySong") || categories[0]
  );

  const [yegetaMez, setYegetaMez] = useState(
    localStorage.getItem("yegetaSong") || lists[0]
  );

  // Load data
  const data = getSong(selected);               
  const data1 = yegetasongs[yegetaMez];         

  const handleChange = (value) => {
    setSelected(value);
    localStorage.setItem("weeklySong", value);
  };

  const handleChange1 = (value) => {
    setYegetaMez(value);
    localStorage.setItem("yegetaSong", value);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        የሳምንቱ መዝሙር
      </h1>

      <div className="flex gap-4">
        {/* Emebetachin */}
        <select
          value={selected}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {songs[cat].title}
            </option>
          ))}
        </select>

        {/* Getachin */}
        <select
          value={yegetaMez}
          onChange={(e) => handleChange1(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {lists.map((item) => (
            <option key={item} value={item}>
              {yegetasongs[item].title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <PrayerPage {...data} />
      </div>

      <div className="mt-6">
        <PrayerPage {...data1} />
      </div>
    </div>
  );
}
