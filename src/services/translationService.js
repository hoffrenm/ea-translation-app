import { API_BASE_URL, API_KEY } from '../constants';

export const logIn = async (username) => {
  try {
    // Check if user exists
    const response = await fetch(`${API_BASE_URL}/translations?username=${username}`);
    let userdata = await response.json();

    // if not, create a new user
    if (!userdata?.length) {
      const response = await createUser(username);
      const newUser = await response.json();

      console.log(newUser);

      return newUser;
    }

    return userdata[0];
  } catch (err) {
    console.log('Error logging in: ' + err.message);
  }
};

const createUser = async (username) => {
  try {
    const newUser = await fetch(`${API_BASE_URL}/translations`, {
      method: 'POST',
      headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        translations: []
      })
    });

    return newUser;
  } catch (err) {
    console.log('Error creating user: ' + err.message);
  }
};

export const saveTranslation = async (translation) => {
  
}