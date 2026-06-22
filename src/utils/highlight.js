export const highlightWords = [
  "ማርያም",
  "ድንግል ማርያም",
  "እግዚአብሔር",
  "መንፈስ ቅዱስ",
  "ገብርኤል",
  "ኢየሱስ",
  "ክርስቶስ"
]

export function highlightText(text) {
  let result = text
  highlightWords.forEach(word => {
    const regex = new RegExp(word, "g")
    result = result.replace(regex, `<span class='text-red-500'>${word}</span>`)
  })
  return result
}
