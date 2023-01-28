import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();
  
  useEffect(()=>{
    if(value===0) navigate('/');
    if(value===1) navigate('/movies');
    if(value===2) navigate('/search');
    if(value===3) navigate('/tvshows');
  },[value,navigate]);

  return (
    <Box sx={{ 
        width: '100%',
        position:"fixed",
        bottom:0,
        zIndex:100,
        boxShadow: 5 ,
        backgroundColor:"#0e0e0e"
     }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="TV series" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}
 