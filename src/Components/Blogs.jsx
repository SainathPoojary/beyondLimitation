import React from "react";
import FontSizeChanger from "react-font-size-changer";
import { useState, useEffect } from "react";
import TextToSpeech from "./TextToSpeech";
import datas from "../assets/blogs.json";
import { useLocation } from "react-router-dom";

function Blogs() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  const [ourText, setOurText] = useState("");
  const msg = new SpeechSynthesisUtterance();
  msg.rate = 0.8;

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };
  return (
    <div>
      <article className="max-w-5xl px-4 py-24 mx-auto space-y-12">
        <div className="w-full mx-auto space-y-4 text-center">
          {location.state.genre.map((genre_name) => (
            <button className="relative z-10 rounded-full bg-gray-300 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-300">
              {genre_name}
            </button>
          ))}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {location.state.title}
          </h1>
          <p className="text-sm text-black">
            by &nbsp;
            <span itemprop="name">{location.state.author}</span>
            &nbsp;on&nbsp;
            <time datetime="2021-02-12 15:34:18-0200">
              {location.state.date}
            </time>
          </p>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={increaseFontSize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5h-2M18 7l-5 5.07l1.41 1.43L17 10.9V17h2v-6.1l2.59 2.6L23 12.07L18 7Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={decreaseFontSize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5h-2M18 17l5-5.07l-1.41-1.43L19 13.1V7h-2v6.1l-2.59-2.6L13 11.93L18 17Z"
              />
            </svg>
          </button>
          <TextToSpeech text={location.state.text} />
        </div>

        <div className="text-black">
          <p
            className="text-justify"
            value="msg"
            id="blog-content"
            style={{ fontSize: `${fontSize}px` }}
          >
            {location.state.blog_content}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Blogs;
