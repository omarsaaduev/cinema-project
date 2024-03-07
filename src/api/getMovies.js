const key1 = '2SEW3ZG-4414N3W-GYGCTKR-D96XQMK';
const key2 = 'XZJSYN8-BSFMV6J-QMSSEDX-C5GPK0T';
const key3 = 'HHA5MCX-DTTMZC3-HQZ7BS9-MQR0K23';
const key4 = 'GFWA7Y2-Z1JM3VF-KKNGA4G-7NPBH6C';
const key5 = 'QHX64K3-CYF4S18-QF2S9NP-W54QB83';



const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': key4}
  };

  // export const getData = async (query) =>{
  //   const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie${query}`, options);
  //   const json = await response.json()
  //   return json
    
  // }
  

  import pLimit from 'p-limit';

const limit = pLimit(10); // Устанавливаем лимит в 10 запросов

export const getData = async (query) => {
  return limit(async () => {
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie${query}`, options);
    const json = await response.json();
    return json;
  });
}
