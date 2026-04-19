export const viewportOnce = {
  once: true,
  amount: 0.2,
}

export const viewportLate = {
  once: true,
  amount: 0.4,
}

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 56,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.35,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const navbarReveal = {
  hidden: {
    opacity: 0,
    y: -28,
    scale: 0.96,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const deckUnfold = {
  hidden: (index = 0) => ({
    opacity: 0,
    x: -120 + index * 28,
    y: 28 - index * 6,
    rotate: -12 + index * 6,
    scale: 0.9,
  }),
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.05,
      delay: 0.34 + index * 0.22,
      ease: [0.2, 0.9, 0.2, 1],
    },
  }),
}

export const riseFromBehind = {
  hidden: (index = 0) => ({
    opacity: 0,
    y: 120,
    scale: 0.74,
    filter: 'blur(14px)',
  }),
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      delay: 0.42 + index * 0.14,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const sideReveal = {
  hidden: (index = 0) => ({
    opacity: 0,
    x: index % 2 === 0 ? -110 : 110,
    y: 16,
  }),
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.28 + index * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}
