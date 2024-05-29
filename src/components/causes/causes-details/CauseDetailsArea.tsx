"use client";
import Image from "next/image";
import CauseDetailsForm from "@/components/forms/CauseDetailsForm";
import CauseDetailsSidebar from "./CauseDetailsSidebar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchCauses, Cause } from "@/utils/fetchCause";
import formatToRupiah from "@/utils/formatToRupiah";
import { baseUrl } from "@/utils/baseUrl";

interface CauseDetailsAreaProps {
  id_cause: number;
}

const CauseDetailsArea = ({ id_cause }: CauseDetailsAreaProps) => {
  const [causeDetails, setCauseDetails] = useState<Cause | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const causes = await fetchCauses();
        const cause = causes.find((c) => c.id === id_cause);
        setCauseDetails(cause || null);
      } catch (error) {
        console.error("Error fetching cause details:", error);
      }
    };

    fetchData();
  }, [id_cause]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="cause-details-area py-120" data-aos="fade-up">
      <div className="container">
        <div className="row gap-60">
          <div className="col-lg-8">
            <div className="cause-details-content">
              <div className="details-image mb-30" data-aos="fade-up">
                {causeDetails ? (
                  <Image
                    src={`${baseUrl}/storage/${causeDetails?.thumbnail}`}
                    alt="image"
                    width={800}
                    height={600}
                  />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>

              <h3 className="title" data-aos="fade-up">
                {causeDetails?.name || "Title"}
              </h3>
              <p data-aos="fade-up">{causeDetails?.about || "Description"}</p>
              <div className="cause-price mt-30" data-aos="fade-up">
                <span>
                  Raised : {formatToRupiah(causeDetails?.totalDonations || 0)}
                </span>
                <span>
                  Goal : {formatToRupiah(causeDetails?.target_amount || 0)}
                </span>
              </div>
              <div className="progress" data-aos="fade-up">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${causeDetails?.percentage}%` }}
                ></div>
              </div>
            </div>
            <div data-aos="fade-up">
              <CauseDetailsForm id_cause={id_cause} />
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <CauseDetailsSidebar id_cause={id_cause} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsArea;
