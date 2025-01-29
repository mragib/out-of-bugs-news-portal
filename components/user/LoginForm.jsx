"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/master/SubmitButton";
import Link from "next/link";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleInputChange(name, value) {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit() {
    if (IsEmail(data.email)) {
      return ErrorToast("Invalid email");
    } else if (IsEmpty(data.password)) {
      return ErrorToast("Please provide a password");
    } else {
      setSubmitting(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      setSubmitting(false);

      const res = await fetch(`/api/user/login`, options);
      const dataObj = await res.json();
      if (dataObj.status === "success") {
        setData({ email: "", password: "" });
        setSubmitting(false);
        SuccessToast("Login successfully");
        window.location.href = "/";
      } else {
        setSubmitting(false);
        return ErrorToast("invalid credentials");
      }
    }
  }
  return (
    <div className="row h-100 justify-content-center center-screen">
      <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
        <div className="card animated fadeIn p-5 gradient-bg">
          <h5 className="mb-3">User Login</h5>
          <label className="form-label">User Email</label>
          <input
            value={data.email}
            onChange={(e) => {
              handleInputChange("email", e.target.value);
            }}
            type="email"
            name="email"
            className="form-control mb-2"
          />
          <label className="form-label">User Password</label>
          <input
            value={data.password}
            onChange={(e) => {
              handleInputChange("password", e.target.value);
            }}
            type="password"
            name="password"
            className="form-control mb-1"
          />
          <SubmitButton
            onClick={handleSubmit}
            className="btn btn-danger mt-3"
            submit={submitting}
            text="Login"
          />
          <div className="my-3 d-flex">
            <Link href="/user/registration" className="nav-link mx-2">
              Sign Up |
            </Link>
            <Link href="/user/emailVerify" className="nav-link">
              Forget Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
