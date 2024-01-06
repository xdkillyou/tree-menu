// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    animation: {
      keyframes: {
        flash: `{
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }`,
      },
      durations: {
        flash: '1s',
      },
      counts: {
        flash: 'infinite',
      },
    },
  },
});
