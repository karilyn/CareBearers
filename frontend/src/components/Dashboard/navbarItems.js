import EventNoteIcon from '@mui/icons-material/EventNote';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainNavBarItems = [
  {
    id: 0,
    icon: <MoreTimeIcon />,
    label: 'Book Care',
    route: '/book',
  },
  {
    id: 1,
    icon: <EventNoteIcon />,
    label: 'Reservations',
    route: '/reservations',

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
  },
  
  {
    id: 4,
    icon: <LogoutIcon />,
    label: 'Logout',
    route: '/logout',
  }

]