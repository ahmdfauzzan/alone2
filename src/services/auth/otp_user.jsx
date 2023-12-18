// services/send_otp.js
import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";

const sendOTP = async (otp) => {
  return await http2
    .post(API_ENDPOINT.VERIFY_OTP, { otp })
    .then((result) => {
      console.log("OTP berhasil dikirim:", otp);
      // CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      return result.data;
    })
    .catch((err) => {
      throw new Error("Gagal mengirimkan OTP");
    });
};

const useSendOTP = () => {
  return useMutation(sendOTP);
};

export { sendOTP, useSendOTP };
