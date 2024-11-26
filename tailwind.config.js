/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: '#4f46e5', // Indigo-500
      backgroundLight: '#ffffff',
      backgroundDark: '#1f2937',
      textLight: '#000000',
      textDark: '#ffffff',
    },
  },
};
export const plugins = [];
