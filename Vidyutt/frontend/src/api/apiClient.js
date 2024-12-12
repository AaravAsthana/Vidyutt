import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Reusable functions for each entity
export const getPredictions = async (entity) => {
  const response = await apiClient.get(`/${entity}/predictions`); // Endpoint for predictions
  return response.data;
};

export const getActual = async (entity) => {
  const response = await apiClient.get(`/${entity}/actual`); // Endpoint for actual data
  return response.data;
};
