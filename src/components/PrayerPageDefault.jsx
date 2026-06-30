import React from "react";
import { highlightText } from "../utils/highlight";

export default function PrayerPageDefault({
  title,
  subtitle,
  sections,
  link,
}) {
  const lyricsText = sections.map((s) => s.text).join("\n\n");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-500 dark:from-gray-900 dark:to-gray-800 py-5 px-2 mt-6">
      <div className="max-w-3xl mx-auto bg-sky-100 dark:bg-gray-800 shadow-xl rounded-xl p-8">

        {/* Title */}
        <h1 className="text-center text-3xl font-bold dark:text-gray-100 mb-2">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 dark:text-gray-200">
            {subtitle}
          </h2>
        )}
         <div className="mt-6 bg-white/50 flex justify-center dark:bg-gray-700 p-6 rounded-xl shadow-lg">
          <p
            className="text-lg leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: highlightText(lyricsText).replace(/\n/g, "<br/>"),
            }}
          />
        </div>

        {/* Always show video */}
        <div className="mt-6 w-full flex justify-center">
          <iframe
            title={`video-${title}`}
            className="rounded-xl shadow-lg"
            width="100%"
            height="315"
            src={
              link
                .replace("youtu.be/", "www.youtube.com/embed/")
                .replace("watch?v=", "embed/")
                .split("?")[0]
            }
            allowFullScreen
          ></iframe>
        </div>

        {/* Lyrics */}
       

        {/* Share Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">

          {/* Copy Lyrics */}
          <button
            onClick={() => {
              const fullText = `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`;
              navigator.clipboard.writeText(fullText);
              alert("መዝሙሩ ከሊንኩ ጋር ተቀድቶ ተቀድቷል!");
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            መዝሙሩን ቅዳ
          </button>

          {/* Email */}
          <button
            onClick={() => {
              const subject = encodeURIComponent("Weekly Song");
              const body = encodeURIComponent(
                `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`
              );
              window.location.href = `mailto:?subject=${subject}&body=${body}`;
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
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
    </div>
  );
}
