import { store } from '~/store';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

const Root = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default Root;
