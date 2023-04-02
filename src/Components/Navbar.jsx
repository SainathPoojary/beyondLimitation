import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import TTS from "./TTS";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
    });
  });
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="40"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="bcb773a0ad">
                <path
                  d="M 187.5 0 C 83.945312 0 0 83.945312 0 187.5 C 0 291.054688 83.945312 375 187.5 375 C 291.054688 375 375 291.054688 375 187.5 C 375 83.945312 291.054688 0 187.5 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="4d8604e52b">
                <path
                  d="M 122 55.449219 L 168 55.449219 L 168 101 L 122 101 Z M 122 55.449219 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="75f65c7ec2">
                <path
                  d="M 69.148438 165 L 233 165 L 233 319.449219 L 69.148438 319.449219 Z M 69.148438 165 "
                  clip-rule="nonzero"
                />
              </clipPath>
            </defs>
            <path
              fill="#ffffff"
              d="M 0 0 L 374.414062 0 L 374.414062 374.414062 L 0 374.414062 Z M 0 0 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <g clip-path="url(#bcb773a0ad)">
              <rect
                x="-37.5"
                width="450"
                fill="#197aca"
                y="-37.499999"
                height="449.999989"
                fill-opacity="1"
              />
            </g>
            <path
              fill="#ffffff"
              d="M 303.253906 244.242188 C 300.101562 240.117188 294.207031 239.3125 290.0625 242.449219 L 276.109375 253.050781 L 276.933594 251.152344 L 242.59375 189.773438 C 240.070312 185.273438 235.304688 182.484375 230.140625 182.484375 L 172.480469 182.484375 L 172.480469 184.785156 L 172.164062 171.722656 L 212.34375 171.722656 C 215.695312 171.722656 218.730469 170.363281 220.925781 168.167969 C 223.121094 165.976562 224.484375 162.945312 224.484375 159.601562 C 224.484375 152.917969 219.046875 147.484375 212.34375 147.484375 L 171.582031 147.484375 L 171.050781 126.015625 C 170.894531 119.570312 168.179688 113.777344 163.882812 109.589844 C 159.589844 105.40625 153.71875 102.832031 147.257812 102.832031 C 135.007812 102.832031 125.152344 112.921875 125.449219 125.152344 L 127.179688 196.34375 C 127.480469 208.339844 137.300781 217.914062 149.3125 217.914062 L 225.882812 217.914062 L 226.234375 215.703125 L 263.75 281.472656 L 300.824219 257.851562 C 303.660156 256.058594 305.175781 253.019531 305.175781 249.929688 C 305.175781 247.945312 304.550781 245.953125 303.253906 244.242188 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <g clip-path="url(#4d8604e52b)">
              <path
                fill="#ffffff"
                d="M 145.242188 100.066406 C 157.59375 100.066406 167.617188 90.070312 167.617188 77.738281 C 167.617188 65.402344 157.59375 55.40625 145.242188 55.40625 C 132.886719 55.40625 122.863281 65.402344 122.863281 77.738281 C 122.863281 90.070312 132.886719 100.066406 145.242188 100.066406 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g clip-path="url(#75f65c7ec2)">
              <path
                fill="#ffffff"
                d="M 209.796875 231.914062 C 209.964844 233.6875 210.046875 235.484375 210.046875 237.292969 C 210.046875 269.109375 184.125 294.992188 152.253906 294.992188 C 120.386719 294.992188 94.453125 269.109375 94.453125 237.292969 C 94.453125 220.527344 101.648438 205.417969 113.125 194.871094 L 112.402344 165.371094 C 87.078125 179.402344 69.910156 206.378906 69.910156 237.292969 C 69.910156 282.621094 106.84375 319.492188 152.253906 319.492188 C 191.5 319.492188 224.417969 291.953125 232.628906 255.203125 L 219.347656 231.914062 L 209.796875 231.914062 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <span
            className="ml-3 text-xl"
            onClick={() => {
              navigate("/home");
            }}
          >
            BeyondLimitation
          </span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">First Link</a> */}
          <button
            className="mr-5"
            aria-label="Click here to go to Job portal"
            onClick={() => navigate("/home")}
          >
            Job Portal
          </button>
          <br />
          <button
            className="mr-5"
            aria-label="Click here to go to resume maker"
            onClick={() => navigate("/resume")}
          >
            Resume Maker
          </button>
          <br />
          <button
            className="mr-5"
            aria-label="This is blogpage"
            onClick={() => navigate("/blogpage")}
          >
            Blogs
          </button>
          <br />
          <button
            className="mr-5"
            aria-label="This is for courses"
            onClick={() => navigate("/coursepage")}
          >
            Courses
          </button>
          <br />
          <button
            className="mr-5"
            aria-label="This is grievance page"
            onClick={() => navigate("/grievance")}
          >
            Grievenace System
          </button>
          <button
            className="mr-5"
            aria-label="This is about page"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <br />

          {/* <a className="mr-5 hover:text-gray-900">Second Link</a> */}
          {/* <a className="mr-5 hover:text-gray-900">Third Link</a> */}
          {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <TTS />
        <button
          aria-label="to logout press logout"
          onClick={
            localStorage.getItem("userId")
              ? () => {
                  localStorage.removeItem("userId");
                  window.location.href = "/";
                }
              : () => {
                  window.location.href = "/";
                }
          }
          className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base text-white mt-4 md:mt-0"
        >
          {localStorage.getItem("userId") ? "Logout" : "Login"}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
