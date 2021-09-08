export const containerAnimation = {
  initial: {
    // x: "-100vh",
    opacity: 0,
  },
  animate: {
    // x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
  hover: {
    scale: [1, 1.075],
    originZ: 0,
    transition: {
      duration: 0.5,
      // delay: 0.3,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};

export const childAnimation = {
  initial: {
    y: "-10vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      // delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const BeatingAnimation = {
  hover: {
    scale: [1, 1.2],
    originZ: 0,
    transition: {
      duration: 0.5,
      // delay: 0.3,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
