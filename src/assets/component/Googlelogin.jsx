import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

function GoogleLogin() {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      // Simpan token ke dalam cookies
      CookieStorage.set(CookieKeys.AuthToken, token);
      toast.success("Login Berhasil!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button
      className=" text-black font-bold py-2 px-4"
      onClick={() => loginWithGoogle()}
    >
      <button className="bg-blue-500 gap-4 px-2 py-2 text-white flex items-center rounded">
        Continue with Google
      </button>
    </button>
  );
}

export default GoogleLogin;
