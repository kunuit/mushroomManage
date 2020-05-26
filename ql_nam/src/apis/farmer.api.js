import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3001/tasks
const url = '/farmers';

export const getFarmer = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
};

export const addFarmer = (data) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, data);
};

export const updateFarmer = (data, idFarmer) => {
  return axiosService.put(`${API_ENDPOINT}${url}/${idFarmer}`, data);
};

export const deleteFarmer = (idFarmer) => {
  return axiosService.delete(`${API_ENDPOINT}${url}/${idFarmer}`);
};
