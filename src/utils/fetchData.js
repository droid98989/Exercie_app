export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/channel/about",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const BmiOptions = {
  method: 'GET',
  url: 'https://bmi10.p.rapidapi.com/bmicommon',
  headers: {
    'X-RapidAPI-Key': 'b4da7dfb16msh4b6d12d85dccd93p1f864cjsna625f2e2b4a9',
    'X-RapidAPI-Host': 'bmi10.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
