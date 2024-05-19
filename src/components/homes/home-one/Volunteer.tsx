/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import volunteerShape_1 from "@/assets/img/shapes/hand-glass.png";
import volunteerShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import volunteerShape_3 from "@/assets/img/shapes/heart.png";
import volunteerShape_4 from "@/assets/img/shapes/house-heart.png";

interface VolunteerData {
  id: number;
  name: string;
  thumb: string;
  page: string;
  item_bg: string;
}

interface VolunteerProps {
  style?: boolean;
}

const Volunteer: React.FC<VolunteerProps> = ({ style }) => {
  const [volunteers, setVolunteers] = useState<VolunteerData[]>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}fundraisers`);
        const fetchedData = response.data
          .filter((item: any) => item.is_active)
          .map((item: any) => ({
            id: item.id,
            name: item.user.name,
            thumb: `http://tirta.site/storage/${item.user.avatar}`,
            page: "home_1",
            item_bg: "bg-color",
          }));
        setVolunteers(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const filteredVolunteers = volunteers
    .filter((item) => item.page === "home_1")
    .slice(0, style ? 3 : 6);

  const animations = ["fade-up", "fade-down"];

  return (
    <div className="volunteer-area pt-120 pb-90 rel z-1">
      <div className="container container-1170" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-60">
              <span className="section-title__subtitle mb-10">
                Our Volunteers
              </span>
              {style ? (
                <h3>
                  Meet <span>With Volunteers</span>
                </h3>
              ) : (
                <h2>
                  Our <span>Volunteers</span>
                </h2>
              )}
              <p>
                Meet the amazing volunteers who are making a significant impact
                through their dedication and hard work.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {filteredVolunteers.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-sm-6"
              data-aos={animations[index % animations.length]}
              data-aos-delay={index * 100}
            >
              <div className={`valunteer-item ${item.item_bg}`}>
                <div className="valunteer-item__img">
                  <img
                    src={item.thumb}
                    alt="volunteer"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="share">
                    <button>
                      <i className="flaticon-share"></i>
                    </button>
                    <div className="share__socials">
                      <Link href="#">
                        <i className="flaticon-google-plus-logo"></i>
                      </Link>
                      <Link href="#" className="twitter">
                        <i className="flaticon-twitter"></i>
                      </Link>
                      <Link href="#" className="facebook">
                        <i className="flaticon-facebook"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="valunteer-item__designation">
                  <h5>{item.name}</h5>
                  <span>volunteer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {style && (
        <div className="valunteet-shapres">
          <Image
            className="one top_image_bounce"
            src={volunteerShape_1}
            alt="Shape"
          />
          <Image
            className="two left_image_bounce"
            src={volunteerShape_2}
            alt="Shape"
          />
          <Image
            className="three right_image_bounce"
            src={volunteerShape_3}
            alt="Shape"
          />
          <Image
            className="four top_image_bounce"
            src={volunteerShape_4}
            alt="Shape"
          />
        </div>
      )}
    </div>
  );
};

export default Volunteer;
