// import logo from './logo.svg';
import "../App.css";
import "./Resume.css";
import { FaPhone } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
// import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
// import TextToSpeech from './TextToSpeech';
import Speech from "speak-tts";
import Navbar from "./Navbar";
import { jsPDF } from "jspdf";

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import b_d from './images/b_d.png';
// import d_d from './images/d_d.jpg';
// import b_i from './images/b_i.png';
// import m_c from './images/m_c.png';
// import p_m from './images/p_m.png';
// import c_s from './images/c_s.png';
// import home1 from './images/home1.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';
const SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;

const recognition = new SpeechRecognition();
// const recognitionList = new SpeechGrammarList()

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// function Navbar()
// {
//     return(
//         <nav className="navbar">
//             {/* <img className="logo" src="simple.jpg" width="70px" alt="logo"></img> */}
//             <div className="name">Normal.</div>
//             <ul className="nav-menu">
//             <li className="nav-item"><a href="#jobs">Jobs</a></li>
//             <li className="nav-item"><a href="#companies">Companies</a></li>
//             <li className="nav-item"><a href="#aboutus">About Us</a></li>
//             <li className="nav-item"><a href="#contact">Contacts</a></li>

//             </ul>
//             <button className="nav-btn">Sign in</button>

//         </nav>

//     )
// }

function ResumeMaker() {
  const [uname, setName] = useState("");
  const [qual, setQual] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [achieves, setAchieves] = useState("");
  const [interests, setInterests] = useState("");
  const [disability, setDisabilities] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = useState("");

  function mic(field) {
    recognition.start();
    recognition.onresult = (event) => {
      //handle result in here
      let word = event.results[0][0].transcript;
      switch (field) {
        case "name":
          setName(word);
          break;
        case "qualification":
          setQual(word);
          break;
        case "hobby":
          setHobbies(word);
          break;
        case "achievements":
          setAchieves(word);
          break;
        case "interest":
          setInterests(word);
          break;
        case "disability type":
          setDisabilities(word);
          break;
        case "email id":
          setEmail(word);
          break;
        case "contact number":
          setContact(word);
          break;
        default:
          return null;
      }
    };
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function start_mic() {
    var fields = [
      "name",
      "qualification",
      "hobby",
      "achievements",
      "interest",
      "disability type",
      "email id",
      "contact number",
    ];
    for (let field of fields) {
      let speak = "What is your " + field + "?";
      var msg = new SpeechSynthesisUtterance();

      msg.text = speak;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
      mic(field);
      await delay(7000);
    }
  }

  useEffect(() => {
    delay(3000).then(() => {
      start_mic();
    });
  }, []);

  const resume_preview_ref = useRef();

  const handleGeneratePDF = (event) => {
    event.preventDefault();
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    doc.html(resume_preview_ref.current, {
      callback(doc) {
        doc.save(uname + "-resume");
      },
    });
  };
  return (
    <div className="resume_maker_container">
      <p className="text-4xl font-bold text-center">Create your resume here</p>
      <div id="input_fields_container">
        <form>
          <h3 className="input_labels">Name</h3>
          <h3 className="input_labels" style={{ marginLeft: "47%" }}>
            Qualifications
          </h3>
          <br></br>
          <input
            type="text"
            className="inputs"
            id="first_name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            onClick={() => mic("name")}
            value={uname}
          />
          <input
            type="text"
            className="inputs"
            id="last_name"
            onChange={(e) => {
              setQual(e.target.value);
            }}
            onClick={() => mic("qualification")}
            value={qual}
          />

          <h3 className="input_labels">Hobbies</h3>
          <h3 className="input_labels" style={{ marginLeft: "45%" }}>
            Achievements
          </h3>
          <br></br>
          <input
            type="text"
            className="inputs"
            id="first_name"
            onChange={(e) => {
              setHobbies(e.target.value);
            }}
            onClick={() => mic("hobby")}
            value={hobbies}
          />
          <input
            type="text"
            className="inputs"
            id="last_name"
            onChange={(e) => {
              setAchieves(e.target.value);
            }}
            onClick={() => mic("achievments")}
            value={achieves}
          />

          <h3 className="input_labels">Interested in</h3>
          <h3 className="input_labels" style={{ marginLeft: "42.2%" }}>
            Disability Type
          </h3>
          <br></br>
          <input
            type="text"
            className="inputs"
            id="first_name"
            onChange={(e) => {
              setInterests(e.target.value);
            }}
            onClick={() => mic("interest")}
            value={interests}
          />
          <input
            type="text"
            className="inputs"
            id="last_name"
            onChange={(e) => {
              setDisabilities(e.target.value);
            }}
            onClick={() => mic("disability type")}
            value={disability}
          />
          <br></br>

          <h3 className="input_labels">Email</h3>
          <h3 className="input_labels" style={{ marginLeft: "47.5%" }}>
            Contact No
          </h3>
          <br></br>
          <input
            type="text"
            className="inputs"
            id="first_name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onClick={() => mic("email id")}
            value={email}
          />
          <input
            type="text"
            className="inputs"
            id="last_name"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            onClick={() => mic("contact number")}
            value={contact}
          />

          <input type="submit" id="submit_btn" />
          <button
            className="bg-blue-600 p-1.5 text-white rounded-md ml-1'"
            onClick={handleGeneratePDF}
          >
            Generate PDF
          </button>
        </form>
      </div>
      <div id="preview_container">
        <h1 className="text-center text-2xl bg-blue-600 rounded-sm text-white">
          {uname}
        </h1>
        <div id="details_div">
          <p>Qualifications: {qual}</p>
          <p>Hobbies: {hobbies}</p>
          <br />
          <p>Achievements: {achieves}</p>
          <p>Interested in: {interests}</p>
          <br />
          <p>Disability Type: {disability}</p>
          <p>Email: {email}</p>
          <p>Contact No: {contact}</p>
        </div>
      </div>
    </div>
  );
}

function ResumeMakers() {
  return (
    <div>
      <Navbar />
      <ResumeMaker />
    </div>
  );
}
export default ResumeMakers;
// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const App = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//     </div>
//   );
// };
// export default App;
