import { useState } from "react";
import { highlightText } from "../utils/highlight";

export default function PrayerPage({ title, subtitle, sections }) {

  const lyricsText = sections.map(s => s.text).join("\n\n");

  // Split lyrics into slides
  const slides = lyricsText.split(/\n\s*\n/);
  const [slideIndex, setSlideIndex] = useState(0);

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

        {/* PPT Slide */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center min-h-[300px] flex items-center justify-center">
          <p
            className="text-2xl font-semibold leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: highlightText(slides[slideIndex]).replace(/\n/g, "<br/>")
            }}
          />
        </div>

        {/* Slide Navigation */}
        <div className="flex justify-between mt-4">
          <button
            disabled={slideIndex === 0}
            onClick={() => setSlideIndex(slideIndex - 1)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg disabled:opacity-40"
          >
            የቀድሞው
          </button>

          <button
            disabled={slideIndex === slides.length - 1}
            onClick={() => setSlideIndex(slideIndex + 1)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg disabled:opacity-40"
          >
            የሚቀጥለው
          </button>
        </div>

      </div>
    </div>
  );
}
