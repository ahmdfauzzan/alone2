import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";

const GantiPassword = async (input) => {
  return await http2
    .put(API_ENDPOINT.GANTI_PASSWORD_USER, input)
    .then((result) => {
      console.log(result.data.message);
      alert(result.data.message);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const useGantiPassword = () => {
  return useMutation(GantiPassword, {});
};

export { GantiPassword, useGantiPassword };
