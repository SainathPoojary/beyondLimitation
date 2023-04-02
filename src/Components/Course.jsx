import React from "react";
import datas from "../assets/courses.json";
import { useLocation, useNavigate } from "react-router-dom";

function Course() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <iframe
            className="mb-3"
            width="560"
            height="315"
            src={location.state.embed_link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="text-center lg:w-2/3 w-full">
            <a
              href="#"
              className="title-font sm:text-4xl text-3xl font-medium text-gray-900 text-bold"
              aria-label={`${location.state.name}`}
            >
              {location.state.name}
            </a>
            <br />
            <a
              href="#"
              className="mt-5 leading-relaxed text-3xl "
              aria-label={`${location.state.desc}`}
            >
              {location.state.desc}
            </a>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => navigate("/coursepage")}
              >
                Marked as done!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Course;
