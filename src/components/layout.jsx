import { Outlet } from 'react-router-dom';
import Header from './header';
import { ThemeProvider } from './theme-provider';

export function Layout() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
