import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from './navbar.module.css'
import { tabs } from './tabs';

export default function Navbar() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{width:"100vw", position:"fixed", bottom:0}}>
    <BottomNavigation value={value} onChange={handleChange}>
        {tabs.map((tab) => (      
            <BottomNavigationAction
                className={value == tab.value ? styles.navbarBtnActive : styles.navbarBtn}
                label={tab.label}
                value={tab.value}
                icon={tab.icon}
            />
        ))}
    </BottomNavigation>
    </div>
  );
}