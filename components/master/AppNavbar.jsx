"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoSearch,
} from "react-icons/io5";

const AppNavbar = ({ categories, socials, isLogin }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <div className="py-2 bg-dark text-white container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h6>
                <i className="bi bi-calendar2-check"></i> Today:
                <span>
                  {" "}
                  {/* {new Date().getDate()}/{new Date().getMonth()}/ */}
                  {/* {new Date().getFullYear()}{" "} */}
                  {new Date().toDateString()}
                </span>
              </h6>
            </div>
            <div className="col-md-4">
              <span className="float-end">
                <a
                  target="_blank"
                  className="text-white"
                  href={socials.data[0]["facebook"]}
                >
                  {/* <i className="mx-2 bi bifacebook"></i> */}
                  <IoLogoFacebook fill="#4267B2" className="mx-2" />
                </a>
                <a
                  target="_blank"
                  className="text-white"
                  href={socials.data[0]["youtube"]}
                >
                  {/* <i className="mx-2 bi biyoutube"></i> */}
                  <IoLogoYoutube fill="#FF0000" className="mx-2" />
                </a>
                <a
                  target="_blank"
                  className="text-white"
                  href={socials.data[0]["twitter"]}
                >
                  {/* <i className="mx-2 bi bi bitwitter"></i> */}
                  <IoLogoTwitter fill="#1DA1F2" className="mx-2" />
                </a>
                <a
                  target="_blank"
                  className="text-white"
                  href={socials.data[0]["linkedin"]}
                >
                  {/* <i className="mx-2 bi bilinkedin"></i> */}
                  <IoLogoLinkedin fill="#0e76a8" className="mx-2" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <div className="container">
          <div className="navbar-brand">
            <img className="nav-logo" src={"/images/logo.svg"} alt="img" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-3 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link f-13" href="/">
                Home
              </Link>
              {categories.data.map((category) => (
                <Link
                  key={category.id}
                  className="nav-link f-13"
                  href={`/category?id=${category.id}`}
                >
                  {category.name}
                </Link>
              ))}
            </Nav>
            <div className="d-flex ms-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Link
                  href={`/search?keyword=${keyword}`}
                  className="btn btn-danger"
                  type="button"
                >
                  <IoSearch />
                </Link>
              </div>
            </div>
            {isLogin ? (
              <div className="float-right mx-3 h-auto d-flex">
                <div className="user-dropdown">
                  <img
                    className="icon-nav-img icon-nav"
                    src="/images/profile.png"
                    alt=""
                  />
                  <div className="user-dropdown-content ">
                    <div className="mt-4 text-center">
                      <img
                        className="icon-nav-img"
                        src="/images/profile.png"
                        alt=""
                      />
                      <hr className="user-dropdown-divider p-0" />
                    </div>
                    <Link href="/profile" className="side-bar-item">
                      <span className="side-bar-item-caption">Profile</span>
                    </Link>
                    <Link href="/comments" className="side-bar-item">
                      <span className="side-bar-item-caption">Comments</span>
                    </Link>
                    <a href="/api/user/login" className="side-bar-item">
                      <span className="side-bar-item-caption">Logout</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/user/login"
                  className="btn ms-3 btn-outline-danger"
                >
                  Login
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
