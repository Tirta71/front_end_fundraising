/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchCauses, Cause } from "@/utils/fetchCause";
import formatToRupiah from "@/utils/formatToRupiah";
import AOS from "aos";
import "aos/dist/aos.css";

const OurCause = () => {
  const [causes, setCauses] = useState<Cause[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 200, // Global animation delay in milliseconds
    });
  }, []);

  useEffect(() => {
    const fetchAndSetCauses = async () => {
      const activeCauses = await fetchCauses();
      setCauses(activeCauses);
    };

    fetchAndSetCauses();
  }, []);

  return (
    <div className="our-cause-area pt-120 pb-90 rel z-1">
      <div className="container">
        {causes.length === 0 ? (
          <div className="section-title text-center mb-50">
            <h3>
              <span>Belum ada data yang ditambahkan</span>
            </h3>
          </div>
        ) : (
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-center mb-50">
                <span className="section-title__subtitle mb-10">
                  Our Causes
                </span>
                <h3>
                  Our <span>Latest Causes</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem voluptatem obcaecati consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {causes.map((item: Cause, index: number) => (
            <div
              key={item.id}
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Set a delay for each card
            >
              <div className="cause-item">
                <div className="image">
                  <img
                    src={`https://tirta.site/storage/${item.thumbnail}`}
                    alt="cause"
                    style={{
                      width: "300px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href={`/causes-details/${item.id}`}>{item.name}</Link>
                  </h5>
                  <p>{item.about}</p>
                  <div className="cause-price">
                    <span> {formatToRupiah(item.totalDonations)}</span>
                    <span>{formatToRupiah(item.target_amount)}</span>
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar progress-bar-striped progress-bar-animated ${
                        item.percentage === 100 ? "bg-success" : "bg-info"
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="cause-btn">
                    <Link
                      className={`cr-btn ${
                        item.percentage === 100 ? "bg-success" : "bg-info"
                      }`}
                      href={`/causes-details/${item.id}`}
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
    </div>
  );
};

export default OurCause;
