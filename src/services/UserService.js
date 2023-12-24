import { API_BASE_URL } from '../constants/ApiConstant';

export const createResponse = async (url, method, data) => {
  try {
    const config = {
      method,
      headers: {},
    };

    if (data) {
      config.headers['Content-Type'] = 'application/json; charset=UTF-8';
      config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getUsers = () => {
  const url = `${API_BASE_URL}/users`;
  return createResponse(url, 'GET');
};

export const getUser = (userId) => {
  const url = `${API_BASE_URL}/users/${userId}`;
  return createResponse(url, 'GET');
};

export const updateUser = (userId, user) => {
  const url = `${API_BASE_URL}/users/${userId}`;
  return createResponse(url, 'PUT', user);
};