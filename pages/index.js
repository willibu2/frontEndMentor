import Main from '../components/Main';

import ContextProvider from '../store/ContextProvider';

export default function Home() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}
