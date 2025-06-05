/** @type {import('tailwindcss').Config} */
module.lintrolling = false; // Disable lint rolling for this file
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx,vue,astro}",
    "./src/components/**/*.{html,js,jsx,ts,tsx,vue,astro}", // If components were in src
    "./public/js/**/*.js", // If JS files might add/remove Tailwind classes
  ],
  darkMode: 'class', // or 'media' if you prefer OS-level detection primarily
  theme: {
    extend: {
      colors: {
        // Light Theme
        light: {
          background: '#F8F8F8', // Main background
          surface: '#FFFFFF',    // Card backgrounds, modals
          primary: '#4A90E2',    // Lion Blue - primary accent
          secondary: '#F06292',  // Rose - secondary accent
          tertiary: '#9C27B0',   // Purple - tertiary accent
          quaternary: '#00BFA5', // Teal - quaternary accent
          text: {
            DEFAULT: '#1D1D1F', // Apple's primary text (near black)
            secondary: 'rgba(60, 60, 67, 0.78)', // Apple's secondary label
            tertiary: 'rgba(60, 60, 67, 0.58)',  // Apple's tertiary label
            link: '#007AFF',     // Standard blue link
          },
          border: 'rgba(60, 60, 67, 0.29)', // Apple's separator
        },
        // Dark Theme
        dark: {
          background: '#0D0D0F', // Main background
          surface: '#1C1C1E',    // Card backgrounds, modals (Apple's secondarySystemGroupedBackground)
          primary: '#4A90E2',    // Lion Blue - primary accent (can be brightened for dark mode if needed, e.g., '#5AAFFF')
          secondary: '#F06292',  // Rose - secondary accent
          tertiary: '#9C27B0',   // Purple - tertiary accent
          quaternary: '#00BFA5', // Teal - quaternary accent
          text: {
            DEFAULT: '#FFFFFF', // Apple's primary text (near white)
            secondary: 'rgba(235, 235, 245, 0.78)', // Apple's secondary label
            tertiary: 'rgba(235, 235, 245, 0.58)',  // Apple's tertiary label
            link: '#0A84FF',     // Standard blue link (brighter for dark mode)
          },
          border: 'rgba(84, 84, 88, 0.65)', // Apple's separator (dark)
        },
        // Aliases for easier use (will be overridden by light/dark theme specifics)
        'lion-blue': '#4A90E2',
        'lion-rose': '#F06292',
        'lion-purple': '#9C27B0',
        'lion-teal': '#00BFA5',
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      spacing: { // 8-point grid system
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '3.5': '28px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
        '11': '88px',
        '12': '96px',
        '14': '112px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
        '28': '224px',
        '32': '256px',
        // ... and so on
      },
      fontSize: { // Apple HIG Inspired Scale
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1.0625rem', { lineHeight: '1.5rem' }], // 17px (SF Pro Text often 17pt)
        'lg': ['1.1875rem', { lineHeight: '1.75rem' }], // 19px
        'xl': ['1.375rem', { lineHeight: '1.75rem' }], // 22px
        '2xl': ['1.75rem', { lineHeight: '2rem' }], // 28px
        '3xl': ['2.125rem', { lineHeight: '2.5rem' }], // 34px
        '4xl': ['2.75rem', { lineHeight: '1.15' }], // 44px
        '5xl': ['3.5rem', { lineHeight: '1.15' }], // 56px
        '6xl': ['4.25rem', { lineHeight: '1.1' }], // 68px
        '7xl': ['5rem', { lineHeight: '1' }], // 80px
      },
      letterSpacing: {
        tight: '-0.025em', // Common for SF Pro
        normal: '0',
        wide: '0.025em',
      },
      lineHeight: {
        'tighter': '1.2', // For headings
        'tight': '1.35',
        'snug': '1.45',
        'normal': '1.6', // Good for body text
        'relaxed': '1.75',
        'loose': '2',
      },
      borderRadius: {
        'sm': '0.25rem', // 4px
        'md': '0.5rem',  // 8px
        'lg': '0.75rem', // 12px
        'xl': '1rem',    // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem',   // 32px
        'apple': '10px', // Common Apple card radius
        'apple-lg': '18px', // Larger Apple elements
        'apple-sm': '6px',
      },
      boxShadow: {
        // Mimicking Apple's depth system (subtle, diffused shadows)
        'apple-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'apple': '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.08)',
        'apple-md': '0 10px 20px rgba(0,0,0,0.07), 0 6px 6px rgba(0,0,0,0.07)',
        'apple-lg': '0 15px 30px rgba(0,0,0,0.08), 0 10px 15px rgba(0,0,0,0.08)',
        'apple-xl': '0 25px 50px rgba(0,0,0,0.1), 0 15px 25px rgba(0,0,0,0.1)',
        // Inner shadows for pressed states or depth
        'apple-inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'noise-light': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
        'noise-dark': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // ... more keyframes for animations.css inspiration
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.light.text.DEFAULT'),
            a: {
              color: theme('colors.light.text.link'),
              '&:hover': {
                color: theme('colors.light.primary'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              // fontWeight: '600', // Semibold for SF Pro like headings
              // letterSpacing: theme('letterSpacing.tight'),
            },
            // ... other prose defaults
            'code::before': { content: '""' }, // Remove backticks from inline code
            'code::after': { content: '""' },
            'code': {
              // backgroundColor: theme('colors.gray.100'), // Example
              // padding: '0.2em 0.4em',
              // borderRadius: theme('borderRadius.sm'),
              // fontWeight: '400',
            },
            'pre': {
              // backgroundColor: theme('colors.gray.800'), // Example dark code block
              // color: theme('colors.gray.200'),
              // padding: theme('spacing.4'),
              // borderRadius: theme('borderRadius.md'),
            }
          },
        },
        dark: { // For prose in dark mode
          css: {
            color: theme('colors.dark.text.DEFAULT'),
            a: {
              color: theme('colors.dark.text.link'),
              '&:hover': {
                color: theme('colors.dark.primary'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.dark.text.DEFAULT'),
            },
            'strong': {
              color: theme('colors.dark.text.DEFAULT'),
            },
            // ... other dark prose overrides
            'code': {
              // backgroundColor: theme('colors.gray.700'),
            },
            'pre': {
              // backgroundColor: theme('colors.gray.900'),
              // color: theme('colors.gray.300'),
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Potentially other plugins like forms, aspect-ratio if needed
  ],
};