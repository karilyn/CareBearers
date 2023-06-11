import EventNoteIcon from '@mui/icons-material/EventNote';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import LogoutIcon from '@mui/icons-material/Logout';
import ReviewsIcon from '@mui/icons-material/Reviews';

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
    route: '/calendar',

  },
  {
    id: 2,
    icon: <ReviewsIcon />,
    label: 'Leave a Review',
    route: '/review'
  },
  {
    id: 3,
    icon: <AccountCircleIcon />,
    label: 'Profile',
    route: '/dashboard/profile',
  },
  {
    id: 4,
    icon: <EscalatorWarningIcon />,
    label: 'My Kids',
    route: '/kids',
  },
  
  {
    id: 5,
    icon: <LogoutIcon />,
    label: 'Logout',
    route: '/logout',
  }

]