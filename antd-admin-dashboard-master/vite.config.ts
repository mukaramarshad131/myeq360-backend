import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, "src")

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(root, "assets"),
      "@pages": resolve(root, "pages"),
      "@redux": resolve(root, "redux"),
      "@mytypes": resolve(root, "types"),
      "@configs": resolve(root, "configs"),
      "@hooks": resolve(root, "hooks"),
    }
  },
});
