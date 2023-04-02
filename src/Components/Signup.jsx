import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, db } from "../firebaseConfig";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  const [initializing, setInitializing] = useState(true);
  function signup(e) {
    console.log("hello");
    e.preventDefault();
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setDoc(doc(db, "users", userCredentials.user.uid), {
            registerCompleted: false,
          }).then(() => {
            console.log("Sign up successful");
            navigate("/register");
          });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("The email address you entered is already in use.");
          } else if (error.code === "auth/invalid-email") {
            setErrorMessage("The email address you entered is not valid.");
          } else if (error.code === "auth/weak-password") {
            setErrorMessage("The password you entered is not strong enough.");
          } else {
            console.log(error);
            setErrorMessage("An error occurred. Please try again later.");
          }
        });
    });
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let response = await faceio.enroll({
        locale: "auto",
        password: false,
        payload: {
          email: email,
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
      localStorage.setItem("userId", response.facialId);
      navigate("/register");
    } catch (error) {
      console.log(error);
    }
  };

  function googleAuth() {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log("Google auth successful");
        setDoc(doc(db, "users", userCredential.user.uid), {
          registerCompleted: false,
        }).then(() => {
          console.log("Sign up successful");
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [faceio, setFaceio] = useState();

  useEffect(() => {
    setFaceio(window.faceIO);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        console.log(user.uid);
        getDoc(doc(db, "users", user.uid)).then((data) => {
          console.log(data.data());
          if (data.data()["registerCompleted"]) {
            navigate("/");
          } else {
            navigate("/register");
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <button className="flex items-center mb-6 text-2xl font-bold text-black">
        BeyondLimitation.
      </button>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            {/* <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div> */}
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <button onClick={() => navigate("/")}>Sign in</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
