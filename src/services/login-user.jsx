import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { Navigate, useNavigate } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../utils/cookies";
import http2 from "../utils/http2";

const LoginUser = async (input) => {
  console.log("input", input);
  return await http2
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      // window.location.href = "/dashboard";
      // toast.success("anda berhasil login");
      // Navigate("/dashboard");
      return result.data;
    })
    .catch((err) => {
      if (err.response.data.message === "Wrong password") {
        toast.warning("Password atau Email Salah");
      } else if (err.response.data.message === "User is not found") {
        toast.warning("pengguna tidak di temukan");
      } else if (err.response.data.message === "Email is not valid") {
        toast.warning("email tidak benar atau salah");
      } else {
        toast.warning("Password atau Email Tidak di isi");
      }
    });
};

const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation(LoginUser, {
    onSuccess: (data) => {
      console.log(data.data.user.role);
      const userRole = data?.data?.user?.role; // Ambil role dari data respons

      if (userRole === "user") {
        navigate("/kelas");
      } else if (userRole === "admin") {
        navigate("/admin");
      }
    },
  });
};

export { LoginUser, useLoginUser };
