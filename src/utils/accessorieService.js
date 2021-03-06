import tokenService from "./tokenService"
const BASE_URL = '/api/accessories';

export function getAll(user) {
  return fetch(`${BASE_URL}/user/${user._id}`)
  .then(res => res.json());
}

export function getOne(accessory){
  return fetch(`${BASE_URL}/${accessory}`)
  .then(res => res.json());
}

export function create(acc) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(acc)
  }).then(res => res.json());
}

export function update(acc) {
  return fetch(`${BASE_URL}/${acc._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(acc)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
  }).then(res => res.json());
}
