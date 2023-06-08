import EventNoteIcon from '@mui/icons-material/EventNote';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

export const mainNavBarItems = [
  {
    id: 0,
    icon: <EventNoteIcon />,
    label: 'Reservations',
    route: '/reservations',

  },
  {
    id: 1,
    icon: <PaidIcon />,
    label: 'Payments',
    route: '/payments',
  },
  {
    id: 2,
    icon: <AccountCircleIcon />,
    label: 'Profile',
    route: '/profile',
  },
  {
    id: 3,
    icon: <EscalatorWarningIcon />,
    label: 'My Kids',
    route: '/kids',
  }

]