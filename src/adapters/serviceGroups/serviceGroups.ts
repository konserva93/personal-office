import { sendRequest } from '../network';
import { ServiceGroup } from './types';

export const getServiceGroups = () => {
  sendRequest<ServiceGroup>('/servicegroups').then((data) => console.log(data));
};
