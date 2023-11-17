import { defineConfig } from 'vite';

export default defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$injectedColor: orange;`,
        },
        less: {
          math: 'parens-division',
        },
        styl: {
          define: {
            $specialColor: new stylus.nodes.RGBA(51, 197, 255, 1),
          },
        },
      },
    },
  })