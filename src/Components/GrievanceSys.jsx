import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import Footer from "./Footer";
import Navbar from "./Navbar";

function GrievanceSys() {
  const [text, setText] = useState("");

  function handleSubmit() {
    console.log("Called");

    if (text) {
      console.log("Working");
      addDoc(collection(db, "grievances"), {
        text,
        userId: auth.currentUser.uid,
      }).then(() => {
        console.log("Done");

        setText("");
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center h-[76vh]">
        <div className="flex flex-col justify-center items-center">
          <a
            href="#"
            className="text-3xl mb-5 font-bold"
            aria-label="Grievances"
          >
            Grievances{" "}
          </a>
          <a
            href="#"
            className="text-m mb-5"
            aria-label="If you face any problem in public spaces, don't worry we will be the voice for you"
          >
            If you face any problem in public spaces, don't worry we will be the
            voice for you!{" "}
          </a>
          <textarea
            cols="45"
            rows="5"
            className="bg-slate-100 mb-5 p-5"
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Enter your message"
          ></textarea>
          <button
            className="bg-blue-500 text-white px-8 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GrievanceSys;
