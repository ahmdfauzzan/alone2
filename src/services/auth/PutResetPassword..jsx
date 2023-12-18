import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import http2 from "../../utils/http2";

export const fetchResetPassword = async (input) => {
  return await http2
    .put(API_ENDPOINT.PUT_RESET_PASSWORD, input)
    .then((result) => {
      console.log(input);
      console.log(result);
    })
    .catch((err) => {
      console.log(input);
      console.log(err);
    });
};

export const useResetPassword = () => {
  return useMutation(fetchResetPassword);
};
