// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import viteSass from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), viteSass()],
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@user": path.resolve(__dirname, "src/pages/User/"),
      "@admin": path.resolve(__dirname, "src/pages/Admin/"),
      "@settings": path.resolve(__dirname, "src/pages/Settings/"),
      "@auth": path.resolve(__dirname, "src/pages/Authentication/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@graphql": path.resolve(__dirname, "src/utils/graphql/"),
      "@hooks": path.resolve(__dirname, "src/utils/hooks/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@middleware": path.resolve(__dirname, "src/middleware/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@store": path.resolve(__dirname, "src/store/"),
    },
  },
});
