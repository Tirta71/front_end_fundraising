/* eslint-disable @next/next/no-img-element */
"use client";
import event_data from "@/data/EventData";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Event = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="our-event-area pt-120 pb-95 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-65" data-aos="fade-up">
              <span className="section-title__subtitle mb-10">Our Team</span>
              <h3>
                Meet <span>Our Team</span>
              </h3>
              <p>
                Our team is driven by passion and dedication to make a real
                difference. Each member brings unique skills, creating a
                powerful synergy that fuels our mission.
              </p>
            </div>
          </div>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 3 }}
        >
          <Masonry columnsCount={3} gutter="30px" className="events-active">
            {event_data
              .filter((item) => item.page === "home_1")
              .map((item, index) => (
                <div
                  key={item.id}
                  className="event-item"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <img
                    src={item.thumb}
                    alt="Event"
                    style={{
                      height: `${item.height}px`,
                      objectFit: item.objectFit || "cover",
                    }}
                  />
                  <div className="event-item__hover">
                    <h4>
                      <Link href="/event-details">{item.title}</Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-briefcase"></i>{" "}
                        <span>{item.job}</span>
                      </li>
                      <li>
                        <i className="fas fa-university"></i>{" "}
                        <span>{item.university}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Event;
