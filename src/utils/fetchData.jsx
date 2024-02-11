
export const exerciceOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f5f31e2244msh53ffa0d470ad83ep11ff77jsnd216560387c7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    params: {limit: '1000'}
  }
};
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': 'f5f31e2244msh53ffa0d470ad83ep11ff77jsnd216560387c7',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};





export const fetchData = async(url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}