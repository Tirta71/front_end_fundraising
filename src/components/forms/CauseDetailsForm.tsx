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
  notes: string;
}

interface PriceDataType {
  id: number;
  price_id: string;
  price_title: number | string;
  check?: boolean;
}

const price_data: PriceDataType[] = [
  { id: 1, price_id: "price50", price_title: 50000, check: true },
  { id: 2, price_id: "price100", price_title: 100000 },
  { id: 3, price_id: "price200", price_title: 200000 },
  { id: 4, price_id: "price300", price_title: 300000 },
  { id: 5, price_id: "price400", price_title: 400000 },
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

    try {
      const response = await axios.post(`${apiUrl}donaturs/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { snap_token } = response.data;

      snaping.pay(snap_token, {
        onSuccess: async function (result: any) {
          try {
            await axios.post(
              `${apiUrl}donaturs/${result.order_id}/update-payment-status`
            );
            toast.success("Donation successfully recorded!");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } catch (error) {
            console.error("Error updating payment status:", error);
            toast.error("Error updating payment status.");
          }
        },
        onPending: function (result: any) {
          console.log("Payment pending:", result);
          toast.warning("Payment pending!");
        },
        onError: function (result: any) {
          console.log("Payment error:", result);
          toast.error("Payment error!");
        },
        onClose: function () {
          console.log("Payment popup closed without finishing the payment");
          toast.info("Payment popup closed!");
        },
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting donation");
    }
  };

  return (
    <form onSubmit={handleSubmitForm(handleSubmit)} className="donation-form">
      <div className="row">
        <div className="col-lg-12">
          <h5>How Much Would You Like To Donate?</h5>
          <div className="custom-radio-price">
            {price_data.map((item) => (
              <div key={item.id} className="radio-item">
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

        <div className="col-md-12">
          <div className="form-group pt-10 mb-0">
            <div className="total-price">
              <div className="price-part">
                <h5>Total Donation</h5>
                <span className="price">
                  {typeof selectedPrice === "string"
                    ? formatToRupiah(parseInt(selectedPrice))
                    : typeof selectedPrice === "number"
                    ? formatToRupiah(selectedPrice)
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
