import { HText } from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/16/solid';
import { motion, stagger } from 'framer-motion';
import { Benefit } from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the art Facilities',
    description: 'Neque adiscing amet amet enim. Feugiat dolor',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100`s of Diverse Classes',
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consecterus ac venenatis facilisi est. Eget ac turpis id. ',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and pro Mechanics',
    description:
      'Fusce vestibulum aliquarn ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesqu. Congue parturien.',
  },
];
const container = {
  hidden: {},
  visible: {
    transitioin: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A TUNING</HText>
          <p className="my-5 text-sm">
            We offer world-class software equipment, specialists and mechanics
            to get you to your end results. We provide genuine care for each
            member.
          </p>
        </div>
        <motion.div
          className="mt-[-4] items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
