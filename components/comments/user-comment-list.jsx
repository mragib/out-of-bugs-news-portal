"use client";

import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";

const UserCommentsList = ({ data }) => {
  const router = useRouter();
  async function onDelete(id) {
    const options = { method: "DELETE", body: JSON.stringify({ id }) };
    const res = await fetch(`/api/comments/manage`, options);
    const dataObj = await res.json();
    if (dataObj.status === "success") {
      router.refresh();
      return SuccessToast("Comment deleted successfully");
    } else {
      return ErrorToast("Something went wrong!");
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <ul className="list-group bg-transparent list-group-flush">
              {data.map((item) => {
                return (
                  <li key={item.id} className="list-group-item bg-transparent">
                    <h6 className="text-dark d-flex gap-2">
                      <HiOutlineNewspaper />
                      {item["news_list"]["title"]}
                    </h6>
                    <p className="text-secondary">{item["descriptions"]}</p>
                    <button
                      className="btn btn-danger px-2"
                      onClick={() => onDelete(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCommentsList;
