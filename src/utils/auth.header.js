export function authHeader() {
  let token = JSON.parse(localStorage.getItem('token'))
  // console.log(token)
  if (token) {
    return { Authorization: 'Bearer ' + token }
  } else {
    return {}
  }
}
