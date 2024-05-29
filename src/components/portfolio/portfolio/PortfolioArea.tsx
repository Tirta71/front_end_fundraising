/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "@/utils/baseUrl";

const PortfolioArea = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(`${apiUrl}fundraising-phases`);
        const data = response.data;
        setPortfolioData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        toast.error("Failed to fetch portfolio data");
      }
    };

    fetchPortfolioData();
  }, []);

  const renderPortfolioItems = () => {
    return portfolioData.map((item: any) => (
      <div key={item.id} className="col-xl-4 col-md-6 item">
        <div className="portfolio-item image">
          <img
            src={`${baseUrl}/storage/${item.photo}`}
            alt="Portfolio"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <div className="portfolio-item__over">
            <a className="details-btn" href="#">
              <i className="flaticon-chevron"></i>
            </a>
            <h5>
              <Link href="#">{item.fundraising.name}</Link>
            </h5>
            <span className="category">{item.notes}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="portfolio-page-area pt-120 pb-90 rel z-1">
      <div className="container">
        <div className="row portfolio-active justify-content-center">
          {renderPortfolioItems()}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
