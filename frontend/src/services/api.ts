const parseJSON = async (url: string, options: any) => {
  const response = await fetch(url, { ...options, cache: 'no-store' });
  const data = await response.json();

  if (data.error) {
    console.log('ERROR')
    console.log(data.error);
  }

  return data;
}

export const getDogImgs = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };

  const response = await parseJSON('https://dog.ceo/api/breed/whippet/images', options);
  return response.message;
}