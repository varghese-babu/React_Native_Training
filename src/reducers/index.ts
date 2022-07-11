import { api } from '@services/api/api';
import homeSlice from './homeSlice';

export default {
  home: homeSlice,
  [api.reducerPath]: api.reducer
};
