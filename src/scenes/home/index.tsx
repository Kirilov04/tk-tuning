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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section
      id="home"
      className="md: gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
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
            <div className="relative">
              <div className="before:absolute before:-top-20 before:text-gray-700 before:opacity-10 before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm text-red-800">
              We offer services such as ECU Tuning, Remap, Immo Off, DPF / EGR
              Off, Lamb Off
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
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
              className="font-bolf text-sm text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={'#${SelectedPage.ContactUs}'}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="md flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
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
        <div className="h-[150px] w-full bg-primary-100 py-10">
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
