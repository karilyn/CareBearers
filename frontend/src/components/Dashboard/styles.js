export const navbarStyles = {
  drawer: {
    width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#00373e',
            color: '#ffffff'
          },
          '& .Mui-selected': {
            color: '#94954c',
          },

  },
  icons: {
    color: '#ffffff',
    marginLeft: '20px',
  },
  text: {
    '& span': {
        marginLeft: '-10px',
        fontWeight: '600',
        fontSize: '16px,'
  }
}
};