import { AppShell, Burger } from '@mantine/core';
import './App.css';
import OfferHeader from './core/components/OfferHeader';

import { useDisclosure } from '@mantine/hooks';
import Header from './core/components/Header';
import Login from './Pages/login/Login';
import Registration from './Pages/Registration/Registration';

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      {/* <AppShell
        navbar={{
          width: 0,
          breakpoint: 'sm',
          collapsed: { mobile: !opened }
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <OfferHeader />
          <Header/>
        </AppShell.Header>
        <AppShell.Navbar p="md" hiddenFrom="sm">
        </AppShell.Navbar>
        <AppShell.Main>Main
          <Login/>
        </AppShell.Main>
      </AppShell> */}
               <Registration/>
    </>
  );
}
export default App;
