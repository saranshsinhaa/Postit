import axios from "axios";
import { REST_ENDPOINTS } from "../constants";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}`,
});

export const getContentData = async (description: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await instance.post(REST_ENDPOINTS.content, { description });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};

export const regenerateImage = async (description: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await instance.post(REST_ENDPOINTS.image, { description });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};
