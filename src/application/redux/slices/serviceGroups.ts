import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceGroup } from '../../types/serviceGroups';

const initialState: ServiceGroup[] = [];

export const serviceGroupsSlice = createSlice({
  name: 'serviceGroups',
  initialState, // Отличие группы из адаптера от группы приложения в наличии признака selected
  reducers: {
    setGroups: (state, action: PayloadAction<ServiceGroup[]>) => {
      const newSelected =
        action.payload.find((group) => group.selected)?.id ??
        (state.length > 0
          ? state.find((group) => group.selected)?.id ?? state[0].id
          : undefined);
      // intentional nullish check
      if (newSelected == null) {
        return action.payload;
      }
      return [...state, ...action.payload].map((group) =>
        group.id === newSelected ? { ...group, selected: true } : group
      );
    },
  },
});

export const { setGroups } = serviceGroupsSlice.actions;

export default serviceGroupsSlice.reducer;
