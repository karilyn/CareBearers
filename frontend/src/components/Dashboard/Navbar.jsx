import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { parentNavBarItems, caregiverNavBarItems } from './navbarItems';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../AppState.jsx';

const Navbar = () => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const { state, dispatch } = useAppState();

  const isCaregiver = state.user.is_caregiver

  


  return (

    <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
        style={{ width: '20%' }}
      >
        <Toolbar />
        <Divider />
        <List>
          {(isCaregiver ? caregiverNavBarItems : parentNavBarItems).map((item, index) => (
            <ListItem
                button
                key={item.id}
                onClick={() => {
                  if (item.route === '/logout'){
                    dispatch({type: 'logout'});
                    navigate('/');
                  } else {
                      navigate(item.route)
                    }
                }}>
              <ListItemButton selected={selectedIndex === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}>
                <ListItemIcon sx={navbarStyles.icons}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={navbarStyles.text}
                  primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Navbar;