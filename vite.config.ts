import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import IstanbulPlugin from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: true,
  },
  server: {
    host: "::",
    port: 5173,
  },
  base: mode === "production" ? "/resume-builder/" : "/",
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    process.env.USE_BABEL_PLUGIN_ISTANBUL ? [IstanbulPlugin({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: [ '.js', '.ts', '.tsx' ],
    })] : []
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
