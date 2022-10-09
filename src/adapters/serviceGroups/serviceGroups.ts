import { sendRequest } from '../network';
import { ServiceGroup } from './types';
import { ServiceGroup as AppGroup } from '../../application/types/serviceGroups';
import { store } from '../../store';
import { setGroups } from '../../application/redux/slices/serviceGroups';

const port = (groups: ServiceGroup[]): AppGroup[] =>
  groups.map((group) => ({ ...group, selected: false }));

export const getServiceGroups = () => {
  sendRequest<ServiceGroup[]>('/servicegroups')
    .then((data) => {
      store.dispatch(setGroups(port(data)));
    })
    .catch(() => {
      console.log('Error getting service groups');
    });
};
