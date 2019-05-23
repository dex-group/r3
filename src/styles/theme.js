import { keyframes } from 'styled-components'

const flicker = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`

const transitions = {
  default: 'cubic-bezier(0.23, 1, 0.32, 1)',
  defaultSpeed: '0.25',
  in: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  out: 'cubic-bezier(0.23, 1, 0.32, 1)',
  outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  inOut: 'cubic-bezier(0.86, 0, 0.07, 1)',
  inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}

export const theme = {
  colors: {
    base: '#0C0A0A',
    white: '#ffffff',
    secondary: '#443E4C', // Medium Gray
    tertiary: '#8c8c8c', // Light Gray
    highlight: '#43E7FD',
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  animations: {
    flicker,
  },
  transitions,
}
