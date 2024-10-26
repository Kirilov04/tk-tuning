// Home.tsx
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/ThemeContext'; // Импортирайте useTheme

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [scrolling, setScrolling] = useState(false);
  const { isDarkMode } = useTheme(); // Извличане на isDarkMode

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className={`h-auto gap-10 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-6 md:h-full md:gap-16 md:pb-0`}
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 w-full max-w-full md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative pl-4">
              <div className="before:absolute before:-top-20 before:text-gray-700 before:opacity-10 before:content-evolvetext">
                <img
                  alt="home-page-text"
                  src={HomePageText}
                  className="mx-auto w-full max-w-[90%]"
                />
              </div>
            </div>
            <motion.p
              className={`mt-4 text-left text-sm ${isDarkMode ? 'text-red-400' : 'text-black'} transition-opacity duration-500 ${scrolling ? 'opacity-0' : 'opacity-100'}`}
            >
              We offer services such as ECU Tuning, Remap, Immo Off, DPF / EGR
              Off, Lamb Off
            </motion.p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center justify-end gap-4 md:justify-start md:gap-8"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className={`text-sm font-bold ${isDarkMode ? 'text-red-400' : 'text-primary-500'} underline hover:${isDarkMode ? 'text-red-500' : 'text-secondary-500'}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-end md:ml-40 md:mt-16 md:justify-center">
          <motion.img
            className="md:w-62 md:-mt-20"
            alt="home-pageGraphic"
            src={HomePageGraphic}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div
          className={`h-[150px] w-full py-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
