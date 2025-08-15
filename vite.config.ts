/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"; // or from 'vitest/config'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    include: ["**/__tests__/**/*.{ts,tsx}", "**/*.{spec,test}.{ts,tsx}"],
  },
});
