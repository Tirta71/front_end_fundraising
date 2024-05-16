"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import VideoPopup from "@/modals/VideoPopup";

import videoBg from "@/assets/img/video/why-choose-us.jpg";
import leafShape from "@/assets/img/shapes/three-round-green.png";

import AOS from "aos";
import "aos/dist/aos.css";

const tab_title: string[] = ["Mission", "Vission"];

const tab_content: JSX.Element[] = [
  <>
    Our Mission: There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by injected humour,
    or random aset words which don&apos;t look even slightly believable.
  </>,
  <>
    Our Vission: There are many variations of passages of Lorem Ipsum available,
    random aset words which don&apos;t look even slightly believable, or but the
    majority have suffered alteration in some form, by injected humour.
  </>,
];

const ChooseArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Define state to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab click event
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <>
      <div className="why-choose-area overlay py-120">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="why-choose-content text-white rmb-65">
                <div className="section-title mb-60">
                  <span className="section-title__subtitle mb-10">
                    Why Choose Us
                  </span>
                  <h2>
                    Trusted non profit donation <span>center</span>
                  </h2>
                </div>

                <div className="vission-mission-tab">
                  <ul className="nav mb-25" role="tablist">
                    {tab_title.map((tab, index) => (
                      <li key={index} className="nav-item">
                        <button
                          onClick={() => handleTabClick(index)}
                          className={
                            activeTab === index ? "nav-link active" : "nav-link"
                          }
                          data-aos="fade-left"
                          data-aos-delay={`${index * 100}`}
                        >
                          {tab}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="tab-content">
                    {tab_content.map((content, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${
                          activeTab === index ? "show active" : ""
                        }`}
                      >
                        {content}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="why-choose-video">
                <div className="video rel">
                  <Image
                    src={videoBg}
                    alt="Video"
                    style={{
                      width: "593px",
                      height: "441px",
                      objectFit: "cover",
                    }}
                  />
                  <a
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                    className="video-play video-play--one"
                    data-effect="mfp-zoom-in"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
                <Image
                  className="leaf-shape top_image_bounce"
                  src={leafShape}
                  alt="Shape"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"y1-DnadsMmg"}
      />
      {/* video modal end */}
    </>
  );
};

export default ChooseArea;
