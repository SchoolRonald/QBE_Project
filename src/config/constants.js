/**
 * Application configuration and constants
 */

export const APP_CONFIG = {
  clubName: 'Mines AI & ML Club',
  schoolName: 'Colorado School of Mines',
  schoolWebsite: 'https://mines.edu',
  logo: '/src/assets/club-logo.jpg',
}

export const ROUTES = {
  HOME: '#home',
  EVENTS: '#events',
  PROJECTS: '#projects',
  CONTACT: '#contact'
}

export const EXTERNAL_LINKS = {
  ORECONNECT: 'https://oreconnect.mines.edu/feeds?type=club&type_id=67510&tab=about'
}

export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Events', href: ROUTES.EVENTS },
  { label: 'Projects', href: ROUTES.PROJECTS },
  { label: 'Contact', href: ROUTES.CONTACT }
]

export const BREAKPOINTS = {
  mobile: 700,
  tablet: 900,
  desktop: 1100
}

export const DATE_FORMAT_OPTIONS = {
  full: { month: 'long', day: 'numeric', year: 'numeric' },
  short: { month: 'short', day: 'numeric', year: 'numeric' },
  monthYear: { month: 'long', year: 'numeric' }
}
