// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    animation: {
      keyframes: {
        flash: `{
          0%,100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }`,
        slide: `{
          0% {
            transform: translateX(0px) translateY(-50%);
          }
          100% {
            transform: translateX(300px) translateY(-50%);
          }
        }`,
      },
      durations: {
        flash: '1s',
        slide: '1.5s',
      },
      counts: {
        flash: 'infinite',
        slide: 'infinite',
      },
    },
  },
});
