"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const schema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  avatar: yup.mixed().required("Avatar is required"),
  password: yup.string().required().min(8).label("Password"),
});

const BecomeVolunteerForm = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const onSubmit = async (data: any) => {
    const { name, email, avatar, password } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar[0]);
    formData.append("password", password);

    try {
      const response = await axios.post(`${apiUrl}register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Success!",
        text: "Data Berhasil Dikirim \n Anda Bisa langsung login pada situs kami akan tetapi belum bisa membuat campaign karena membutuhkan verifikasi oleh admin terlebih dahulu",
        icon: "success",
        confirmButtonText: "LOGIN",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "https://tirta.site";
        }
      });
      reset();
      setAvatarPreview(null);
    } catch (error) {
      console.error("Error registering user: ", error);
      Swal.fire({
        title: "Error!",
        text: "Mohon Lengkapi Semua datanya",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="volunteer-form">
      <div className="row">
        <div className="col-xl-9 mb-10">
          <p>Fill out the following form to become a volunteer</p>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="form-control"
              placeholder="Your Name"
            />
            <p className="form_error">{errors.name?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="form-control"
              placeholder="Email Address"
            />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              id="avatar"
              {...register("avatar")}
              className="form-control"
              onChange={handleAvatarChange}
            />
            <p className="form_error">{errors.avatar?.message}</p>
            {avatarPreview && (
              <div className="avatar-preview mt-3">
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="img-thumbnail"
                />
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="form-control"
              placeholder="Password"
            />
            <p className="form_error">{errors.password?.message}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group pt-10 mb-0">
            <button type="submit" className="cr-btn ml-5">
              Send us a message
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .avatar-preview img {
          max-width: 100px;
          height: auto;
          border-radius: 50%;
        }
      `}</style>
    </form>
  );
};

export default BecomeVolunteerForm;
