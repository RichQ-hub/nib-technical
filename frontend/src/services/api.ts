import { RequestInit } from "next/dist/server/web/spec-extension/request";

const parseJSON = async (url: string, options: RequestInit) => {
  const response = await fetch(url, { ...options, cache: 'no-store' });
  const data = await response.json();

  if (data.error) {
    console.log('ERROR')
    console.log(data.error);
  }

  return data;
}

export const getDogImgs = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };

  const response = await parseJSON('https://dog.ceo/api/breed/whippet/images', options);
  return response.message;
}