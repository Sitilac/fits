import tokenService from "./tokenService"
const BASE_URL = '/api/shoes';

export function getAll(user) {
  return fetch(`${BASE_URL}/user/${user._id}`)
  .then(res => res.json());
}

export function getOne(shoe){
  return fetch(`${BASE_URL}/${shoe}`)
  .then(res => res.json());
}

export function create(shoe) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(shoe)
  }).then(res => res.json());
}

export function update(shoe) {
  return fetch(`${BASE_URL}/${shoe._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(shoe)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
  }).then(res => res.json());
}
