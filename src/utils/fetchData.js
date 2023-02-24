export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "ac15c909abmshc1f9e05404f21bap1c4186jsnc8db3c9e6c8a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetchData(url, options);
  const data = await response.json();
  return data;
};
