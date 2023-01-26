import { API_BASE_URL, API_KEY } from '../constants';

export const logIn = async (username) => {
  try {
    // Check if user exists
    const response = await fetch(`${API_BASE_URL}/translations?username=${username}`);
    let userdata = await response.json();

    // If not, create a new user
    if (!userdata?.length) {
      const response = await createUser(username);
      const newUser = await response.json();

      return newUser;
    }

    return userdata[0];
  } catch (error) {
    throw new Error('Error logging in: ' + error.message);
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
  } catch (error) {
    console.log('Error creating user: ' + error.message);
  }
};

export const updateTranslations = async (translations, id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/translations/${id}`, {
      method: 'PATCH',
      headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        translations: translations
      })
    });

    return await response.json();
  } catch (error) {
    throw new Error('Error updating translations: ' + error.message);
  }
};
