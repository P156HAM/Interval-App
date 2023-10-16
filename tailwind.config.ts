import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
});