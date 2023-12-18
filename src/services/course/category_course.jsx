import { useQuery } from "@tanstack/react-query";
import http2 from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api-endpoint";

//untuk hit API
const fetchCategory = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http2.get(_key, { params: _params });
  console.log(data.data.category);
  return data.data.category;
};

//untuk Dinamis handle
const useCategory = (options, limit, page) => {
  return useQuery([API_ENDPOINT.COURSE, options], () => fetchCategory({ queryKey: [API_ENDPOINT.CATEGORY_COURSE, { ...options, limit, page }] }));
};

export { fetchCategory, useCategory };
