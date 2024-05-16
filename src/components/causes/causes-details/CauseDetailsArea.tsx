"use client";
import Image from "next/image";
import CauseDetailsForm from "@/components/forms/CauseDetailsForm";
import CauseDetailsSidebar from "./CauseDetailsSidebar";
import { useEffect, useState } from "react";
import { fetchCauses, Cause } from "@/utils/fetchCause";
import formatToRupiah from "@/utils/formatToRupiah";

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

  return (
    <div className="cause-details-area py-120">
      <div className="container">
        <div className="row gap-60">
          <div className="col-lg-8">
            <div className="cause-details-content">
              <div className="details-image mb-30">
                {causeDetails ? (
                  <Image
                    src={`http://localhost:8000/storage/${causeDetails.thumbnail}`}
                    alt="image"
                    width={800}
                    height={600}
                  />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>

              <h3 className="title">{causeDetails?.name || "Title"}</h3>
              <p>{causeDetails?.about || "Description"}</p>
              <div className="cause-price mt-30">
                <span>
                  Raised : {formatToRupiah(causeDetails?.totalDonations || 0)}
                </span>
                <span>
                  Goal : {formatToRupiah(causeDetails?.target_amount || 0)}
                </span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${causeDetails?.percentage}%` }}
                ></div>
              </div>
            </div>
            <CauseDetailsForm id_cause={id_cause} />
          </div>
          <div className="col-lg-4">
            <CauseDetailsSidebar id_cause={id_cause} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsArea;
