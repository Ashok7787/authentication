import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
const productLinks = [
  {
    href: "/referral-program",
    label: "Referral Program",
  },
  {
    href: "/list-your-project-token",
    label: "Project Listing",
  },
];

const ServicesLinks = [
  {
    href: "/",
    label: "Academy",
  },
  {
    href: "/",
    label: "P2P Trading Guides",
  },
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/",
    label: "Support Portal",
  },
  {
    href: "/",
    label: "Contact Us",
  },
];

const Footers = (props) => {
  const [dark,setDark]= useState(props.darkMode);
  return (
    <div className={`${dark ? "bg-slate-700" : "bg-blue-800"} border-t lg:p-0 p-2`}>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {/* logo */}
        <div className="grid gap-4 py-10 px-6 md:border-r border-[#23262f]">
          <div>
            <Link href={"/"}>
              <img src={Logo} height={52} width={170} alt="Logo" />
            </Link>
          </div>
          <h2 className="-mt-8 text-2xl font-bold ">
            Let&apos;s talk! 🤙
          </h2>
          <ul className=" text-[#b1b5c3] grid gap-2">
            {/* <li>
                <p>+12 345 678 9101</p>
              </li> */}
            <li>
              <a href="mailto:info@dp2p.cc">
                <p className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.55em"
                    style={{ fill: "#337eff" }}
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                  new@123.cc
                </p>
              </a>
            </li>
            <li>
              <p className="flex flex-row gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.55em"
                  style={{ fill: "#0587eb" }}
                  viewBox="0 0 496 512"
                >
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                </svg>
                @newone
              </p>
            </li>
          </ul>
        </div>

        {/* Links  */}
        <div className=" grid grid-cols-[auto_auto] gap-20 py-10  md:justify-center items-center w-full   xl:border-r border-[#23262f]">
          <div className="grid gap-4">
            <h2 className=" text-sm font-bold tracking-[.7px] uppercase">
              SERVICES
            </h2>
            <ul className=" grid gap-2">
              {productLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="hover:text-blue-500 duration-300 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid gap-4">
            <h2 className=" text-sm font-bold tracking-[.7px] uppercase">
              Usefull Link
            </h2>
            <ul className=" grid gap-2">
              {ServicesLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="hover:text-blue-500 duration-300 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter  */}
        <div className="py-10 xl:max-w-xs w-full md:px-10  xl:px-0 xl:mx-auto md:col-span-2 xl:col-span-1 flex flex-col gap-2">
          <h2 className=" text-[32px] font-bold">NewsLetter</h2>
          <p className=" text-base text-[#b1b5c3]">
            Subscribe Our Newsletter To Get More Free Crypto News And Updates.
          </p>
          <div className="relative flex mt-5 ">
            <input
              type="email"
              className=" w-full py-2 px-4 border rounded-full"
              placeholder="Enter Your Email"
            />
            <button className=" bg-yellow-500  font-bold text-sm rounded-full inset-y-0 my-auto h-fit py-[7px] px-4 absolute right-1 ">
              Submit
            </button>
          </div>
          {/* Social Icons  */}
          <div className=" flex self-center justify-center gap-6 mt-6">
            <Link
              href={"/"}
              target="_blank"
              className="  bg-blue-700 p-2 rounded-md text-lg hover:text-primary duration-300 ease-in-out"
            >
              <FaFacebookF size={22} />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="  bg-pink-700 p-2 rounded-md text-lg hover:text-primary duration-300 ease-in-out"
            >
              <FaInstagram size={22} />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="  bg-red-500 p-2 rounded-md text-lg hover:text-primary duration-300 ease-in-out"
            >
              <FaYoutube size={22} />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="  bg-sky-700 p-2 rounded-md text-lg hover:text-primary duration-300 ease-in-out"
            >
              <FaTwitter size={22} />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className=" border-t justify-center py-4 flex border-[#23262f]">
        <p className=" text-center text-[#b1b5c3]">
          ©{new Date().getFullYear()} dp2p.cc. All Rights Reserved.
          <Link to={"/terms"}>Terms Of Service</Link> |
          <Link to={"/privacy"}>Privacy Terms</Link>
        </p>
      </div>
    </div>
  );
};

export default Footers;
