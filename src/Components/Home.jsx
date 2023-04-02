import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebaseConfig";
import Footer from "./Footer";
import Navbar from "./Navbar";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
// import img4 from '';

function Home() {
  const navigate = useNavigate();
  // const [initializing, setInitializing] = useState(true);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       getDoc(doc(db, "users", user.uid)).then((data) => {
  //         if (data.data()["registerCompleted"]) {
  //           setInitializing(false);
  //         } else {
  //           navigate("/register");
  //         }
  //       });
  //     } else {
  //       navigate("/");
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (initializing) return <p>Loading...</p>;

  useEffect(() => {
    document.title = "Home page";
  }, []);
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Voice Based Navigation
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Voice-based navigation on a website is useful for people with
              disabilities, such as those with visual impairments or physical
              disabilities that make it difficult to use a mouse or keyboard.
              With voice-based navigation, these users can navigate through a
              website using only their voice, which can provide a more
              accessible and inclusive browsing experience. This technology can
              also increase the speed and efficiency of browsing, making it
              easier for users to find the content they need. Overall,
              voice-based navigation can help to ensure that websites are
              accessible to a wider range of users, including those with
              disabilities.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img2}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Make Resume in minutes just by speaking!
            </h1>
            <p className="mb-8 leading-relaxed">
              Compared to traditional resume builders, a voice-based resume
              maker would offer a more streamlined and convenient user
              experience, as users could create a resume on-the-go or while
              multitasking. It could also be particularly helpful for
              individuals with disabilities or those who struggle with typing or
              written communication. Overall, a voice-based resume maker would
              be unique in its use of cutting-edge technology to provide a more
              accessible and efficient way to create a professional resume
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Blogs that not only could be read but listened also...
            </h1>
            <p className="mb-8 leading-relaxed">
              Blogs that offer both reading and listening options provide a more
              accessible and flexible experience for users. By offering audio
              versions of their content, bloggers can cater to those who prefer
              to listen rather than read, such as people with visual impairments
              or those who prefer to multitask while consuming content. This can
              also help to increase engagement and reach a wider audience.
              Overall, providing both reading and listening options can enhance
              the user experience and make content more accessible to a diverse
              range of individuals.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img3}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Upskill yourself to be relevant
            </h1>
            <p className="mb-8 leading-relaxed">
              Being relevant in a particular field is crucial for success and
              growth in one's career. It enables individuals to stay up-to-date
              with the latest trends, technologies, and industry developments,
              which is important for maintaining a competitive edge.
              Additionally, being relevant allows individuals to contribute to
              their field by sharing their knowledge, skills, and insights,
              which can lead to greater opportunities, recognition, and
              influence. Overall, staying relevant in one's field is essential
              for professional growth, personal fulfillment, and achieving
              long-term career goals.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
