import { sendRequest } from '../network';
import { ServiceGroup, ServiceGroupInfo } from './types';
import { ServiceGroupInfo as AppServiceGroupInfo } from '../../application/types/serviceGroups';
import { store } from '../../store';
import { setGroups } from '../../application/redux/slices/serviceGroups';

const port = (groups: ServiceGroupInfo[]): AppServiceGroupInfo[] =>
  groups.map((group) => ({ ...group, selected: false }));

export const getServiceGroups = async (): Promise<void> => {
  sendRequest<ServiceGroupInfo[]>('/servicegroups')
    .then((data) => {
      store.dispatch(setGroups(port(data)));
    })
    .catch(() => {
      console.log('Error getting service groups');
    });
};

export const getServiceGroup = async (id: string): Promise<ServiceGroup> => {
  return sendRequest<ServiceGroup>(`servicegroups/${id}`)
    .then((data) => data)
    .catch(() => {
      throw new Error(`Error getting service group ${id}`);
    });
};
