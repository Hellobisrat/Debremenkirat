import { highlightText } from "../utils/highlight";

export default function PrayerPage({ title, subtitle, sections, link, showEmbed = true }) {

  const lyricsText = sections.map(s => s.text).join("\n\n");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-500 dark:from-gray-900 dark:to-gray-800 py-5 px-2">

      <div className="max-w-3xl mx-auto bg-sky-100 dark:bg-gray-800 shadow-xl rounded-xl p-8">

        <h1 className="text-center text-xl font-bold dark:text-gray-100 mb-2">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 dark:text-gray-200">
            {subtitle}
          </h2>
        )}

        <div className="space-y-6 text-xl flex flex-col items-center justify-center font-semibold leading-10 text-gray-800 dark:text-gray-200 p-2 md:p-3 md:px-6">
          {sections.map((section, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{
                __html: highlightText(section.text).replace(/\n/g, "<br/>")
              }}
            />
          ))}
        </div>

        {/* VIDEO OR LINK */}
        {link && (
          <div className="mt-6 w-full flex justify-center">
            {showEmbed ? (
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
            ) : (
              <a
                href={link}
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg font-semibold"
              >
                የዩቲዩብ ሊንክ ክፈት
              </a>
            )}
          </div>
        )}

        {/* SHARE BUTTONS */}
       <div className="flex gap-3 mt-6">

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
    const subject = encodeURIComponent("Weekly Song");
    const body = encodeURIComponent(
      `${title}\n\n${subtitle || ""}\n\n${lyricsText}\n\nYouTube: ${link}`
    );

    const mailtoURL = `mailto:zerbisrat@gmail.com?subject=${subject}&body=${body}`;

    console.log("Testing mailto:", mailtoURL); // You will see it in console

    window.location.href = mailtoURL;
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
    </div>
  );
}
