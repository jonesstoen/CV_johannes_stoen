import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // fordi du har eget domene (johannesstoen.no)
    build: {
        outDir: '../docs',   // bygg til /docs i repo-rota
        emptyOutDir: true,   // tøm docs før hver build
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                bloom: resolve(import.meta.dirname, 'bloom/index.html'), // case-studie på /bloom/
                fiskeklar: resolve(import.meta.dirname, 'fiskeklar/index.html'),
                minichat: resolve(import.meta.dirname, 'minichat/index.html'),
            },
        },
    },
});