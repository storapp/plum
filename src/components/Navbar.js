/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NavLink } from "react-router-dom";
import {
  //WrenchScrewdriverIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import facebook from "../logo/facebook.jpg";
import twitter from "../logo/twitter.png";
import google from "../logo/google.jpg";
import linkedin from "../logo/linkedin.png";

const Navbar = () => {
  return (
    <header>
      <div className="flex">
        <div className="bg-blue-500 w-1/3 p-3 flex items-center px-5">
          <span className="text-white font-bold text-[13px] md:text-[18px] company">
            Cape Estates Plumbing
          </span>
        </div>
        <div className="bg-paleBlue w-2/3 p-3 flex justify-end items-center md:pr-20">
          <div className="flex space-x-3">
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={facebook} alt="facebook logo" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={twitter} alt="twitter logo" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={google} alt="google logo" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="circle" src={linkedin} alt="linkedin logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center py-2 px-3 md:px-10 bg-white">
        <div className="md:flex md:flex-col items-baseline hidden ">
          <NavLink to="/" className="link flex items-center">
            <span className="md:text-2xl mx-2 text-blue-900 font-bold">
              Cape Estates Plumbing
            </span>
          </NavLink>
          <p className="text-sm">Proudly a B-BBEE Level 1 Contributor</p>
        </div>
        <div className="flex md:space-x-20 space-x-5">
          <div className="flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
              <EnvelopeIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold">Email us</p>
              <a href="mailto:info@noels.co.za" className="text-sm grey">
                capeestates@mail.com
              </a>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
              <PhoneIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold">Call us on</p>
              <a href="tel:+27687146610" className="text-sm grey">
                0687146610
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="flex justify-center md:justify-between md:container items-center
        bg-paleBlue px-3  md:pr-0
       text-white mx-auto text-[12px] md:text-[15px] font-bold"
      >
        <ul className="flex space-x-4 md:space-x-10  md:mx-3 py-6">
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          <li>
            <NavLink className="link" to="/about">
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/projects">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/message">
              Get Qoute
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/message"
          className="hidden md:block hover:opacity-90 
        active:bg-blue-700 bg-blue-500 px-3 py-6"
        >
          CONTACT US
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
