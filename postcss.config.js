// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // If you use CSS nesting (optional, good practice)
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}) // Minify CSS in production
  },
};