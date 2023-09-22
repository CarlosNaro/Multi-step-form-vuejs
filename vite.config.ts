import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base:"/Multi-step-form-vuejs/",
  // configuracion para poder usar las imagenes que estan en el asets/images al hacer el deploys
  // base: "/Multi-step-form-vuejs/",
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Configura la carpeta de activos y nombres de archivos de activos
  //       assetFileNames: "src/assets/images/[name].[ext]", // Esto define la estructura de nombres de archivos de recursos estáticos
  //     },
  //   },
  //   assetsDir: "src/assets/images/",
  // },
});
