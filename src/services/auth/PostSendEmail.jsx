import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import http2 from "../../utils/http2";

export const fetchSendEmail = async (input) => {
  return await http2
    .post(API_ENDPOINT.POST_SEND_EMAIL, input)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useSendEmail = () => {
  return useMutation(fetchSendEmail);
};
