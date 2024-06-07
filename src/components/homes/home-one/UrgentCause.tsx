/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchCauses, Cause } from "@/utils/fetchCause";
import formatToRupiah from "@/utils/formatToRupiah";

import causeShape_1 from "@/assets/img/shapes/half-circle-with-dots.png";
import causeShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import causeShape_3 from "@/assets/img/shapes/circle-with-line-green.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { baseUrl } from "@/utils/baseUrl";

const UrgentCause = () => {
  const [causes, setCauses] = useState<Cause[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCauses = await fetchCauses();

        const filteredCauses = fetchedCauses.filter(
          (cause) => cause.totalDonations >= 0
        );
        setCauses(filteredCauses.slice(0, 3));
      } catch (error) {
        console.error("Error fetching causes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="urgent-cause-area overlay bgs-cover pt-120 pb-90 rel z-1"
      style={{
        backgroundImage: `url(/assets/img/background/banner-charity.jpg)`,
      }}
    >
      <div className="container container-1370 ">
        <div className="row gap-40">
          {causes.length === 0 ? (
            <div className="section-title text-center mb-50">
              <h3>
                <span>Belum ada data yang ditambahkan</span>
              </h3>
            </div>
          ) : (
            <div className="col-xl-3 col-md-6" data-aos="fade-up-right">
              <div className="urgent-cause-content mb-30 rmb-65">
                <div className="section-title mb-30">
                  <span className="section-title__subtitle mb-30">
                    Urgent cause
                  </span>
                  <h3>
                    We help more than <span>whatever the disaster</span> every
                    year
                  </h3>
                </div>
                <p>
                  BigHearts is the largest global crowdfunding community
                  connecting nonprofits, donors, and companies in nearly every
                  country. We help nonprofits from
                </p>
                <Link className="cr-btn ml-5 mt-35" href="/causes">
                  View All causes
                </Link>
              </div>
            </div>
          )}

          {causes.map((cause, index) => (
            <div
              key={cause.id}
              className="col-xl-3 col-md-6  "
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 200}`}
            >
              <div className="cause-item">
                <div className="image">
                  <img
                    src={`${baseUrl}/storage/${cause.thumbnail}`}
                    alt="cause"
                    style={{
                      width: "100%",
                      height: "242px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="content ">
                  <h5 className="fs-6">
                    <Link href={`/causes-details/${cause.id}`}>
                      {cause.name}
                    </Link>
                  </h5>

                  <div className="cause-price">
                    <span>
                      Terkumpul
                      <span className="text-info px-2">
                        {formatToRupiah(cause.totalDonations)}
                      </span>
                    </span>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar progress-bar-striped progress-bar-animated ${
                        cause.percentage === 100 ? "bg-success" : "bg-info"
                      }`}
                      style={{ width: `${cause.percentage}%` }}
                    ></div>
                  </div>
                  <div className="cause-btn">
                    <Link
                      className={`cr-btn ${
                        cause.percentage === 100 ? "bg-success" : "bg-info"
                      }`}
                      href={`/causes-details/${cause.id}`}
                    >
                      Donation now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="urgent-cause-shapes">
        <Image
          className="one top_image_bounce"
          src={causeShape_1}
          alt="Shape"
          data-aos="fade-up"
        />
        <Image
          className="two left_image_bounce"
          src={causeShape_2}
          alt="Shape"
          data-aos="fade-up"
        />
        <Image
          className="three right_image_bounce"
          src={causeShape_3}
          alt="Shape"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default UrgentCause;
