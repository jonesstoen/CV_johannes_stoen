import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // fordi du har eget domene (johannesstoen.no)
    build: {
        outDir: '../docs',   // bygg til /docs i repo-rota
        emptyOutDir: true,   // tøm docs før hver build
    },
});