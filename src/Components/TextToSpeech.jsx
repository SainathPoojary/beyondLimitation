import React, { useState, useEffect } from "react";
// import { SpeakerphoneIcon, StopIcon } from '@heroicons/react/solid';
import Speech from "speak-tts";

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    setSpeech(new Speech());
  }, []);

  const handleSpeak = () => {
    if (!speech) return;
    if (isSpeaking) {
      speech.cancel();
      setIsSpeaking(false);
    } else {
      speech.speak({
        text,
        onend: () => setIsSpeaking(false),
      });
      setIsSpeaking(true);
    }
  };

  return (
    <button onClick={handleSpeak}>
      {isSpeaking ? (
        <>
          {/* <StopIcon className="h-6 w-6 mr-2" /> */}
          <button
            type="button"
            className="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.8 22.6l-3.025-3.025q-.625.4-1.325.688q-.7.287-1.45.462v-2.05q.35-.125.688-.25q.337-.125.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4l18.4 18.4Zm-.2-5.8l-1.45-1.45q.425-.775.638-1.625q.212-.85.212-1.75q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137Q21 8.8 21 11.975q0 1.325-.362 2.55q-.363 1.225-1.038 2.275Zm-3.35-3.35L14 11.2V7.95q1.175.55 1.838 1.65q.662 1.1.662 2.4q0 .375-.062.738q-.063.362-.188.712ZM12 9.2L9.4 6.6L12 4Z"
              />
            </svg>
          </button>
        </>
      ) : (
        <>
          {/* <SpeakerphoneIcon className="h-6 w-6 mr-2" /> */}
          <button
            type="button"
            className="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M9.383 3.076A1 1 0 0 1 10 4v12a1 1 0 0 1-1.707.707L4.586 13H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217Zm5.274-.147a1 1 0 0 1 1.414 0A9.972 9.972 0 0 1 19 10a9.972 9.972 0 0 1-2.929 7.071a1 1 0 0 1-1.414-1.414A7.971 7.971 0 0 0 17 10a7.97 7.97 0 0 0-2.343-5.657a1 1 0 0 1 0-1.414Zm-2.829 2.828a1 1 0 0 1 1.415 0A5.983 5.983 0 0 1 15 10a5.984 5.984 0 0 1-1.757 4.243a1 1 0 0 1-1.415-1.415A3.984 3.984 0 0 0 13 10a3.983 3.983 0 0 0-1.172-2.828a1 1 0 0 1 0-1.415Z"
              />
            </svg>
          </button>
        </>
      )}
    </button>
  );
};

export default TextToSpeech;
