"use client";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import CommentForm from "@/components/news/Comment-Form";

const CommentsList = ({ comments, postID }) => {
  const [key, setKey] = useState("Comments");

  return (
    <div className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Comments" title="Comments">
          <ul className="list-group bg-transparent list-group-flush">
            {comments.data.map((item, i) => {
              return (
                <li key={item.id} className="list-group-item bg-transparent">
                  <h6 className="text-dark">
                    <i className="bi bi-person-circle"></i>{" "}
                    {item["users"]["firstName"]}
                  </h6>
                  <p className="text-secondary">{item["descriptions"]}</p>
                </li>
              );
            })}
          </ul>
        </Tab>
        <Tab eventKey="Create" title="Create">
          <CommentForm postID={postID} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CommentsList;
