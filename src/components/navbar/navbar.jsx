import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from './navbar.module.css'
import { tabs } from './tabs';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Navbar() {
  const [value, setValue] = useState('/');
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <div style={{width:"100vw", position:"fixed", bottom:0, boxShadow:"0px 0px 0.5px black"}}>
    <BottomNavigation value={value} onChange={handleChange}>
        {tabs.map((tab) => (      
              <BottomNavigationAction
                  onClick={() => handleClick(tab.link)}
                  className={value == tab.value ? styles.navbarBtnActive : styles.navbarBtn}
                  label={tab.label}
                  value={tab.value}
                  icon={tab.icon}
                  key={tab.label}
              />
        ))}
    </BottomNavigation>
    </div>
  );
}