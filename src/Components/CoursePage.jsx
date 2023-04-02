import React from "react";
import datas from "../assets/courses.json";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import CPPImg from "../assets/user-dummy.jpeg";

import Footer from "./Footer";

function CoursePage() {
  const navigate = useNavigate();
  const images = [
    "https://contentstatic.techgig.com/photo/90325682.cms",
    "https://www.tableau.com/sites/default/files/2022-05/Products_Server_Intro.png",
    "https://hello-amigo-production.s3.amazonaws.com/blog_articles/images/000/000/008/original/HA_Blog_Graphic_Dec19_Blog.png?1575606988",
    "https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header-1200.png",
    "https://www.protocol.com/media-library/figma-logo.png?id=29208385&width=1200&height=600&coordinates=0%2C60%2C0%2C60",
    "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/05174400/Types-of-Digital-Marketing.png",
    "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/what-is-data-analyst.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/5e7cce1921695a000666cc29/Java-14/960x0.jpg?format=jpg&width=960",
    "https://5.imimg.com/data5/QK/RN/TK/GLADMIN-18068202/selection-035-500x500.png",
  ];
  const alts = [
    "c programming",
    "tableau specialist",
    "marketing 101",
    "Graphics Designing",
    "Figma basic",
    "Digital Marketing",
    "Analyst",
    "Java Programming",
    "Electrical Engineering 101",
  ];
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-19 mx-auto">
          <p className="text-4xl font-semibold text-center text-black py-6">
            Courses based on your interests and qualification..
          </p>
          <div className="flex flex-wrap -m-4">
            {datas.map((data, index) => (
              <div className="p-4 md:w-1/3" aria-label={data.category}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={images[index]}
                    alt={alts[index]}
                  />
                  <div className="p-6">
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      aria-label={data.category}
                    >
                      {data.category}
                    </h2>
                    <a
                      href="#"
                      className="title-font text-lg font-medium text-gray-900 mb-3"
                      aria-label={data.name}
                    >
                      {data.name}
                    </a>
                    <p className="leading-relaxed mb-3" aria-label="heyy">
                      {data.desc}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        aria-label={`click here to learn more about ${data.name}`}
                        href={data.link}
                        onClick={() => {
                          navigate("/course", { state: data });
                        }}
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default CoursePage;
