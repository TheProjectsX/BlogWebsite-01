import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ShowPassIcon from "../icons/showPass.png";
import HidePassIcon from "../icons/hidePass.png";

const AuthorSignup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAbout, setUserAbout] = useState("");

  const [showPass, setShowPass] = useState(false);

  const handleSignup = () => {
    toast.success("Signup Complete!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const userData = {
      userImg: "",
      username,
      email,
      password,
      userAbout,
      post: "Writer"
    };
    localStorage.setItem("authData", JSON.stringify(userData));
    navigate("/account/login");
  };

  return (
    <div className="flex flex-col items-center lg:w-2/3">
      <h1 className="text-3xl font-['Acme',sans-serif] mb-6 xl:mb-10">
        Create new Account!
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
        className="gap-6 xl:gap-8 flex flex-col w-2/3 md:w-1/2"
      >
        <label className="relative">
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md py-2 px-3 w-full dark:bg-gray-900 "
            onFocus={(e) =>
              e.target.nextElementSibling.classList.add(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              )
            }
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== "") return;
              e.target.nextElementSibling.classList.remove(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              );
            }}
            minLength={5}
            required
          />
          <p className="absolute top-2 left-3 group-focus:text-red-500 transition duration-200 px-1 cursor-text">
            Full Name *
          </p>
        </label>
        <label className="relative">
          <input
            type="email"
            className="border-2 border-gray-500 rounded-md py-2 px-3 w-full dark:bg-gray-900 "
            onFocus={(e) =>
              e.target.nextElementSibling.classList.add(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              )
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== "") return;
              e.target.nextElementSibling.classList.remove(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              );
            }}
            required
          />
          <p className="absolute top-2 left-3 group-focus:text-red-500 transition duration-200 px-1 cursor-text">
            Email *
          </p>
        </label>
        <label className="relative">
          <input
            type={showPass ? "text" : "password"}
            className="border-2 border-gray-500 rounded-md py-2 px-3 w-full dark:bg-gray-900 pr-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) =>
              e.target.nextElementSibling.classList.add(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              )
            }
            onBlur={(e) => {
              if (e.target.value !== "") return;
              e.target.nextElementSibling.classList.remove(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              );
            }}
            minLength={5}
            required
          />
          <p className="absolute top-2 left-3 group-focus:text-red-500 transition duration-200 px-1 cursor-text">
            Password *
          </p>
          <img
            src={showPass ? ShowPassIcon : HidePassIcon}
            alt="Show Hide Pass"
            className="w-7 absolute right-2 top-2.5 bg-white rounded-full cursor-pointer"
            onClick={() => {
              showPass ? setShowPass(false) : setShowPass(true);
            }}
          />
        </label>
        <label className="relative">
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md py-2 px-3 w-full dark:bg-gray-900 "
            onFocus={(e) =>
              e.target.nextElementSibling.classList.add(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              )
            }
            value={userAbout}
            onChange={(e) => setUserAbout(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== "") return;
              e.target.nextElementSibling.classList.remove(
                "transform",
                "-translate-y-[1.4rem]",
                "bg-white",
                "dark:bg-gray-900"
              );
            }}
          />
          <p className="absolute top-2 left-3 group-focus:text-red-500 transition duration-200 px-1 cursor-text">
            About Yourself
          </p>
        </label>
        <button type="sumit" className="w-full border-2 border-primary bg-primary text-white p-2 text-lg rounded-md font-bold hover:border-black hover:bg-black active:bg-white active:text-black">
          Sign Up
        </button>
      </form>
      <h3 className="py-7 text-lg">
        Have an Account?{" "}
        <Link
          to="/account/login"
          className="font-semibold text-primary hover:text-black dark:hover:text-white cursor-pointer"
        >
          Login Now!
        </Link>
      </h3>
    </div>
  );
};

export default AuthorSignup;
