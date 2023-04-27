import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import SearchContext from "@/hooks/SearchContext";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  boxShadow: "0px 3px 3px rgba(0,0,0,0.25)",
  border: "1px solid rgba(0,0,0,0.1)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  paddingTop: "5px",
  paddingBottom: "5px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  marginBottom: "20px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "6px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1.2, 1.2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "200px",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const SearchBox = () => {
  const { searchInfo, setSearchInfo } = useContext(SearchContext);
  const [searchWord, setSearchWord] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (router.asPath != "/search") {
      router.push("/search");
    }
    setSearchInfo(searchWord);
    console.log(searchWord);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <form>
        <StyledInputBase
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          placeholder="¿De qué tienes antojo?"
          inputProps={{ "aria-label": "search" }}
        />
      </form>
    </Search>
  );
};

export default SearchBox;
