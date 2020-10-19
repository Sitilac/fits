import tokenService from "./tokenService"
const BASE_URL = '/api/tops';

export function getAll(user) {
  return fetch(`${BASE_URL}/user/${user._id}`)
  .then(res => res.json());
}

export function getOne(top){
  return fetch(`${BASE_URL}/${top}`)
  .then(res => res.json());
}

export function create(top) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(top)
  }).then(res => res.json());
}

export function update(top) {
  return fetch(`${BASE_URL}/${top._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(top)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
  }).then(res => res.json());
}
