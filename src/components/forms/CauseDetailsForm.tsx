"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import formatToRupiah from "@/utils/formatToRupiah";

interface FormData {
  name: string;
  phoneNumber: string;
  proof: FileList;
  notes: string;
}

interface PriceDataType {
  id: number;
  price_id: string;
  price_title: number | string;
  check?: boolean;
}
const price_data: PriceDataType[] = [
  {
    id: 1,
    price_id: "price50",
    price_title: 50000,
    check: true,
  },
  {
    id: 2,
    price_id: "price100",
    price_title: 100000,
  },
  {
    id: 3,
    price_id: "price200",
    price_title: 200000,
  },
  {
    id: 4,
    price_id: "price300",
    price_title: 300000,
  },
  {
    id: 5,
    price_id: "price400",
    price_title: 400000,
  },
];

interface CauseDetailsFormProps {
  id_cause: number;
}

const CauseDetailsForm = ({ id_cause }: CauseDetailsFormProps) => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(
    price_data[0].price_title.toString()
  );

  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
  };

  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm<FormData>();

  const handleSubmit = async (data: FormData) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone_number", data.phoneNumber);
    formData.append("fundraising_id", id_cause.toString());
    formData.append("total_amount", selectedPrice || "0");
    formData.append("notes", data.notes);
    formData.append("proof", data.proof[0]);

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to proceed with the donation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, donate it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(`${apiUrl}donaturs/add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          Swal.fire({
            title: "Donation submitted successfully",
            text: "Thank you for your donation :)",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } catch (error) {
          console.error("Error:", error);
          toast("An error occurred while submitting donation", {
            position: "top-center",
            type: "error",
          });
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmitForm(handleSubmit)} className="donation-form">
      <div className="row">
        <div className="col-lg-12">
          <h5>How Much Would You Like To Donate?</h5>
          <div className="custom-radio-price">
            {price_data.slice(0, 6).map((item, index) => (
              <div key={index} className="radio-item">
                <input
                  type="radio"
                  name="donationPrice"
                  id={item.price_id}
                  checked={selectedPrice === item.price_title.toString()}
                  onChange={() =>
                    handlePriceChange(item.price_title.toString())
                  }
                />
                <label htmlFor={item.price_id}>
                  {typeof item.price_title === "string"
                    ? item.price_title
                    : `${formatToRupiah(item.price_title)}`}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-12">
          <h5>Personal Info</h5>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="form-control"
              placeholder="Your Name"
            />
            {errors.name && <p className="form_error">Name is required</p>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber", { required: true })}
              className="form-control"
              placeholder="Your Phone Number"
            />
            {errors.phoneNumber && (
              <p className="form_error">Phone Number is required</p>
            )}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              {...register("notes")}
              className="form-control"
              placeholder="Your notes (optional)"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="proof">Proof of Payment</label>
            <input
              type="file"
              id="proof"
              {...register("proof", { required: true })}
              className="form-control"
            />
            {errors.proof && (
              <p className="form_error">Proof of Payment is required</p>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group pt-10 mb-0">
            <div className="total-price">
              <div className="price-part">
                <h5>Total Donation</h5>
                <span className="price">
                  {typeof selectedPrice === "string"
                    ? selectedPrice
                    : typeof selectedPrice === "number"
                    ? `${formatToRupiah(selectedPrice)}`
                    : price_data.find((item) => item.price_id === selectedPrice)
                        ?.price_title || "Undefined"}
                </span>
              </div>
              <button type="submit" className="cr-btn ml-5">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CauseDetailsForm;
