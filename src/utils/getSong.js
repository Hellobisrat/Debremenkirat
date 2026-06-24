import songs from "../data/emebetachin/songs.json";

export function getSong(category) {
  return songs[category]
}
