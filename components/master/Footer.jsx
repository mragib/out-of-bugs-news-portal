import Link from "next/link";
import React from "react";
import Subscribe from "../news/Subscribe";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const Footer = ({ socials, categories }) => {
  return (
    <div className="section-footer">
      <div className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3"> ABOUT </h5>
              <p className="text-white"> {socials.data[0].about} </p>
              <div className="d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex align-items-center gap-2">
                  <a target="_blank" href={socials.data[0]["facebook"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      {/* <i className=" h3 text-white bi bi-facebook"></i> */}
                      <IoLogoFacebook fill="#4267B2" />
                    </div>
                  </a>
                  <a target="_blank" href={socials.data[0]["youtube"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      {/* <i className="h3 text-white mx-2 bi bi-youtube"></i> */}
                      <IoLogoYoutube fill="#FF0000" stroke="#fff" />
                    </div>
                  </a>
                  <a target="_blank" href={socials.data[0]["twitter"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      {/* <i className=" h3 text-white mx-2 bi bi-twitter"></i> */}
                      <IoLogoTwitter fill="#1DA1F2" />
                    </div>
                  </a>
                  <a target="_blank" href={socials.data[0]["linkedin"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      {/* <i className=" h3 text-white mx-2 bi bi-linkedin"></i>
                       */}
                      <IoLogoLinkedin fill="#0e76a8" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">RECOMMENDED</h5>
              {categories.data.slice(0, 4).map((category) => (
                <Link
                  key={category.id}
                  className="nav-link text-white my-1"
                  href={"/category?id=" + category.id}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className=" col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3"> LEGAL </h5>
              <ul className="list-unstyled text-white">
                <li className="my-1">
                  <Link href="/privacy" className="nav-link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/terms" className="nav-link">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
