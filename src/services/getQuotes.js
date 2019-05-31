export default function getQuotes(count) {
  return fetch(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could Not Fetch Quotes';
      return json;
    });
}
