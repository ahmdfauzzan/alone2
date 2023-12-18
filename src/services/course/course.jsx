import { useQuery } from "@tanstack/react-query";
import http2 from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api-endpoint";

//untuk hit API
const fetchDataCourse = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http2.get(_key, { params: _params });
  console.log(data);
  return data;
};

//untuk Dinamis handle
const useDataCourse = (options, limit, page) => {
  return useQuery([API_ENDPOINT.COURSE, options], () => fetchDataCourse({ queryKey: [API_ENDPOINT.COURSE, { ...options, limit, page }] }));
};

export { fetchDataCourse, useDataCourse };
