import { ThemeProvider } from "@emotion/react";
import { Button, createTheme, Tab, Tabs, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Singlecontent from "../../SingleContent/singlecontent";
import CustomPagination from "../../pagination/custompagination";
import './search.css'

const Search =() =>{
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

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

      const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
                  process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
              );
          setContent(data.results);
          setNumOfPages(data.total_pages);
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page]);
    

   return(
       <div>
        <ThemeProvider theme ={lightTheme}>
            <div style={{display:"flex",margin:"15px 0",boxShadow:"0 1px 5px white",color:"white"}}>
            <TextField
        style={{flex:1,
        color:"white"}}
        className="searchBox"
        label="Search"
        variant="filled"
        onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" style={{marginleft: 10 }} onClick={fetchSearch}><SearchIcon/></Button>
            </div>
            <Tabs
            value={type}
            indicatorColor="primary"
            textcolor="primary"
            onChange={(event,newValue)=>{
                setType(newValue);
                setPage(1);
            }
            }>
                <Tab style={{width:"50%",boxShadow:"0 1px 5px white",color:"white"}} label="Search Movies"/>
                <Tab style={{width:"50%",boxShadow:"0 1px 5px white",color:"white"}} label="Search TV Series"/>
            </Tabs>
        </ThemeProvider>
        <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={type ? "tv" : "movie"}
            vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
       </div>
   )
}
export default Search