import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: { plugins: ['@emotion/babel-plugin'] },
    }),
    svgr({
      svgrOptions: {
        icon: true,
        typescript: true,
        exportType: 'named',
        namedExport: 'component',
        jsxRuntime: 'automatic'
      },
      include: ['**/*.svg'],
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
});
