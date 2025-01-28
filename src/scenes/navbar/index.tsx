import { useTheme } from '@/ThemeContext';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenutoggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Преход за фона
  const navbarBackground = isTopOfPage
    ? 'bg-transparent'
    : isDarkMode
      ? 'bg-black/50 backdrop-blur-md'
      : 'bg-white/70 backdrop-blur-md';

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition-all duration-300 ease-in-out`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div
                  className={`${flexBetween} gap-8 font-montserrat text-sm ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div
                  className={`${flexBetween} gap-8 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
                {/* Превключвател за темата */}
                <div className="flex items-center">
                  <SunIcon
                    className={`h-6 w-6 ${
                      isDarkMode ? 'text-gray-400' : 'text-yellow-500'
                    }`}
                  />
                  <label className="relative ml-2 inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={toggleTheme}
                      className="sr-only"
                    />
                    <div className="h-6 w-10 rounded-full bg-gray-200 shadow-inner"></div>
                    <div
                      className={`dot absolute h-4 w-4 rounded-full bg-yellow-500 transition-transform duration-300 ease-in-out ${
                        isDarkMode ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    ></div>
                  </label>
                  <MoonIcon
                    className={`h-6 w-6 ${
                      isDarkMode ? 'text-yellow-500' : 'text-gray-400'
                    } ml-2`}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-gray-800 p-2"
                onClick={() => setIsMenutoggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-yellow-500" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className={`fixed bottom-0 right-0 z-40 h-full w-[300px] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } drop-shadow-xl`}
        >
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenutoggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="text text-1xl ml-[33%] flex flex-col gap-10">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
