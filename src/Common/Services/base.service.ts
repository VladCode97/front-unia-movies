import Axios, { AxiosResponse } from "axios";

/**
 * Return post
 * @param body
 * @param url
 * @param token
 */
export async function PostService<T>(
  body: T,
  url: string,
  token?: string
): Promise<AxiosResponse> {
  return await Axios.post(url, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

/**
 * Method Get
 * @param url
 * @param token
 * @constructor
 */
export async function GetService(
  url: string,
  token: string
): Promise<AxiosResponse> {
  try {
    return await Axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
