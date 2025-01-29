"use client";

import React, { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import {
  ErrorToast,
  IsEmail,
  SetEmail,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const EmailVerifyForm = () => {
  const router = useRouter();
  const [data, setData] = useState({ email: "" });
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
    } else {
      setSubmitting(true);

      const res = await fetch(
        `/api/user/recover/verifyEmail?email=${data.email}`
      );
      const dataObj = await res.json();
      if (dataObj.status === "success") {
        setData({ email: "" });

        SuccessToast(`A OTP was send to ${dataObj.email}`);
        SetEmail(data.email);
        router.push(`/user/otpVerify`);
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
          <h5 className="mb-3">Email Address</h5>
          <label className="form-label">User Email</label>
          <input
            value={data.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
            className="form-control mb-2"
          />
          <SubmitButton
            onClick={handleSubmit}
            className="btn btn-danger mt-3"
            submit={submitting}
            text="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyForm;
