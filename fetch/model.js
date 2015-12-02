require('isomorphic-fetch');

export default function getColors(q, cb) {
  return fetch('http://localhost:9876?q='+ q).then(function(response) {
    return response.json()
  }).then(function(json) {
    cb(json.colors);
  });
}
