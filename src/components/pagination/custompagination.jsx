import React from 'react'
import Pagination from '@mui/material/Pagination';
import {createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
const lightTheme = createTheme({
    palette: {
        primary: {
          main: '#d1c4e9',
        },
        secondary: {
          main: '#b388ff',
        },
      },
  });
  
  export default function CustomPagination({ setPage, numOfPages = 10 }) {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0, 0);
    };
  
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
          color:"#cfd8dc"
        }}
      >
        <ThemeProvider theme={lightTheme}>
          <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages}
            color="primary"
            hideNextButton
            hidePrevButton
            variant="outlined"
          />
        </ThemeProvider>
      </div>
    );
  }