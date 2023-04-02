import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

const TTS = () => {
  const scrollDown = () => {
    const currentPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const remainingHeight = documentHeight - (currentPosition + windowHeight);
    const scrollAmount = Math.min(remainingHeight, windowHeight);
    window.scrollTo({
      top: currentPosition + scrollAmount,
      behavior: "smooth",
    });
  };
  const scrollUp = () => {
    const currentPosition = window.scrollY;
    const scrollAmount = Math.max(-currentPosition, -window.innerHeight);
    window.scrollTo({
      top: currentPosition + scrollAmount,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "shut up",
      callback: () => setMessage("I wasn't talking."),
    },
    {
      command: "Go to home",
      callback: () => navigate("/home", { replace: true }),
    },
    {
      command: "open home",
      callback: () => navigate("/home", { replace: true }),
    },
    {
      command: "Go to job portal",
      callback: () => navigate("/jobportal", { replace: true }),
    },
    {
      command: "open job portal",
      callback: () => navigate("/jobportal", { replace: true }),
    },
    {
      command: "Go to resume maker",
      callback: () => navigate("/resume", { replace: true }),
    },
    {
      command: "open resume maker",
      callback: () => navigate("/resume", { replace: true }),
    },
    {
      command: "Go to blogs",
      callback: () => navigate("/blogpage", { replace: true }),
    },
    {
      command: "open blogs",
      callback: () => navigate("/blogpage", { replace: true }),
    },
    {
      command: "Go to courses",
      callback: () => navigate("/coursepage", { replace: true }),
    },
    {
      command: "open courses",
      callback: () => navigate("/coursepage", { replace: true }),
    },
    {
      command: "course",
      callback: () => navigate("/coursepage", { replace: true }),
    },
    {
      command: "find a course",
      callback: () => navigate("/coursepage", { replace: true }),
    },
    {
      command: "Go to grievance system",
      callback: () => navigate("/grievance", { replace: true }),
    },
    {
      command: "open grievance system",
      callback: () => navigate("/grievance", { replace: true }),
    },
    {
      command: "I want to complain",
      callback: () => navigate("/grievance", { replace: true }),
    },
    {
      command: "register a complain",
      callback: () => navigate("/grievance", { replace: true }),
    },
    {
      command: "find a job",
      callback: () => navigate("/jobportal", { replace: true }),
    },
    {
      command: "make a resume",
      callback: () => navigate("/resume", { replace: true }),
    },
    {
      command: "I want to read",
      callback: () => navigate("/blog", { replace: true }),
    },
    {
      command: "Read blogs",
      callback: () => navigate("/blog", { replace: true }),
    },
    {
      command: "scroll to bottom",
      callback: () => window.scrollTo({ behavior: "smooth", top: 2000 }),
    },
    {
      command: "scroll bottom",
      callback: () => window.scrollTo({ behavior: "smooth", top: 2000 }),
    },
    {
      command: "scroll top",
      callback: () => window.scrollTo({ behavior: "smooth", top: 0 }),
    },
    {
      command: "scroll to top",
      callback: () => window.scrollTo({ behavior: "smooth", top: 0 }),
    },
    {
      command: "scroll down",
      callback: () => scrollDown(),
    },
    {
      command: "scroll up",
      callback: () => scrollUp(),
    },
    {
      command: "scroll to bottom",
      callback: () => window.scrollTo({ behavior: "smooth", top: 2000 }),
    },
    {
      command: "scroll bottom",
      callback: () => window.scrollTo({ behavior: "smooth", top: 2000 }),
    },
    {
      command: "scroll top",
      callback: () => window.scrollTo({ behavior: "smooth", top: 0 }),
    },
    {
      command: "scroll to top",
      callback: () => window.scrollTo({ behavior: "smooth", top: 0 }),
    },
    {
      command: "scroll down",
      callback: () => scrollDown(),
    },
    {
      command: "scroll up",
      callback: () => scrollUp(),
    },
  ];
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };
  return (
    <div>
      <div>
        {/* <span>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span> */}
        <div>
          <button
            className="mr-3 inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0"
            aria-label="to start navigation press listen button"
            type="button"
            onClick={listenContinuously}
          >
            Listen
          </button>
          <button
            className="mr-3 inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0"
            aria-label="to reset navigation press reset button"
            bg-blue-500
            type="button"
            onClick={resetTranscript}
          >
            Reset
          </button>
          <button
            className="mr-3 inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0"
            aria-label="to stop navigation press stop button"
            type="button"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
        </div>
      </div>
      <div>{message}</div>
      <div>
        <span>{transcript}</span>
      </div>
    </div>
  );
};

export default TTS;
