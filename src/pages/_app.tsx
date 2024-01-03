import '~/styles/globals.scss';
import type { AppProps } from 'next/app';
import Root from '~/components/root';
import store from '~/store';

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined' && window) {
    // @ts-expect-error we're doing something debuggy here
    window.DEBUG = {
      getState: store.getState,
    };
  }

  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}
