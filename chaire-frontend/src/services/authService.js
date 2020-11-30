
const BASE_URL = 'http://localhost:3000/'

const login = (email, password) => {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  return fetch(BASE_URL + 'login', reqOptions)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log('err', err);
    });
};

const register = () => {

}


export default {
  login,
  register,
};
