import logo from "./logo.svg";
import user from "../src/assets/images/user.jpeg";
import "./App.css";
import control from "../src/assets/control.png";
import {
  Avatar,
  CssBaseline,
  FormControlLabel,
  Switch,
  ThemeProvider,
  createTheme,
  SwipeableDrawer,
  styled,
  Button,
} from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import Loader from "./Componenmt/Loader";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Signin from "./Container/Auth/Signin";
import MenuIcon from "@mui/icons-material/Menu";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { DarkMode, Logout } from "@mui/icons-material";
import Account from "./Container/Account/Account";
import PrivateRoutes from "./Componenmt/Utills/PrivateRoutes";
import Dashboard from "./Container/Dashboard/Dashboard";
import Setting from "./Container/Setting/Setting";
import Chat from "./Container/Account/Chat";
import Inbox from "./Container/Account/Inbox";
import Schedule from "./Container/Account/Schedule";

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
const MenuAC = [
  { title: "Dashboard", path: "/dashboard", src: "Chart_fill" },
  { title: "Inbox", path: "/inbox", src: "Chat" },
  { title: "ChatBot", path: "/chat", src: "ChatBot" },
  { title: "Setting", path: "/setting", src: "User", gap: true },
  { title: "Schedule ", path: "/schedule", src: "Calendar" },
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

function App() {
  const [valueN, setValueN] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [openD, setOpenD] = useState(false);
  const [open, setOpen] = useState(false);
  const pathNameW = useLocation();
  const navigate = useNavigate();
  const pathW = pathNameW.pathname;

  const userDetails = sessionStorage.getItem("userDetails");
useEffect(()=>{
  if (userDetails) {
    navigate("/");
  }
},[userDetails]);

  function logout() {
    window.sessionStorage.clear();
    navigate("/signin");
  }

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // backgroundColor: !darkMode ? "#2563EB" : "#1BC559",
            // color: DarkMode ? "black" : "white",
          },
          containedPrimary: {
            // Styles for primary contained buttons
            color: "white",
            backgroundColor: !darkMode ? "#2563EB" : "#1BC559",
            "&:hover": {
              backgroundColor: "green",
            },
          },
          containedSecondary: {
            // Styles for secondary contained buttons
            color: "white",
            backgroundColor: !darkMode ? "red" : "red",
            "&:hover": {
              backgroundColor: "#ff523e",
            },
          },
        },
      },
    },
  });
  return (
    <div className="scrollbar-none">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          {!userDetails ? (
            <header
              className={`${
                darkMode ? "bg-indigo-900" : "bg-blue-600"
              } w-full shadow-md sticky top-0 right-0 left-0 z-10`}
            >
              <div className="flex sticky justify-between w-full top-0 right-0 h-20 p-2">
                <span>
                  <Link to={"/"}>
                    <Avatar src={logo} alt="logo" />
                  </Link>
                </span>

                <div className="flex gap-2 justify-end">
                  <span>
                    <FormControlLabel
                      control={
                        <MaterialUISwitch
                          sx={{ m: 1 }}
                          onChange={() => setDarkMode(!darkMode)}
                        />
                      }
                      // label="MUI switch"
                    />
                  </span>

                 
                </div>
              </div>
            </header>
          ) : null}
          <div className=" w-full h-screen overflow-y-auto scrollbar-none">
            <Routes>
              <Route
                element={
                  <div className=" h-screen w-screen flex ">
                    <div
                      className={` max-sm:hidden max-md:hidden ${
                        !darkMode ? "bg-blue-600" : "bg-indigo-900"
                      } ${
                        open ? "w-56" : "w-20 "
                      }  h-screen p-5  pt-8 relative duration-300`}
                    >
                      <img
                        src={control}
                        className={`absolute cursor-pointer -right-3 top-16 w-7 border-dark-purple
           border-2 rounded-full z-50  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                        alt=""
                      />
                      <div className="flex gap-x-4 items-center">
                        <img
                          src={logo}
                          className={`cursor-pointer  duration-500 ${
                            open && "rotate-[360deg]"
                          }`}
                          width={50}
                          height={50}
                          alt="E-Com"
                        />
                        <h1
                          className={` origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                          }`}
                        >
                          E-Com
                        </h1>
                      </div>
                      <ul className="pt-6">
                        {MenuAC.map((Menu, index) => (
                          <Link to={Menu.path}>
                            {" "}
                            <div>
                              <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer ${
                                  darkMode
                                    ? "hover:bg-slate-500"
                                    : "hover:bg-slate-700"
                                } text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"}
            ${
              darkMode && pathW === Menu.path
                ? "hover:bg-slate-700 bg-slate-500"
                : !darkMode && pathW === Menu.path
                ? "hover:bg-slate-600 bg-slate-400"
                : ""
            }
              `}
                                // ${index === 0 && "bg-light-white"}
                              >
                                <FaUser />
                                <span
                                  className={`${
                                    !open && "hidden"
                                  } origin-left duration-200`}
                                >
                                  {Menu.title}
                                </span>
                              </li>
                            </div>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <SwipeableDrawer
                      anchor={"left"}
                      open={openD}
                      // onOpen={() => setOpenD(true)}
                      onClose={() => setOpenD(false)}
                      PaperProps={{
                        sx: {
                          width: 240,
                        },
                      }}
                    >
                      <div className="flex flex-col p-2 w-full">
                        <div className="flex gap-x-4 items-center">
                          <img
                            src={logo}
                            className={`cursor-pointer  duration-500 ${
                              open && "rotate-[360deg]"
                            }`}
                            width={50}
                            height={50}
                            alt="E-Com"
                          />
                          <h1
                            className={` origin-left font-medium text-xl duration-200 ${
                              !open && "scale-0"
                            }`}
                          >
                            E-Com
                          </h1>
                        </div>

                        <ul className="pt-6">
                          {MenuAC.map((Menu, index) => (
                            <Link to={Menu.path}>
                              {" "}
                              <div>
                                <li
                                  key={index}
                                  className={`flex  rounded-md p-2 cursor-pointer ${
                                    darkMode
                                      ? "hover:bg-slate-500"
                                      : "hover:bg-slate-700"
                                  } text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"}
            ${
              darkMode && pathW === Menu.path
                ? "hover:bg-slate-700 bg-slate-500"
                : !darkMode && pathW === Menu.path
                ? "hover:bg-slate-600 bg-slate-400"
                : ""
            }
              `}
                                  // ${index === 0 && "bg-light-white"}
                                >
                                  <FaUser />
                                  <span
                                    className={`${
                                      !open && "hidden"
                                    } origin-left duration-200`}
                                  >
                                    {Menu.title}
                                  </span>
                                </li>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </SwipeableDrawer>
                    <div className="md:flex-1 flex flex-col h-screen w-screen overflow-y-scroll scrollbar-none">
                      <header
                        className={`${
                          darkMode ? "bg-indigo-900" : "bg-blue-600"
                        } w-full shadow-md sticky top-0 right-0 left-0 z-10`}
                      >
                        <div className="flex sticky justify-between top-0 right-0 h-20 p-2">
                          <div className="flex gap-2">
                            <span className="md:hidden m-2">
                              <Link to={"/"}>
                                <Avatar src={logo} alt="logo" />
                              </Link>
                            </span>
                          </div>
                          <div className="flex gap-2 justify-end">
                            <span>
                              <FormControlLabel
                                control={
                                  <MaterialUISwitch
                                    sx={{ m: 1 }}
                                    onChange={() => setDarkMode(!darkMode)}
                                  />
                                }
                                // label="MUI switch"
                              />
                            </span>

                            <Avatar
                              alt="Remy Sharp"
                              src={user}
                              sx={{ width: 56, height: 56 }}
                            />
                           
                              <Button
                                onClick={() => logout()}
                                variant="contained"
                                color="secondary"
                              >
                                <Logout />Logout
                              </Button>
                            
                          </div>
                        </div>
                      </header>
                      {/* <div className=" p-2  m-2 "> */}

                      <div
                        className={`p-5  m-1 h-screen overflow-y-auto scrollbar-none
                 {/* ${!darkMode ? "bg-slate-200" : "bg-zinc-800"} */}
                  `}
                      >
                        <PrivateRoutes />
                      </div>
                      {/* <div  style={{ position: "sticky", bottom: "0", zIndex: "9999"}}>
                    <div >
                      I am div
                    </div>
                  </div> */}
                    </div>
                  </div>
                }
              >
                <Route element={<Account />} path="/" exact />
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<Setting />} path="/setting" />
                <Route element={<Chat />} path="/chat" />
                <Route element={<Inbox />} path="/inbox" />
                <Route element={<Schedule />} path="/schedule" />
              </Route>
              <Route element={<Signin />} path="/signin" />
            </Routes>
          </div>
          {!userDetails ? (
            <div
              className={`${
                darkMode ? "bg-indigo-900" : "bg-blue-600"
              } border-t lg:p-0 p-2`}
            >
              <div className="grid md:grid-cols-2 xl:grid-cols-3">
                {/* logo */}
                <div className="grid gap-4 py-10 px-6 md:border-r border-[#23262f]">
                  <div>
                    <Link href={"/"}>
                      <img src={logo} height={52} width={170} alt="Logo" />
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
                    Subscribe Our Newsletter To Get More Free Crypto News And
                    Updates.
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
                  ©{new Date().getFullYear()} new@123.cc. All Rights Reserved.
                  <Link to={"/terms"}>Terms Of Service</Link> |
                  <Link to={"/privacy"}>Privacy Terms</Link>
                </p>
              </div>
            </div>
          ) : null}
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#d2c90b" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
