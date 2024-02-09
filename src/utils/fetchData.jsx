
export const exerciceOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f5f31e2244msh53ffa0d470ad83ep11ff77jsnd216560387c7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    params: {limit: '1000'}
  }
};





export const fetchData = async(url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}