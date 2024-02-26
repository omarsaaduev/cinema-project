const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'XZJSYN8-BSFMV6J-QMSSEDX-C5GPK0T'}
  };

  export const getData = async (query) =>{
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?${query}`, options);
    const json = await response.json()
    return json
    // fetch(`https://api.kinopoisk.dev/v1.4/${url}`, options)
    // .then(response => response.json())
    // .catch(err => console.error(err));
    
  }
  