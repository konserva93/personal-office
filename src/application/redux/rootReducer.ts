import serviceGroupsReducer from './slices/serviceGroups';
import { ServiceGroupInfo } from '../types/serviceGroups';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = {
  serviceGroups: serviceGroupsReducer,
};

interface RootState {
  serviceGroups: ServiceGroupInfo[];
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useServiceGroupsStorage = (): ServiceGroupInfo[] =>
  useTypedSelector((state) => state.serviceGroups);
