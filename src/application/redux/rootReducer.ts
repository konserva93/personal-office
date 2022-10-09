import serviceGroupsReducer from './slices/serviceGroups';
import { ServiceGroup } from '../types/serviceGroups';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = {
  serviceGroups: serviceGroupsReducer,
};

interface RootState {
  serviceGroups: ServiceGroup[];
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useServiceGroupsStorage = () =>
  useTypedSelector((state) => state.serviceGroups);
