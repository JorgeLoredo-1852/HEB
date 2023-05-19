import { createContext } from "react";

const SearchContext = createContext({
    searchInfo: {},
    setSearchInfo: () => ""
})

export default SearchContext;