export default function getCharacters(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could Not Fetch Characters';
      return json;
    }); 
}
