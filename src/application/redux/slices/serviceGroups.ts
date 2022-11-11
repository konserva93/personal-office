import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceGroupInfo } from '../../types/serviceGroups';

const initialState: ServiceGroupInfo[] = [];

export const serviceGroupsSlice = createSlice({
  name: 'serviceGroups',
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<ServiceGroupInfo[]>) => {
      const newSelected =
        action.payload.find((group) => group.selected)?.id ??
        (state.length > 0
          ? state.find((group) => group.selected)?.id ?? state[0].id
          : undefined);
      // intentional nullish check
      if (newSelected == null) {
        return action.payload;
      }
      return action.payload.map((group) =>
        group.id === newSelected ? { ...group, selected: true } : group,
      );
    },
  },
});

export const { setGroups } = serviceGroupsSlice.actions;

export default serviceGroupsSlice.reducer;
