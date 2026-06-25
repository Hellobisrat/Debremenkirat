import songs from "../data/songs.json";

export function getSong(category,id) {
  return songs[category][id]
}
