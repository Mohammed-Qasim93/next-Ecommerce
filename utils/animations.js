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
      repeat: Infinity,
      repeatType: "reverse",
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
    scale: 1.1,
    originZ: 0,
    transition: {
      duration: 0.5,
      // delay: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const AlertAnimation = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const LoadingAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.8,
    transition: {
      duration: 1,
      // delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const SvgAnimation = {
  initial: {
    opacity: [1, 0.1],
  },
  animate: {
    transition: {
      duration: 1,
      // delay: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
export const PolygonAnimation = {
  initial: {
    strokDashoffset: 1,
  },
  animate: {
    strokDashoffset: 234,
    // cubicBezier: (0.455, 0.03, 0.515, 0.955),
    duration: 4,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
