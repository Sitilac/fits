import tokenService from "./tokenService"
const BASE_URL = '/api/bottoms';

export function getAll(user) {
  return fetch(`${BASE_URL}/user/${user._id}`)
  .then(res => res.json());
}

export function getOne(bottom){
  return fetch(`${BASE_URL}/${bottom}`)
  .then(res => res.json());
}

export function create(bottom) {
  console.log(tokenService.getToken())
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
    body: JSON.stringify(bottom)
  }).then(res => res.json());
}

export function update(bottom) {
  return fetch(`${BASE_URL}/${bottom._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(bottom)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
  }).then(res => res.json());
}
