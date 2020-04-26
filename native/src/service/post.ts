import { AxiosPromise } from 'axios';
import { apiCall } from './api';

export const fetchPosts = (): AxiosPromise<any> => {
  return apiCall({
    method: 'get',
    url: '/posts1',
  });
};
