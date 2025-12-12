/**
 * Theme system for the website
 * Each theme defines a complete color scheme
 * Updated to reflect the club logo's gold, navy, and cyan aesthetic
 */

export const themes = {
  auricCore: {
    name: 'Auric Core',
    hint: 'Gold primary · Cyan accents',
    colors: {
      accent: '#D4AF37',
      accentDark: '#A97810',
      accentBright: '#FFD56F',
      accentSubtle: 'rgba(212, 175, 55, 0.2)',
      cyan: '#15D1D3',
      cyanBright: '#4AF4F5',
      cyanSubtle: 'rgba(21, 209, 211, 0.25)',
      muted: '#8FA6C6',
      text: '#E8F0F8',
      textBright: '#FFFFFF',
      textSecondary: '#CAD6EB',
      bg: '#050D1A',
      bgGradientStart: '#132039',
      bgGradientEnd: '#02060E',
      card: '#111C2F',
      cardHover: '#182640',
      cardGlass: 'rgba(14, 24, 46, 0.7)',
      cardBorder: 'rgba(255, 255, 255, 0.08)',
      shadowSoft: '0 12px 45px rgba(4, 9, 18, 0.45)',
      navBg: 'rgba(5, 13, 26, 0.92)',
      navBorder: 'rgba(255, 255, 255, 0.08)',
      navText: '#F8F6ED',
      borderSubtle: 'rgba(255, 255, 255, 0.05)',
      borderMedium: 'rgba(255, 255, 255, 0.08)',
      borderAccent: 'rgba(212, 175, 55, 0.45)',
      borderCyan: 'rgba(21, 209, 211, 0.35)',
      bgOverlay: 'rgba(212, 175, 55, 0.08)',
      bgHover: 'rgba(255, 255, 255, 0.05)'
    }
  },

  pulseCyan: {
    name: 'Pulse Cyan',
    hint: 'Cyan primary · Gold accents',
    colors: {
      accent: '#18D0FF',
      accentDark: '#0891B2',
      accentBright: '#5DE3FF',
      accentSubtle: 'rgba(24, 208, 255, 0.2)',
      cyan: '#F3B640',
      cyanBright: '#FFD981',
      cyanSubtle: 'rgba(243, 182, 64, 0.25)',
      muted: '#96ADCB',
      text: '#E9F7FF',
      textBright: '#FFFFFF',
      textSecondary: '#C4E3F7',
      bg: '#031221',
      bgGradientStart: '#072036',
      bgGradientEnd: '#01070F',
      card: '#0E1E33',
      cardHover: '#132847',
      cardGlass: 'rgba(6, 22, 38, 0.75)',
      cardBorder: 'rgba(147, 197, 253, 0.18)',
      shadowSoft: '0 18px 55px rgba(2, 12, 24, 0.55)',
      navBg: 'rgba(4, 19, 34, 0.9)',
      navBorder: 'rgba(88, 196, 255, 0.35)',
      navText: '#E9F7FF',
      borderSubtle: 'rgba(255, 255, 255, 0.04)',
      borderMedium: 'rgba(88, 196, 255, 0.25)',
      borderAccent: 'rgba(24, 208, 255, 0.45)',
      borderCyan: 'rgba(243, 182, 64, 0.35)',
      bgOverlay: 'rgba(24, 208, 255, 0.08)',
      bgHover: 'rgba(255, 255, 255, 0.05)'
    }
  },

  graphite: {
    name: 'Graphite Noir',
    hint: 'Neutral dark · Copper accent',
    colors: {
      accent: '#F97316',
      accentDark: '#C2410C',
      accentBright: '#FDBA74',
      accentSubtle: 'rgba(249, 115, 22, 0.16)',
      cyan: '#4CC9F0',
      cyanBright: '#9BE2FF',
      cyanSubtle: 'rgba(76, 201, 240, 0.22)',
      muted: '#99A3B5',
      text: '#F5F5F7',
      textBright: '#FFFFFF',
      textSecondary: '#D5DAE4',
      bg: '#050505',
      bgGradientStart: '#0F0F10',
      bgGradientEnd: '#010103',
      card: '#131318',
      cardHover: '#1E1E23',
      cardGlass: 'rgba(16, 16, 21, 0.7)',
      cardBorder: 'rgba(255, 255, 255, 0.05)',
      shadowSoft: '0 18px 60px rgba(0, 0, 0, 0.55)',
      navBg: 'rgba(5, 5, 7, 0.92)',
      navBorder: 'rgba(255, 255, 255, 0.08)',
      navText: '#F5F5F7',
      borderSubtle: 'rgba(255, 255, 255, 0.04)',
      borderMedium: 'rgba(255, 255, 255, 0.09)',
      borderAccent: 'rgba(249, 115, 22, 0.35)',
      borderCyan: 'rgba(76, 201, 240, 0.25)',
      bgOverlay: 'rgba(255, 255, 255, 0.04)',
      bgHover: 'rgba(255, 255, 255, 0.06)'
    }
  },

  daylight: {
    name: 'Daylight',
    hint: 'Light UI · Navy accents',
    colors: {
      accent: '#D97706',
      accentDark: '#B45309',
      accentBright: '#FBBF24',
      accentSubtle: 'rgba(249, 115, 22, 0.15)',
      cyan: '#2563EB',
      cyanBright: '#60A5FA',
      cyanSubtle: 'rgba(37, 99, 235, 0.22)',
      muted: '#6B7280',
      text: '#111827',
      textBright: '#0F172A',
      textSecondary: '#4B5563',
      bg: '#F5F6FA',
      bgGradientStart: '#FFFFFF',
      bgGradientEnd: '#E5ECFF',
      card: '#FFFFFF',
      cardHover: '#F8FAFC',
      cardGlass: 'rgba(255, 255, 255, 0.85)',
      cardBorder: 'rgba(15, 23, 42, 0.08)',
      shadowSoft: '0 15px 35px rgba(15, 23, 42, 0.1)',
      navBg: 'rgba(255, 255, 255, 0.92)',
      navBorder: 'rgba(15, 23, 42, 0.12)',
      navText: '#0F172A',
      borderSubtle: 'rgba(15, 23, 42, 0.06)',
      borderMedium: 'rgba(15, 23, 42, 0.12)',
      borderAccent: 'rgba(249, 115, 22, 0.25)',
      borderCyan: 'rgba(37, 99, 235, 0.25)',
      bgOverlay: 'rgba(15, 23, 42, 0.03)',
      bgHover: 'rgba(15, 23, 42, 0.06)'
    }
  }
}

// Default theme
export const DEFAULT_THEME = 'auricCore'

// Get current theme from localStorage or use default
export function getCurrentTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME
  return localStorage.getItem('theme') || DEFAULT_THEME
}

// Set theme and save to localStorage
export function setTheme(themeName) {
  if (typeof window === 'undefined') return
  
  const theme = themes[themeName] || themes[DEFAULT_THEME]
  
  // Apply CSS variables
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase()
    root.style.setProperty(cssVarName, value)
  })
  
  // Save to localStorage
  localStorage.setItem('theme', themeName)
}

// Initialize theme on page load
export function initTheme() {
  const themeName = getCurrentTheme()
  setTheme(themeName)
}
