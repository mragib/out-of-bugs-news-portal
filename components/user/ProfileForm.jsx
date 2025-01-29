"use client";

import React, { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const ProfileForm = ({ profile }) => {
  const [data, setData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    mobile: profile.mobile,
    email: profile.email,
    password: profile.password,
    otp: "0",
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  function handleInputChange(name, value) {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit() {
    if (IsEmpty(data.firstName)) {
      return ErrorToast("First name is required");
    } else if (IsEmpty(data.lastName)) {
      return ErrorToast("Last name is required");
    } else if (IsEmpty(data.email)) {
      return ErrorToast("Email is required");
    } else if (IsEmpty(data.mobile)) {
      return ErrorToast("Mobile is required");
    } else if (IsEmpty(data.password)) {
      return ErrorToast("Password is required");
    } else {
      setSubmitting(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      setSubmitting(false);

      const res = await fetch(`/api/user/profile`, options);
      const dataObj = await res.json();
      console.log(dataObj);
      if (dataObj.status === "success") {
        setSubmitting(false);
        SuccessToast("Profile update successfully");
        router.refresh();
      } else {
        setSubmitting(false);
        return ErrorToast("Something went wrong!!!");
      }
    }
  }
  return (
    <div className="row h-100 justify-content-center center-screen">
      <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
        <div className="card container-fluid animated fadeIn p-5 gradient-bg">
          <div className="row ">
            <h5 className="mb-1 mx-0 px-0">User profile</h5>
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">First Name</label>
              <input
                value={data.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Last Name</label>
              <input
                value={data.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Mobile</label>
              <input
                value={data.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Email</label>
              <input
                value={data.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                type="email"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <label className="form-label">Password</label>
              <input
                value={data.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
              <SubmitButton
                className="btn btn-danger w-100 mt-3"
                submit={submitting}
                onClick={handleSubmit}
                text="Update Changes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
