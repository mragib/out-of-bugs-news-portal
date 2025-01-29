"use client";

import React, { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import {
  ErrorToast,
  GetEmail,
  IsEmpty,
  SetOTP,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

function PinVerifyForm() {
  const [data, setData] = useState({ otp: "", email: GetEmail() });
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
      return ErrorToast("Invalid OTP");
    } else {
      setSubmitting(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      setSubmitting(false);

      const res = await fetch(`/api/user/recover/verifyOTP`, options);
      const dataObj = await res.json();

      if (dataObj.status === "success") {
        setData({ otp: "" });

        SuccessToast(`A OTP is verified successfully`);
        SetOTP(data.otp);
        router.push(`/user/resetPassword`);
        setSubmitting(false);
      } else {
        setSubmitting(false);
        return ErrorToast("Invalid Pin");
      }
    }
  }

  return (
    <div className="row h-100 justify-content-center center-screen">
      <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
        <div className="card animated fadeIn p-5 gradient-bg">
          <h5 className="mb-3">Verification PIN</h5>
          <label className="form-label">6 Digit Code</label>
          <input
            value={data.otp}
            onChange={(e) => handleInputChange("otp", e.target.value)}
            type="text"
            className="form-control mb-2"
          />
          <SubmitButton
            onClick={handleSubmit}
            className="btn btn-danger mt-3"
            submit={submitting}
            text="Verify"
          />
        </div>
      </div>
    </div>
  );
}

export default PinVerifyForm;
