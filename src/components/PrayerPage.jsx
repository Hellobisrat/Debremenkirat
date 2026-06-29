import { highlightText } from "../utils/highlight";

export default function PrayerPage({ title, subtitle, sections }) {

  const lyricsText = sections.map(s => s.text).join("\n\n");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-500 dark:from-gray-900 dark:to-gray-800 py-5 px-2">

      <div className="max-w-3xl mx-auto bg-sky-100 dark:bg-gray-800 shadow-xl rounded-xl p-8">

        <h1 className="text-center text-3xl font-bold dark:text-gray-100 mb-2">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 dark:text-gray-200">
            {subtitle}
          </h2>
        )}

        {/* FULL LYRICS ON ONE PAGE */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center min-h-[300px]">
          <p
            className="text-2xl font-semibold leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: highlightText(lyricsText).replace(/\n/g, "<br/>")
            }}
          />
        </div>

      </div>
    </div>
  );
}
