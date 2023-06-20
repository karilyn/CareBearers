import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";

//If logged in user is a parent, Navbar.jsx maps these items
export const parentNavBarItems = [
  {
    id: 0,
    icon: <MoreTimeIcon />,
    label: "Book Care",
    route: "/dashboard/book",
  },
  {
    id: 1,
    icon: <EventNoteIcon />,
    label: "Reservations",
    route: "/dashboard/calendar",
  },
  {
    id: 2,
    icon: <ReviewsIcon />,
    label: "Leave a Review",
    route: "/dashboard/review",
  },
  {
    id: 3,
    icon: <AccountCircleIcon />,
    label: "Profile",
    route: "/dashboard/myprofile",
  },
  {
    id: 4,
    icon: <EscalatorWarningIcon />,
    label: "My Kids",
    route: "/dashboard/kids",
  },

  {
    id: 5,
    icon: <LogoutIcon />,
    label: "Logout",
    route: "/logout",
  },
];

//If logged in user is a caregiver, Navbar.jsx maps these items
export const caregiverNavBarItems = [
  {
    id: 0,
    icon: <MoreTimeIcon />,
    label: "Requests",
    route: "/dashboard/requests",
  },
  {
    id: 1,
    icon: <EventNoteIcon />,
    label: "Reservations",
    route: "/dashboard/calendar",
  },
  {
    id: 2,
    icon: <ReviewsIcon />,
    label: "Leave a Review",
    route: "/dashboard/review",
  },
  {
    id: 3,
    icon: <AccountCircleIcon />,
    label: "Profile",
    route: "/dashboard/myprofile",
  },
  {
    id: 4,
    icon: <EscalatorWarningIcon />,
    label: "My Kids",
    route: "/dashboard/kids",
  },

  {
    id: 5,
    icon: <LogoutIcon />,
    label: "Logout",
    route: "/logout",
  },
];
