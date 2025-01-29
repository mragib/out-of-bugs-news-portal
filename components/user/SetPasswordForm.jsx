"use client";

import React, { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import {
  GetEmail,
  GetOTP,
  IsEmpty,
  SetEmail,
  SetOTP,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const SetPasswordForm = () => {
  const [data, setData] = useState({
    otp: GetOTP(),
    email: GetEmail(),
    password: "",
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
    if (IsEmpty(data.otp)) {
      return ErrorToast("Password is required!!!");
    } else {
      setSubmitting(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      setSubmitting(false);

      const res = await fetch(`/api/user/recover/resetPassword`, options);
      const dataObj = await res.json();

      if (dataObj.status === "success") {
        setData({ otp: "", email: "", password: "" });

        SuccessToast(`Password is changed successfully`);
        SetOTP(data.otp);
        SetEmail(data.email);
        router.push(`/user/login`);
        setSubmitting(false);
      } else {
        setSubmitting(false);
        return ErrorToast("Something went wrong");
      }
    }
  }

  return (
    <div className="row h-100 justify-content-center center-screen">
      <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
        <div className="card animated fadeIn p-5 gradient-bg">
          <h5 className="mb-3">Change Password</h5>
          <label className="form-label">New Password</label>
          <input
            value={data.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            type="text"
            className="form-control mb-2"
          />
          <SubmitButton
            onClick={handleSubmit}
            className="btn btn-danger mt-3"
            submit={submitting}
            text="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default SetPasswordForm;
