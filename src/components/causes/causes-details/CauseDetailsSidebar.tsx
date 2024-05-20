"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchDonaturs, Donatur } from "@/utils/fetchDonatur";
import userImage from "@/assets/img/about/user.jpg";

interface CauseDetailsSidebarProps {
  id_cause: number;
}

const CauseDetailsSidebar = ({ id_cause }: CauseDetailsSidebarProps) => {
  const [donaturs, setDonaturs] = useState<Donatur[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDonaturs = await fetchDonaturs(id_cause);
        setDonaturs(fetchedDonaturs);
      } catch (error) {
        console.error("Error fetching donaturs:", error);
      }
    };

    fetchData();
  }, [id_cause]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = donaturs
    .filter((donatur) => donatur.is_paid)
    .slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="main-sidebar rmt-75">
      <div className="widget widget-recent-causes" data-aos="fade-up">
        <h5 className="widget-title">Recent Donatur</h5>
        <ul>
          {currentItems.map((donatur) => (
            <li key={donatur.id} data-aos="fade-left" data-aos-delay="100">
              <div className="image">
                <Image src={userImage} alt="Cause" />
              </div>
              <div className="content">
                <h6>
                  <Link href={`/causes-details/${donatur.fundraising_id}`}>
                    {donatur.name}
                  </Link>
                </h6>
                <div className="cause-price">
                  <p>{donatur.notes}</p>
                  <span
                    className="badge bg-success"
                    style={{
                      display: "block",
                      width: "15rem",
                    }}
                  >
                    Approved
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {donaturs.filter((donatur) => donatur.is_paid).length > itemsPerPage && (
        <ul
          className="pagination"
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
        >
          {donaturs
            .filter((donatur) => donatur.is_paid)
            .map((_, index) => (
              <li key={index} className="page-item">
                <a
                  style={{
                    display: "inline-block",
                    padding: "5px 10px",
                    margin: "0 5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor:
                      currentPage === index + 1 ? "#F84D42" : "#fff",
                    color: currentPage === index + 1 ? "#fff" : "#333",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CauseDetailsSidebar;
