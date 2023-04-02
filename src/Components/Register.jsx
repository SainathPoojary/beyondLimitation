import React, { useEffect } from "react";
import { useState } from "react";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const [getRegistartionFormInputs, setRegistrationFormInputs] = useState({
    name: "",
    contact: "",
    disability: "Visual",
    disabilityPercentage: 50,
    skills: [],
  });
  const [getSliderVal, setSliderval] = useState(50);
  const [unsubscriber, setUnsubscriber] = useState(() => {
    console.log("default unsub called");
  });
  const onSilderChange = (event) => {
    setSliderval(event.target.value);
  };

  const getInputs = (event) => {
    if (
      event.target.name === "disability" ||
      event.target.name === "disabilityPercentage" ||
      event.target.name === "skill"
    ) {
      const getRegistartionFormInputsCopy = { ...getRegistartionFormInputs };
      if (event.target.name === "disability")
        getRegistartionFormInputsCopy.disability = event.target.value;
      else if (event.target.name === "disabilityPercentage")
        getRegistartionFormInputsCopy.disabilityPercentage = getSliderVal;
      else {
        event.target.checked
          ? getRegistartionFormInputsCopy.skills.push(event.target.value)
          : (getRegistartionFormInputsCopy.skills =
              getRegistartionFormInputsCopy.skills.filter(
                (skill) => skill !== event.target.value
              ));
      }
      setRegistrationFormInputs(getRegistartionFormInputsCopy);
    } else
      setRegistrationFormInputs(() => ({
        ...getRegistartionFormInputs,
        [event.target.name]: event.target.value,
      }));
  };

  const registerUser = (e) => {
    e.preventDefault();
    console.log("Called");
    console.log(getRegistartionFormInputs);
    const unsub = onAuthStateChanged(auth, (user) => {
      setDoc(doc(db, "users", user.uid), {
        ...getRegistartionFormInputs,
        registerCompleted: true,
      })
        .then(() => {
          console.log("Data uploaded", user);
          navigate("/");
        })
        .catch((err) => console.log(err));
    });

    setUnsubscriber(unsub);
  };

  function register(e) {
    e.preventDefault();
    for (const key in getRegistartionFormInputs) {
      localStorage.setItem(key, getRegistartionFormInputs[key]);
    }
    navigate("/home");
  }

  useEffect(() => {
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
      <div className="w-full bg-blue-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Register Here for free!
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={register}>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name:
              </label>
              <input
                type="string"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
                required=""
                onChange={getInputs}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Contact Number:
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={getInputs}
              />
            </div>

            {/*  Add dropdown list */}
            <div className="relative inline-block text-left">
              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">
                  Select your disability type
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  name="disability"
                  onChange={getInputs}
                >
                  <option value="Visula">Visual</option>
                  <option value="partial-handicap">Auditory</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="customRange1" className="form-label">
                Disability Percentage {`${getSliderVal}%`}
              </label>
              <input
                type="range"
                className="form-range"
                id="customRange1"
                value={getSliderVal}
                min={0}
                max={100}
                onChange={onSilderChange}
              />
              <label htmlFor="inputState" className="form-label"></label>
            </div>

            <div className="flex items-center mb-4">
              <p className="text-gray-900"> Skills:</p>&nbsp;&nbsp;
              <input
                id="default-checkbox"
                type="checkbox"
                value="technical"
                onChange={getInputs}
                name="skill"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Technical
              </label>
              &nbsp;&nbsp;
              <input
                id="default-checkbox"
                type="checkbox"
                value="cooking"
                onChange={getInputs}
                name="skill"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Cooking
              </label>
              &nbsp;&nbsp;
              <input
                id="default-checkbox"
                type="checkbox"
                value="teaching"
                onChange={getInputs}
                name="skill"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Teaching
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-800">
              Already have an account?{" "}
              <button onClick={() => navigate("/")}>Login here</button>
            </p>
          </form>
        </div>
      </div>
      {/* Remove this after authentication */}
      <button onClick={() => navigate("/home")}>Home</button>
    </div>
  );
}

export default Register;
