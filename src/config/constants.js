/**
 * Application configuration and constants
 */

export const APP_CONFIG = {
  clubName: 'GRÖNSPRÖT',
  schoolName: 'Colorado School of Mines',
  schoolWebsite: 'https://mines.edu',
  logo: '/QBE_Project/club-logo.jpg',
}

export const ROUTES = {
  HOME: '#/home',
  BACKGROUND: '#/background',
  MODEL: '#/model',
  VISUALIZATION: '#/visualization',
  CONTACT: '#/contact'
};


export const EXTERNAL_LINKS = {
  ORECONNECT: 'https://oreconnect.mines.edu/feeds?type=club&type_id=67510&tab=about'
}

export const NAV_LINKS = [
  { id: ROUTES.HOME, label: 'Home' },
  { id: ROUTES.BACKGROUND, label: 'Background' },
  { id: ROUTES.MODEL, label: 'Model' },
  { id: ROUTES.VISUALIZATION, label: 'Model Visualization' },
  { id: ROUTES.CONTACT, label: 'Contact' }
];


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
