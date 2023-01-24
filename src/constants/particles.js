export const firefly = {
  fpsLimit: 60,
  particles: {
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false,
    },
  },
  number: { density: { enable: true, area: 800 }, value: 80 },
  opacity: {
    value: 0.5,
  },
  shape: {
    type: "circle",
  },
  size: {
    value: { min: 1, max: 5 },
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "#fff",
        },
        particles: {
          color: {
            value: "#000",
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        particles: {
          color: {
            // value: "#75075E"
            value: "#FD4495",
          },
        },
      },
    },
  ],
};
