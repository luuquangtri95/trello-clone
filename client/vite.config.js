import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: "./",
    // khi build sẽ có thêm ./assets nếu không định nghĩa nó sẽ /assets
});
