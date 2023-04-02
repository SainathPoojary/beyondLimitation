import React from "react";
import { BsFillTelephoneFill, BsStars } from "react-icons/bs";
import { BiHandicap } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import helloImage from "../assets/helloImage.png";

function UserInput() {
  return (
    <div className="flex w-full justify-between h-[100vh]">
      <div className="p-28">
        <h1 className="font-medium text-5xl">Sainath Poojary</h1>
        <h2 className="text-xl font-medium mt-1 text-gray-500">
          Computer Engineer
        </h2>
        <div className="mt-20">
          <p className="text-lg  mt-2">
            <BsFillTelephoneFill className="inline mr-2" /> +91 9359149731
          </p>
          <p className="text-lg  mt-2">
            <MdOutlineAlternateEmail className="inline mr-2" />{" "}
            sainath@gmail.com
          </p>
          <p className="text-lg  mt-2">
            <BiHandicap size={25} className="inline mr-1" /> Blind
          </p>
          <p className="text-lg mt-2">
            <BsStars size={25} className="inline mr-1" /> Skills:
            <ul className="list-disc ml-12">
              <li>Singer</li>
              <li>Typist</li>
              <li>Musicians</li>
              <li>StoryTelling</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="self-end">
        <img src={helloImage} alt="Illustration greeting hello" />
      </div>
    </div>
  );
}

export default UserInput;
