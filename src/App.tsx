// App.tsx
import { useEffect, useState } from 'react';
import { Home } from './scenes/home';
import { Benefits } from '@/scenes/benefits';
import Navbar from './scenes/navbar';
import { SelectedPage } from './shared/types';
import { ThemeProvider } from './ThemeContext'; // Импортирайте ThemeProvider

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
