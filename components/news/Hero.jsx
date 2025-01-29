"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Hero = ({ sliders, featured }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  function handleSelectedIndexChange(selected) {
    setSelectedIndex(selected);
  }
  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-md-8 col-lg-8 col-sm-12 p-1 col-12">
          <Carousel
            id="carouselHero"
            activeIndex={selectedIndex}
            onSelect={handleSelectedIndexChange}
            controls={false}
          >
            {sliders.data.map((slider) => (
              <Carousel.Item key={slider.id}>
                <Link href={"/details?id=" + slider.id}>
                  <img alt={slider.title} className="w-100" src={slider.img1} />
                  <Carousel.Caption className="caption">
                    <h4>{slider.title}</h4>
                    <p>{slider.short_des}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 p-1 col-6">
          <Link
            href={"/details?id=" + featured.data.at(0).id}
            id="Hero"
            className="card h-100"
          >
            <img
              alt={featured.data.at(0).title}
              className="card-img-top w-100 rounded-2"
              src={featured.data.at(0).img2}
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="caption">
                <h4>{featured.data.at(0).title}</h4>
                <p>{featured.data.at(0).short_des}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
