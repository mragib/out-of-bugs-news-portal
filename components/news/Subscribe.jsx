"use client";

import React, { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";

function Subscribe() {
  const [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);

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
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      setSubmit(false);

      const res = await fetch(`/api/subscriber`, options);
      const dataObj = await res.json();
      if (dataObj.status === "success") {
        setData({ email: "" });
        setSubmit(false);
        return SuccessToast("Subscribed successfully");
      } else {
        setSubmit(false);
        return ErrorToast("Something went wrong!");
      }
    }
  }

  return (
    <div className="card p-3 shadow-sm">
      <span className="f-52 text-center text-muted">
        {" "}
        <i className="bi bi-envelope"></i>
      </span>
      <h6 className="text-center mb-3 mt-0">News Letter</h6>
      <input
        value={data["email"]}
        onChange={(e) => handleInputChange("email", e.target.value)}
        type="text"
        placeholder="Email Address"
        className="form-control mb3"
      />
      <SubmitButton
        onClick={handleSubmit}
        className="btn btn-danger mt-2 w-100"
        submit={submit}
        text="Submit"
      />
    </div>
  );
}

export default Subscribe;
