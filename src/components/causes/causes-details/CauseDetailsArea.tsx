/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import CauseDetailsForm from "@/components/forms/CauseDetailsForm";
import CauseDetailsSidebar from "./CauseDetailsSidebar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import formatToRupiah from "@/utils/formatToRupiah";
import { baseUrl } from "@/utils/baseUrl";

interface CauseDetailsAreaProps {
  id_cause: number;
}

interface Fundraiser {
  name: string;
  email: string;
  avatar: string;
}

interface Cause {
  id: number;
  name: string;
  about: string;
  target_amount: number;
  totalDonations: number;
  percentage: number;
  thumbnail: string;
  fundraiser: Fundraiser;
}

const CauseDetailsArea = ({ id_cause }: CauseDetailsAreaProps) => {
  const [causeDetails, setCauseDetails] = useState<Cause | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}fundraisings/${id_cause}`);
        const data = await response.json();
        setCauseDetails(data);
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
                  Raised: {formatToRupiah(causeDetails?.totalDonations || 0)}
                </span>
                <span>
                  Goal: {formatToRupiah(causeDetails?.target_amount || 0)}
                </span>
              </div>
              <div className="progress" data-aos="fade-up">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${causeDetails?.percentage}%` }}
                ></div>
              </div>

              <div className="mt-6" data-aos="fade-up">
                <CauseDetailsForm id_cause={id_cause} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 " data-aos="fade-up">
            <div className="border p-4 rounded-lg mb-5">
              <h5 className="font-semibold mb-2">Penggalang Dana</h5>
              {causeDetails && causeDetails.fundraiser && (
                <div className="d-flex  gap-3 mt-4">
                  <img
                    src={`${baseUrl}/storage/${causeDetails.fundraiser.avatar}`}
                    alt={causeDetails.fundraiser.name}
                    className=" rounded-circle border"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="mt-3">
                    <div className="font-semibold text-lg flex items-center">
                      <strong> {causeDetails.fundraiser.name} </strong>
                      <i className="fas fa-check-circle text-info ml-2"></i>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Identitas terverifikasi
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6">
              <CauseDetailsSidebar id_cause={id_cause} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsArea;
