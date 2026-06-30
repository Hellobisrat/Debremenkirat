import React from "react";
import { highlightText } from "../utils/highlight";

export default function PrayerPage({
  title,
  subtitle,
  sections,
  link,
  showEmbed,
}) {
  const lyricsText = sections.map((s) => s.text).join("\n\n");

  return (
    <div className="bg-sky-100 dark:bg-gray-800 shadow-xl rounded-xl p-6 mt-6">

      {/* Title */}
      <h1 className="text-center text-2xl font-bold dark:text-gray-100 mb-2">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <h2 className="text-lg font-semibold text-center mb-4 dark:text-gray-200">
          {subtitle}
        </h2>
      )}
      <div className="mt-6 bg-white/40 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
        <p
          className="text-lg leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: highlightText(lyricsText).replace(/\n/g, "<br/>"),
          }}
        />
      </div>

      {/* Video or Link */}
      {showEmbed ? (
        <div className="mt-4 w-full flex justify-center">
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
      ) : (
        <a
          href={link}
          rel="noopener noreferrer"
          className="text-blue-500 underline text-lg font-semibold"
        >
          የዩቲዩብ ሊንክ ክፈት
        </a>
      )}

      {/* Lyrics */}
      

      {/* SHARE BUTTONS */}
      <div className="flex flex-wrap gap-3 mt-6">

        {/* Copy Lyrics */}
        <button
          onClick={() => {
            const fullText = `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`;
            navigator.clipboard.writeText(fullText);
            alert("መዝሙሩ ተቀድቷል!");
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
          መዝሙሩን ቅዳ
        </button>

        {/* Email */}
        <button
          onClick={() => {
            const subject = encodeURIComponent("የሳምንቱ መዝሙር");
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
    const shortText = `${title}\n\nYouTube: ${link}`;
    const telegramURL =
      "https://t.me/share/url?url=" +
      encodeURIComponent(link) +
      "&text=" +
      encodeURIComponent(shortText);

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

