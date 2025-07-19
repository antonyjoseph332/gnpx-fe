import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  heading: string;
  subheading: string;
  tag: string;
  children?: React.ReactNode;
}

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  subheading,
  tag,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div className="flex-shrink-0">
        <motion.div
          className="flex items-center gap-3 mb-5"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
          <span className="text-sm text-lime-300 uppercase tracking-widest font-medium">
            {tag}
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold uppercase"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
        >
          {heading}
        </motion.h2>

        <motion.h3
          className="text-4xl md:text-5xl font-serif text-gray-400 uppercase mt-2 mb-4"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.4}
        >
          {subheading}
        </motion.h3>
      </div>

      <motion.div
        className="w-full md:w-1/2 flex items-center"
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.6}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionHeader;