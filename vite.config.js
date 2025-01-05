import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/dmcgrew-conference-event-planner",
    plugins: [react()],
})
