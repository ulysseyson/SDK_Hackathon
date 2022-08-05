import { SessionProvider } from 'next-auth/react';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body,
        body,
        #__next,
        #__next > div {
          height: 100%;
        }
      `}</style>
    </SessionProvider>
  );
}
