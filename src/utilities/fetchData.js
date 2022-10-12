 export const musicOptions = {
    method: 'GET',
    params: {track_id: '469270443'},
    headers: {
      'X-RapidAPI-Key': '2af34e5f2amsh30aa2a4db3d4787p186977jsn1db94398f502',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
