import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    console.log(email, password);
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log("Login Successful");
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
          let errorMessage;
          switch (error.code) {
            case "auth/user-not-found":
              errorMessage = "User not found";
              break;
            case "auth/wrong-password":
              errorMessage = "Incorrect password";
              break;
            case "auth/invalid-email":
              errorMessage = "Invalid email";
              break;
            default:
              errorMessage = "An error occurred";
          }
          // Set the errorMessage state
          setErrorMessage(errorMessage);
        });
    });
  }

  function googleAuth() {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setDoc(doc(db, "users", userCredential.user.uid), {
          registerCompleted: false,
        }).then(() => {
          console.log("Sign up successful");
          navigate("/home");
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
      if (user) {
        navigate("/home");
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log(faceio);
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);

      localStorage.setItem("userId", response.facialId);
      setErrorMessage("");
      localStorage.getItem("name") ? navigate("/home") : navigate("/register");
    } catch (error) {
      console.log(error.msg);
      // window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <button className="flex items-center mb-6 text-2xl font-bold text-black">
        BeyondLimitation.
      </button>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6 " onSubmit={handleLogIn}>
            {/* <div>
              <label
                htmlFor="email"
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button> */}
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in using Face recognition
            </button>
            <p className="text-red-400 text-center w-full mt-10">
              {errorMessage}
            </p>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <button onClick={() => navigate("/signup")}>Sign up</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
