import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import http from "../../utils/http";
import http2 from "../../utils/http2";

const registerUser = async (input) => {
  return await http2
    .post(API_ENDPOINT.USER_REGISTER, input)
    .then((result) => {
      console.log(result.data.data.token);
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      return result.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

const useRegisterUser = () => {
  const navigate = useNavigate();

  return useMutation(registerUser, {
    onSuccess: () => {
      navigate("/otp");
    },
  });
};

export { registerUser, useRegisterUser };
