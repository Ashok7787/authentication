import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import back1 from "../../assets/images/back1.png"
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function EmailLogIn(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    if(data.email === "user@gmail.com" && data.password === "user@1234"){
        sessionStorage.setItem("userDetails", JSON.stringify(data));
        navigate("/");
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className=" h-screen">
        <p className="flex justify-center text-3xl font-bold">
          Hi, Welcome back
        </p>
        <div className="w-full flex flex-col md:flex-row md:gap-2">
          <div className="md:w-1/2 flex flex-col max-sm:hidden max-md:hidden">
            <img
              src={"https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Icon-Background-PNG-Image.png"}
              alt="signIn"
             height={800}
             width="80%"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
           
              <div className="flex flex-col justify-center md:w-2/3 w-full space-y-3">
                <p className=" text-2xl font-bold">Sign in to Minimal</p>
                <div className=" flex gap-1">
                  <p>New user?</p>
                  <p className=" text-green-500 hover:underline">
                    <Link to={"/generate-otp-email"}>Create an account</Link>
                  </p>
                </div>
               
                  <p
                    className=" text-green-700 hover:underline"                    
                  >
                    LogIn By Using Mobile Number
                  </p>
                
              </div>
              <p className=" text-red-500 hover:underline">
                Default use email "user@gmail.com" and password "user@1234"
                </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center md:w-2/3 w-full space-y-5 mt-5 border rounded-md p-5 shadow-sm"
              >
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email && errors.email.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        {...field}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="password"
                        name="password"
                        error={!!errors.password}
                        helperText={errors.password && errors.password.message}
                      />
                    </FormControl>
                  )}
                />

                <p className=" flex justify-end underline">
                  <Link to={"/forgetbyemail"}>Forgot Password?</Link>
                </p>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember Me"
                />
              </form>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailLogIn;
