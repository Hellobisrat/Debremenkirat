import { highlightText } from "../utils/highlight";

export default function PrayerPage({ title, subtitle, sections,link }) {

  const lyricsText = sections.map(s => s.text).join("\n\n");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-500 dark:from-gray-900 dark:to-gray-800 py-2 px-2">

        <div className="max-w-3xl mx-auto bg-sky-100 dark:bg-gray-800 shadow-xl rounded-xl p-8">

        {/* Page Title */}
        

        {/* PPT Slide */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center min-h-[300px]">

          {/* PPT Title */}
          <h2 className="text-3xl font-bold mb-4">
            {title}
          </h2>

          {/* PPT Subtitle */}
          {subtitle && (
            <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {subtitle}
            </h3>
          )}

          {/* PPT Lyrics */}
          <p
            className="text-2xl font-semibold leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: highlightText(lyricsText).replace(/\n/g, "<br/>")
            }}
          />
        </div>

      </div>
      <div className="flex  items-center justify-center gap-3 mt-6">

  {/* Copy Lyrics */}
  <button
    onClick={() => {
      const fullText = `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`;
      navigator.clipboard.writeText(fullText);
      alert("መዝሙሩ ከሊንኩ ጋር ተቀድቶ ተቀድቷል!");
    }}
    className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
  >
    መዝሙሩን ከሊንኩ ጋር ቅዳ
  </button>

  {/* Email */}
  <button
    onClick={() => {
      const subject = encodeURIComponent(`የሳምንቱ መዝሙር: ${title}`);
      const body = encodeURIComponent(
        `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`
      );

      window.location.href = `mailto:zerbisrat@gmail.com?subject=${subject}&body=${body}`;
    }}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-center"
  >
    በኢሜይል ላክ
  </button>

  {/* Telegram */}
  <button
    onClick={() => {
      const fullText = `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`;
      const telegramURL =
        "https://t.me/share/url?url=" +
        encodeURIComponent(link) +
        "&text=" +
        encodeURIComponent(fullText);

      window.open(telegramURL, "_blank");
    }}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
  >
    ወደ Telegram ላክ
  </button>

</div>

    </div>
  );
}
